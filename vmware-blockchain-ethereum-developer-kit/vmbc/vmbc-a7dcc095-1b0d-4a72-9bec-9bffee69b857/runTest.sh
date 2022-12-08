kubectl create cm erc20-test-configmap --from-file=./testing --namespace=vmbc-a7dcc095-1b0d-4a72-9bec-9bffee69b857-client1
kubectl apply -f ./runTest.yml --namespace=vmbc-a7dcc095-1b0d-4a72-9bec-9bffee69b857-client1
