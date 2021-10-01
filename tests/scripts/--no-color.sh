#!/bin/sh

[ `node --eval 'import("./index.js").then(({ blue }) => console.log(blue("foobar")))' -- --no-color` = 'foobar' ]

