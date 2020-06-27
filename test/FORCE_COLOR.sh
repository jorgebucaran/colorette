#!/bin/sh

[ "$(echo `FORCE_COLOR= node -e 'console.log(require(".").blue("hello"))' | strings`)" = "[34mhello [39m" ] || exit 1