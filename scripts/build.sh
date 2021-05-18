#!/bin/sh

echo "Clean Old File"
sh $PWD/scripts/clean.sh

echo "Building..."
tsc -p $PWD/build.tsconfig.json

echo "Build Completed."
