#!/bin/bash

#download node and npm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
. ~/.nvm/nvm.sh
nvm install node

#create our working directory if it doesnt exist
DIR="/home/ubuntu/publishing-app"
if [ -d "$DIR" ]; then
  echo "${DIR} exists"
  rm /home/ubuntu/publishing-app/package.json
else
  echo "Creating ${DIR} directory"
  mkdir ${DIR}
fi