var esc = '\u001B[';

module.exports = {
  cursorHome: function (row, column) { return esc + (row && column && (row + ';' + column)) + 'H'; },
  cursorUp: function (count) { return esc + (count || 1) + 'A'; },
  cursorDown: function (count) { return esc + (count || 1) + 'B'; },
  cursorForward: function (count) { return esc + (count || 1) + 'C'; },
  cursorBackward: function (count) { return esc + (count || 1) + 'D'; },
  eraseEndLine: esc + 'K',
  eraseStartLine: esc + '1K',
  eraseLine: esc + '2K',
  eraseDown: esc + 'J',
  eraseUp: esc + '1J',
  eraseScreen: esc + '2J'
};
