#!/bin/bash
set -e

cd ../vmbc/script
. ./utils.sh
cd -

echo ---------------- Deleting vmbc-sirato Namespace ----------------
kubectl delete namespace vmbc-sirato
