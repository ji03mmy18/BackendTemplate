#!/bin/sh

echo "Build Mode: $1"
sh $PWD/scripts/clean.sh

echo "Generating tsoa Route"
tsoa routes

if [ "${1}" = "swagger" ]; then
  echo "Generating tsoa spec"
  tsoa spec
  # npm run tsoa:spec
fi

echo "Building..."
tsc -p $PWD/build.tsconfig.json

echo "Build Completed."
