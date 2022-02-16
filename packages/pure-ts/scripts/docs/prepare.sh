#!/bin/bash

# Clean up dirs
rm -rf ./dist ./etc ./markdown ./temp

# Create necessary dirs
mkdir ./dist ./etc ./markdown ./temp

# Build TypeScript
./node_modules/.bin/tsc
