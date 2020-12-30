console.time('colorette');
const colorette = require('..');
console.timeEnd('colorette');

console.time('chalk');
const chalk = require('chalk');
console.timeEnd('chalk');

console.time('kleur');
const kleur = require('kleur');
console.timeEnd('kleur');

console.time('colors');
const colors = require('colors');
console.timeEnd('colors');

console.time('ansi-colors');
const ansiColors = require('ansi-colors');
console.timeEnd('ansi-colors');
