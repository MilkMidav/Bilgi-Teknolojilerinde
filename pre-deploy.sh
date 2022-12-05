#!/bin/bash
cp ./src/index.html ./dist/index.html &&
 cp -r ./src/img ./dist/img &&
 sed -r -i 's/\.\.\/\dist/\./g' ./dist/index.html &&
 sed -r -i 's/\.\.\/src\/img/img/g' ./dist/index.html && 
 sed -r -i 's/\\\.\\\.\\\/src\\\/img/img/g' ./dist/output.css && 
 sed -r -i 's/\.\.\/src\/img/img/g' ./dist/output.css