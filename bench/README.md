# Benchmarks

Results may vary across Node.js runtimes. All tests run on a 2.4GHz Intel Core i7 CPU with 16 GB memory.

```
npm i --prefix bench && node bench
```

<pre>
# Load Time
chalk: 15.211ms
ansi-colors: 1.010ms
kleur: 1.226ms
<b>turbocolor: 0.764ms</b>

# All Colors
chalk × 8,922 ops/sec
ansi-colors × 93,614 ops/sec
kleur × 299,561 ops/sec
<b>turbocolor × 390,123 ops/sec</b>

# Chained Colors
chalk × 1,897 ops/sec
ansi-colors × 14,944 ops/sec
kleur × 41,776 ops/sec
<b>turbocolor × 49,343 ops/sec</b>

# Nested Colors
chalk × 4,154 ops/sec
ansi-colors × 38,756 ops/sec
kleur × 83,751 ops/sec
<b>turbocolor × 92,831 ops/sec</b>
</pre>
