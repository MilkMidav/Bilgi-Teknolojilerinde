#!/bin/bash
mkdir dist && cp ./src/index.html ./dist/index.html && cp -r ./src/img ./dist/img && sed -r -i 's/\.\.\/\dist/\./g' ./dist/index.html
