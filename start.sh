#!/bin/bash
echo "Building db..."
docker build . -f ./Dockerfile-db -t culto-start-db:local

echo "Building webserver..."
docker build . -f ./Dockerfile-webserver -t culto-start-webserver:local

echo "Building webapp..."
docker build . -f ./Dockerfile-webapp -t culto-start-webapp:local

echo "Starting db..."
docker run --rm -d -p 27017:27017 --name culto-start-db --volume culto-start-db-volume:/data/db culto-start-db:local

echo "Starting webserver..."
docker run --rm -d -p 3000:3000 --name culto-start-webserver culto-start-webserver:local

echo "Starting webapp..."
docker run --rm -d -p 80:8080 --name culto-start-webapp culto-start-webapp:local

echo "Db running on 27017, Webserver running on 3000, Webapp running on 80!"