#!/bin/bash
set -e

if [ -z "$1" ]; then
  echo "Usage: docker run ... yourfile.pdb"
  exit 1
fi

node render.js "$1"
