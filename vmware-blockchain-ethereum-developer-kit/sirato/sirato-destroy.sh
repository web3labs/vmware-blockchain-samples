#!/bin/bash

echo ---------------- Deleting Epirus-mogodb PoD ----------------
kubectl delete -f mongodb-deployment.yml

echo ---------------- Deleting Epirus-web PoD ----------------
kubectl delete -f web-deployment.yml

echo ---------------- Deleting Epirus-api PoD ----------------
kubectl delete -f api-deployment.yml

echo ---------------- Deleting Epirus-ingestion PoD ----------------
kubectl delete -f ingestion-deployment.yml

echo ---------------- Deleting Epirus-ingestion PoD ----------------
kubectl delete -f nginx-deployment.yaml

echo ---------------- Deleting vmbc-sirato Namespace ----------------
kubectl delete namespace vmbc-sirato

echo ---------------- Removing web and api service ----------------
kubectl delete svc web-service api-service


echo ---------------- Removing tmp files and nginx error dir----------------
rm -rvf mongodb-deployment.yml web-deployment.yml api-deployment.yml ingestion-deployment.yml nginx.conf /www/error_pages

echo ---------------- Removing nginx conf ----------------
service nginx stop
mv /etc/nginx/bkp-conf /etc/nginx/nginx.conf
service nginx start

echo --------------- Killing minikube tunnel ---------------
kill $(ps aux | grep 'minikube tunnel' | awk '{print $2}')

sleep 10

echo ---------------- Removing sirato images ----------------
minikube image rm docker.io/web3labs/epirus-free-api:latest
minikube image rm docker.io/web3labs/epirus-free-ingestion:latest
minikube image rm docker.io/web3labs/epirus-free-web:latest

echo ========================== DONE ===========================
