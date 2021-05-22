#!/bin/bash

#navigate into our working directory where we have all our github files
cd /home/ec2-user/publishing-app
sudo chmod -R 777 /home/ec2-user/publishing-app

#add npm and node to path
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"]
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"

npm install

npm run build
npm run start