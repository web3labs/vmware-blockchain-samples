#!/bin/bash
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

kubectl apply -f mongodb-deployment.yml,web-deployment.yml

echo fetching mongodb IP.....
sleep 60
name=$(kubectl get pods | grep mongo | awk -F '1/1' '{print $1}')
ip=$(kubectl describe pod $name | awk -F 'IP:               ' '{print $2}')
echo $name
echo $ip
latest=$(echo $ip)
sed -i "s|IP|$latest|g" "ingestion-deployment.yml"
sed -i "s|IP|$latest|g" "api-deployment.yml"

kubectl apply -f api-deployment.yml,ingestion-deployment.yml