#!/bin/bash

ALL_FILES=$(find src -name "*.proto" | awk '{printf("%s ",$0)} END { printf "\n" }' )



pbjs -t static-module  $ALL_FILES  -w commonjs -o js/protos.js