const robot = require('robotjs')

robot.setKeyboardDelay(0.1)
robot.setMouseDelay(0.1)

const { getRandomNumber } = require('./utils')

const screenSize = robot.getScreenSize()

const actions = {
  moveForward: () => robot.keyToggle('w', 'down'),

  moveMouse: () =>
    robot.moveMouseSmooth(
      getRandomNumber(0, screenSize.width),
      getRandomNumber(0, screenSize.height),
      2
    ),

  switchGunfire: () =>
    setInterval(() => {
      if (getRandomNumber(0, 1)) robot.mouseClick()
      else robot.mouseToggle()
    }, 1000)
}

module.exports = { actions }
