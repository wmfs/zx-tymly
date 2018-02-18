const launchScreen = {
  ink: 5,
  bright: 1,
  paper: 0,
  border: 0,
  udgs: ['logo1', 'logo2', 'menu', 'pill'],
  init: function (screen, gVars) {

  },
  render: function (screen) {
    screen.printAt(5, 4, 'Dashboard')
    screen.printAt(7, 4, 'Forms')
    screen.printAt(9, 4, 'Search')
    screen.printAt(11, 4, 'Live')
    screen.printAt(13, 4, 'Todo list')
    screen.printAt(15, 4, 'Alerts')
    screen.printAt(17, 4, 'Nearby')
    screen.printAt(19, 4, 'History')
    screen.printAt(21, 4, 'Preferences')

    screen.ink(7)
    paintGfx('logo1', 0, 0)
    screen.ink(5)
    paintGfx('logo2', 1, 0)
    screen.ink(4)
    screen.printAt(3, 0, 'Menu')
    paintGfx('menu', 3, 5)

    paintPill(5, 0, '1', 0, 1, 7)
    paintPill(7, 0, '2', 0, 1, 7)
    paintPill(9, 0, '3', 0, 1, 7)
    paintPill(11, 0, '4', 0, 1, 7)
    paintPill(13, 0, '5', 0, 1, 7)
    paintPill(15, 0, '6', 0, 1, 7)
    paintPill(17, 0, '7', 0, 1, 7)
    paintPill(19, 0, '8', 0, 1, 7)
    paintPill(21, 0, '9', 0, 1, 7)

  },
  leave: function (screen, gVars) {},

  inkeys: {
    '1': function () {
      // console.log('Dashboard')
    },
    '2': function () {
      setScreen('formCategories')
    },
    '3': function () {
      setScreen('search')
    },
    '4': function () {
      // setScreen('live')
    },
    '5': function () {
      // console.log('Todo')
    },
    '6': function () {
      // console.log('Alerts')
    },
    '7': function () {
      // console.log('Nearby')
    },
    '8': function () {
      // console.log('History')
    },
    '9': function () {
      // console.log('Preferences')
    }
  }
}


