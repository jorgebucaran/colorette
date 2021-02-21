#!/bin/sh

[ `FORCE_COLOR= node -e '
    import("colorette").then(({ blue }) =>
      console.log(blue("hello")))
  '` = "$(echo '\x1b[34mhello\x1b[39m')" ]
