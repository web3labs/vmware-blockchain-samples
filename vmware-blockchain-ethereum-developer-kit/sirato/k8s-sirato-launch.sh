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

infoln ''
infoln '---------------- Creating Sirato Configmaps ----------------'
kubectl create namespace ${NAMESPACE}
kubectl create cm sirato-configmap --from-env-file=../vmbc/.env.config --namespace ${NAMESPACE}
sleep 5

cp k8s-mongodb.yml.tmpl k8s-mongodb.yml

kubectl apply -f k8s-mongodb.yml