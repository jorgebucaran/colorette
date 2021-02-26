#!/bin/sh

[ `FORCE_COLOR= node -e '
    import("colorette").then(({ blue }) => console.log(blue("window")))
  '` = `printf '\e[34mwindow\e[39m'` ]