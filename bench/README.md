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
chalk: 11.418ms
ansi-colors: 1.048ms
kleur: 0.920ms
<b>turbocolor: 0.681ms</b>

# All Colors
chalk × 8,544 ops/sec
ansi-colors × 94,701 ops/sec
kleur × 125,096 ops/sec
<b>turbocolor × 163,410 ops/sec</b>

# Chained Colors
chalk × 1,842 ops/sec
ansi-colors × 15,214 ops/sec
kleur × 37,478 ops/sec
<b>turbocolor × 39,664 ops/sec</b>

# Nested Colors
chalk × 4,144 ops/sec
ansi-colors × 38,601 ops/sec
kleur × 48,755 ops/sec
<b>turbocolor × 60,527 ops/sec</b>
</pre>
