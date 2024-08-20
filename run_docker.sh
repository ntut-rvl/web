#!/bin/bash

PROJ_NAME=rvlweb
VERSION=1.0

docker build \
  --build-arg USER_NAME=rvl \
  --build-arg GROUP_NAME=rvl \
  --build-arg USER_ID=1001 \
  --build-arg GROUP_ID=1001 \
  -f dockerfile.dev \
  -t ${PROJ_NAME}:${VERSION} .

docker run -it --rm --name rvlweb -v .:/app -p 3000:3000 -p 5173:5173 ${PROJ_NAME}:${VERSION} ash
