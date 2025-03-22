#!/bin/bash
STOP_APP_START=0

echo "Stopping webapp..."
docker stop culto-start-webapp || echo "Failed to stop webapp!" && STOP_APP_START=1

echo "Stopping webserver..."
docker stop culto-start-webserver  || echo "Failed to stop webserver!" && STOP_APP_START=1

echo "Stopping db..."
docker stop culto-start-db  || echo "Failed to stop db!" && STOP_APP_START=1

if [ $STOP_APP_START -eq 0 ];
then echo "Application stopped!"
else echo "Error on stopping application!"
fi

unset STOP_APP_START