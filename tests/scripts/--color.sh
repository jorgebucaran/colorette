#!/bin/sh

[ `node --eval 'import("./index.js").then(({ blue }) => console.log(blue("foobar")))' -- --color` = `printf '\e[34mfoobar\e[39m'` ]


