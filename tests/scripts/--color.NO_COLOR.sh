#!/bin/sh

[ `NO_COLOR= node --eval 'import("./index.js").then(({ blue }) => console.log(blue("foobar")))' -- --color` = foobar ]
