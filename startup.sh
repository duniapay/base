#!/bin/sh

if [ "$NODE_ENV" = "production" ]; then
  node src/index.js;
else
  nodemon src/index.js;
fi