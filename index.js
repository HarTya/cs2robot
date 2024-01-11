const { actions } = require('./actions')
const readline = require('readline')

readline.emitKeypressEvents(process.stdin)

if (process.stdin.isTTY) process.stdin.setRawMode(true)

process.stdin.on('keypress', (_, key) => {
  if (key && key.name == 'f4')
    while (true) {
      actions.moveForward()
      actions.moveMouse()
      actions.switchGunfire()
    }

  if (key && key.name == 'q') process.exit(1)
})
