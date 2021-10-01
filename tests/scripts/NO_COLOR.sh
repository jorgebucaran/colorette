#!/bin/sh

[ `NO_COLOR= node --eval '

    import("./index.js").then(({ createColors }) =>
      console.log(createColors().blue("foobar")))

  '` = "foobar" ]

