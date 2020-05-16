#!/bin/sh

[ `NO_COLOR= node -e 'console.log(require(".").blue("ok"))'` = "ok" ] || exit 1
