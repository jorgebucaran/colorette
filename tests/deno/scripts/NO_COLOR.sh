#!/bin/sh
DENO_OUT=`NO_COLOR= deno run tests/deno/scripts/no_color.js`
PRINTF_OUT=`printf 'window'`
if [ $DENO_OUT = $PRINTF_OUT ]; then
    exit 0
  else
    exit 1
fi
