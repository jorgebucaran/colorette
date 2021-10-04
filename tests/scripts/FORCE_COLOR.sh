#!/bin/sh

[ `FORCE_COLOR= ./tests/scripts/bin.js` = `printf '\e[34mfoo\e[39m'` ]