#!/bin/bash

NAME="bwalia/matrixcx-dashboard"
TAG=$(git log -1 --pretty=%H)
IMG=${NAME}:${TAG}
LATEST=${NAME}:latest

echo "Building image... $IMG"

docker build -t ${IMG} .

echo "Tagging...$LATEST"

docker tag ${IMG} ${LATEST}

docker push ${NAME}
