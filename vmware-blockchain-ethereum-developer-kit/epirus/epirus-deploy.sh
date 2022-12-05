#!/bin/bash
kubectl create namespace vmbc-epirus
NAMESPACE="vmbc-epirus"

cp epirus-net-networkpolicy.yml.tmpl epirus-net-networkpolicy.yml
cp api-deployment.yml.tmpl api-deployment.yml
cp ingestion-deployment.yml.tmpl ingestion-deployment.yml
cp mongodb-deployment.yml.tmpl mongodb-deployment.yml
cp web-deployment.yml.tmpl web-deployment.yml

kubectl apply -f epirus-net-networkpolicy.yml,mongodb-deployment.yml,web-deployment.yml
sleep 10
name=$(kubectl get pods | grep mongo | awk -F '1/1' '{print $1}')
ip=$(kubectl describe pod $name | awk -F 'IP:               ' '{print $2}')
echo $name
echo $ip
latest=$(echo $ip)
sed -i "s|172.17.0.5|$latest|g" "ingestion-deployment.yml"
sed -i "s|172.17.0.5|$latest|g" "api-deployment.yml"
kubectl apply -f api-deployment.yml,ingestion-deployment.yml
