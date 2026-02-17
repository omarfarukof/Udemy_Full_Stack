#! /bin/sh
npm i
npm audit fix
node $1
