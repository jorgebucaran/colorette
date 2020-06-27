#!/bin/sh

[ `NO_COLOR= node -e 'console.log(require(".").blue("hello"))'` = "hello" ] || exit 1