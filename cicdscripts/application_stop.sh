#!/bin/bash

#Stopping existing node servers
echo "Stopping any existing node servers"
sudo pm2 delete PublishingApp
pkill node