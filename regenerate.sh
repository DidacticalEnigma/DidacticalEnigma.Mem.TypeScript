#!/bin/bash
npx autorest --typescript --input-file=swagger.json --package-name=didactical-enigma-mem --add-credentials=false --output-folder=.
