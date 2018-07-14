# Benchmarks

[Turbocolor](../README.md) vs. [ansi-colors](https://github.com/doowb/ansi-colors), [chalk](https://github.com/chalk/chalk) and [kleur](https://github.com/lukeed/kleur) benchmark results.

## Run

```
npm i && node .
```

## Results

Results may slightly vary across Node.js runtimes. All tests run on a 2.4GHz Intel Core i7 CPU with 16 GB memory.

<pre>
# Load Time
chalk: 15.190ms
ansi-colors: 1.024ms
kleur: 0.943ms
<b>turbocolor: 0.777ms</b>

# All Colors
chalk × 8,729 ops/sec
ansi-colors × 94,710 ops/sec
kleur × 124,678 ops/sec
<b>turbocolor × 158,383 ops/sec</b>

# Chained Colors
chalk × 1,838 ops/sec
ansi-colors × 15,035 ops/sec
kleur × 35,086 ops/sec
<b>turbocolor × 39,830 ops/sec</b>

# Nested Colors
chalk × 4,049 ops/sec
ansi-colors × 38,878 ops/sec
kleur × 48,976 ops/sec
<b>turbocolor × 59,833 ops/sec</b>
</pre>
