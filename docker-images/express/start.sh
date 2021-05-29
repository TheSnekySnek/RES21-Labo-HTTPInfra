#!/bin/sh

# Set serf role as dynamic
echo "Starting agent"
serf agent &
sleep 2

# Set serf role as dynamic
echo "Setting role as dynamic"
serf tags -set role=dynamic

# Use serf to join the cluster with the dynamic tag
echo "Joining cluster"
serf join $RP_IP

# Start the node application in the background
echo "Starting App"
node /opt/app/index.js