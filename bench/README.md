# Benchmarks

Results may vary across Node.js runtimes. All tests run on a 2.4GHz Intel Core i7 CPU with 16 GB memory.

```
npm i --prefix bench && node bench
```

<pre>
# Load Time
chalk: 14.661ms
ansi-colors: 1.050ms
kleur: 1.226ms
<b>turbocolor: 0.740ms</b>

# All Colors
chalk × 9,064 ops/sec
ansi-colors × 97,435 ops/sec
kleur × 291,646 ops/sec
<b>turbocolor × 430,379 ops/sec</b>

# Chained Colors
chalk × 1,898 ops/sec
ansi-colors × 15,102 ops/sec
kleur × 42,026 ops/sec
<b>turbocolor × 49,959 ops/sec</b>

# Nested Colors
chalk × 4,001 ops/sec
ansi-colors × 39,206 ops/sec
kleur × 84,731 ops/sec
<b>turbocolor × 96,996 ops/sec</b>
</pre>
