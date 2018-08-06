# Benchmarks

Results may vary across Node.js runtimes. All tests run on a 2.4GHz Intel Core i7 CPU with 16 GB memory.

```
npm i && node .
```

<pre>
# Load Time
chalk: 15.653ms
kleur: 1.195ms
ansi-colors: 1.227ms
<em>turbocolor: 0.740ms</em>

# Using Styles
chalk × 8,634 ops/sec
kleur × 290,343 ops/sec
ansi-colors × 93,980 ops/sec
<em>turbocolor × 374,825 ops/sec</em>

# Chaining Styles
chalk × 1,802 ops/sec
kleur × 44,709 ops/sec
ansi-colors × 14,495 ops/sec
<em>turbocolor × 52,300 ops/sec</em>

# Nesting Styles
chalk × 12,088 ops/sec
kleur × 176,561 ops/sec
ansi-colors × 82,132 ops/sec
<em>turbocolor × 190,595 ops/sec</em>
</pre>
