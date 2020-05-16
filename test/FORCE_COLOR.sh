#!/bin/sh

[ "$(echo `FORCE_COLOR= node -e 'console.log(require(".").blue("ok"))' | strings`)" = "[34mok [39m" ] || exit 1
