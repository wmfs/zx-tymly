const loginScreen = {
  ink: 7,
  bright: 0,
  paper: 1,
  border: 1,
  udgs: ['auth0', 'lock', 'face', 'chevronRight'],
  init: function (screen, gVars) {
    const username = gVars.inputBoxes.username
    const password = gVars.inputBoxes.password
    username.show()
    password.show()
    username.focus()
  },
  render: function (screen) {
    for (let y = 1; y < 7; y++) {
      screen.paper(7).bright(0).ink(2).printAt(y, 6, '                    ')
      screen.paper(0).printAt(y, 26, ' ')
    }

    screen.paper(7).bright(0).ink(2)
    paintGfx('auth0', 1, 14)
    screen.paper(7).bright(0).ink(0)
    screen.printAt(5, 13, 'AUTH0!')

    for (let y = 0; y < 4; y++) {
      screen.paper(7).bright(1).ink(2).printAt(y + 7, 6, '                    ')
      screen.paper(0).printAt(y + 7, 26, ' ')
      screen.paper(7).bright(1).ink(2).printAt(y + 12, 6, '                    ')
      screen.paper(0).printAt(y + 12, 26, ' ')
      if (y < 3) {
        screen.paper(7).bright(1).ink(2).printAt(y + 17, 6, '                    ')
        screen.paper(0).printAt(y + 17, 26, ' ')
      }
    }

    screen.paper(7).bright(1).printAt(11, 6, ' ')
    screen.printAt(11, 25, ' ')
    screen.printAt(16, 6, ' ')
    screen.printAt(16, 25, ' ')

    screen.paper(0).bright(0).ink(2).printAt(22, 7, '                    ')
    screen.printAt(11, 26, ' ')
    screen.printAt(16, 26, ' ')
    screen.printAt(20, 26, ' ')
    screen.printAt(21, 26, ' ')

    screen.paper(7).bright(1).ink(0).printAt(9, 7, 'Username/email')
    // screen.paper(7).bright(0).ink(2).printAt(11, 7, '                  ')
    //
    screen.paper(7).bright(1).ink(0).printAt(14, 7, 'Password')
    // screen.paper(7).bright(0).ink(2).printAt(16, 7, '                  ')
    //
    screen.ink(0).bright(0)
    paintGfx('face', 11, 7)
    paintGfx('lock', 16, 7)

    screen.paper(1).bright(0).ink(2).printAt(1, 26, ' ')
    screen.paper(2).bright(0).ink(7).printAt(19, 6, '                    ')
    screen.paper(2).bright(0).ink(7).printAt(20, 6, '      LOG IN        ')
    screen.paper(2).bright(0).ink(7).printAt(21, 6, '                    ')

    paintGfx('chevronRight', 20, 19)

  },
  leave: function (screen, gVars) {
    const username = gVars.inputBoxes.username
    const password = gVars.inputBoxes.password
    username.hide()
    password.hide()
  }
}


