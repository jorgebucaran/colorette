#!/bin/sh
DENO_OUT=`FORCE_COLOR= deno run tests/deno/scripts/no_color.js`
PRINTF_OUT=`printf '\e[34mwindow\e[39m'`
if [ $DENO_OUT = $PRINTF_OUT ]; then
    exit 0
  else
    exit 1
fi
