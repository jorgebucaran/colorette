#!/bin/sh

[ `NO_COLOR= node -e '
    import("colorette").then(({ blue }) => console.log(blue("window")))
  '` = "window" ]
