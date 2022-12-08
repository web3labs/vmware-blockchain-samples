#!/usr/bin/env bash

while true 
do
	if [[ `kubectl get pods | grep mongo | awk '{ print $3 }'` != "Running" ]] 
	then
		sleep 5
	else
		break
	fi
done

