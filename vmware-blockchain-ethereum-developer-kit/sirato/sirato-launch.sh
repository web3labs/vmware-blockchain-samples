#!/usr/bin/env bash
set -e

cd ../vmbc/script

. ./utils.sh

# Souce proper env
sourceEnv

# Check Pre-requisites
checkPreReqs

# Get the options
getOptions
cd -

# Check minikube status
if [ "$ENABLE_MINIKUBE" == "true" ] || [ "$ENABLE_MINIKUBE" == "True" ] || [ "$ENABLE_MINIKUBE" == "TRUE" ]; then
  isMinikubeRunning
fi

NAMESPACE="vmbc-sirato"

if [ ! -f ../vmbc/.env.config ]; then
   infoln ''
   fatalln '---------------- file ../vmbc/.env.config does not exist. ----------------'
fi

cp api-deployment.yml.tmpl api-deployment.yml
cp ingestion-deployment.yml.tmpl ingestion-deployment.yml
cp mongodb-deployment.yml.tmpl mongodb-deployment.yml
cp web-deployment.yml.tmpl web-deployment.yml
cp nginx.conf.tmpl nginx.conf

kubectl apply -f mongodb-deployment.yml
echo fetching mongodb IP.....
while [[ `kubectl get pods | grep -i mongo | awk '{print $3}'` != "Running" ]]; do
	sleep 1
done
name=$(kubectl get pods | grep mongo | awk -F '1/1' '{print $1}')
ip=$(kubectl get pod $name  -o json |jq .status.podIP | tr -d '"')
echo $name
echo $ip
latest=$(echo $ip)
sed -i "s|IP|$latest|g" "ingestion-deployment.yml"
sed -i "s|IP|$latest|g" "api-deployment.yml"
endpoint=$(cat ../vmbc/.env.config | awk -F '=' '{print $2}')
sed -i "s|NODEENDPOINT|$endpoint|g" "ingestion-deployment.yml"
sed -i "s|NODEENDPOINT|$endpoint|g" "api-deployment.yml"
kubectl apply -f api-deployment.yml,ingestion-deployment.yml,web-deployment.yml
nohup minikube tunnel >/dev/null 2>&1 &
kubectl expose deployment api --port=8090  --name=api-service --type=NodePort
kubectl expose deployment web --port=3000  --name=web-service --type=NodePort
echo updating api and web cluster IP on nginx.conf
sleep 10
apiIP=$(kubectl get svc | grep api-service | awk '{ print $3 }')
webIP=$(kubectl get svc | grep web-service | awk '{ print $3 }')
sed -i "s|APICLUSTERIP|$apiIP|g" "nginx.conf"
sed -i "s|WEBCLUSTERIP|$webIP|g" "nginx.conf"
mkdir -p /www/error_pages/
cp 5xx.html /www/error_pages/
cp /etc/nginx/nginx.conf /etc/nginx/bkp-conf
cp nginx.conf /etc/nginx/
service nginx restart
