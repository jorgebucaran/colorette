#!/bin/sh

[ `FORCE_COLOR= node --eval '

    import("./index.js").then(({ createColors }) =>
      console.log(createColors().blue("foobar")))

  '` = `printf '\e[34mfoobar\e[39m'` ]