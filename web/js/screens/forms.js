const formsScreen = {
  ink: 4,
  bright: 0,
  paper: 0,
  border: 0,
  udgs: ['pencilShaftH', 'pencilMetalH', 'nibH', 'heart', 'pill', 'chevronLeft', 'pencilPaperH'],
  init: function (screen, gVars) {

  },
  render: function (screen) {

    let x
    for (x = 0; x < 2; x++) {
      screen.paper(2).ink(3).bright(1).printAt(0, x, udgChars[0])
      screen.paper(2).ink(7).bright(0).printAt(1, x, ' ')
      screen.paper(2).ink(0).bright(0).printAt(2, x, udgChars[2])
    }
    screen.printAt(2, 0, udgChars[1])

    for (x = 2; x < 4; x++) {
      screen.paper(7).ink(1).bright(1).printAt(0, x, udgChars[3])
      screen.paper(7).ink(1).bright(0).printAt(1, x, udgChars[4])
      screen.paper(7).ink(0).bright(0).printAt(2, x, udgChars[5])
    }

    for (x = 4; x < 29; x++) {
      screen.paper(6).ink(7).bright(1).printAt(0, x, udgChars[0])
      screen.paper(6).ink(7).bright(0).printAt(1, x, ' ')
      screen.paper(6).ink(0).bright(0).printAt(2, x, udgChars[2])
    }

    screen.paper(0).ink(7)
    screen.bright(1).printAt(0, 29, udgChars[11])
    screen.bright(1).printAt(0, 30, udgChars[12])
    screen.bright(0).printAt(1, 29, udgChars[13])
    screen.bright(0).printAt(1, 30, udgChars[14])
    screen.bright(0).printAt(2, 29, udgChars[15])
    screen.bright(0).printAt(2, 30, udgChars[16])

    screen.paper(0).ink(5)
    paintGfx('nibH', 1, 31)

    screen.ink(1).paper(6).printAt(1, 5, 'PREVENTION')

    screen.ink(4).paper(0).printAt(4, 0, 'Forms')

    paintPill(6, 0, '1', 0, 6, 1)
    paintPill(8, 0, '2', 0, 6, 1)
    // paintPill(12, 0, '3', 0, 1, 0)
    // paintPill(14, 0, '4', 0, 1, 0)
    // paintPill(16, 0, '5', 0, 1, 0)
    // paintPill(18, 0, '6', 0, 1, 0)
    // paintPill(20, 0, '7', 0, 1, 0)


    //
    screen.ink(7).paper(0).bright(1)
    screen.printAt(6, 4, 'Safe & Strong')
    screen.printAt(8, 4, 'Safe & Well')
    // screen.printAt(6, 4, 'Response')
    //
    paintPill(23, 2, '0', 0, 4, 0)
    screen.paper(0).ink(4)
    paintGfx('chevronLeft', 23, 0)
    screen.printAt(23, 6, 'Back')
    //
    // screen.paper(2).printAt(0, 29, '   ')
    // screen.paper(2).printAt(1, 29, '   ')
    // screen.paper(7).printAt(2, 29, '   ')
    // screen.paper(7).printAt(3, 29, '   ')
    //
    // screen.paper(0).ink(2).bright(1)
    // paintGfx('heart', 2, 16)
    //
    // var y
    // for (y = 0; y < 2; y++) {
    //   screen.paper(2).ink(3).bright(1).printAt(y, 29, udgChars[0])
    //   screen.paper(2).ink(7).bright(0).printAt(y, 30, ' ')
    //   screen.paper(2).ink(0).bright(0).printAt(y, 31, udgChars[2])
    // }
    // screen.printAt(0, 31, udgChars[1])
    //
    // for (y = 2; y < 4; y++) {
    //   screen.paper(7).ink(1).bright(1).printAt(y, 29, udgChars[3])
    //   screen.paper(7).ink(1).bright(0).printAt(y, 30, udgChars[4])
    //   screen.paper(7).ink(0).bright(0).printAt(y, 31, udgChars[5])
    // }
    //
    // for (y = 4; y < 21; y++) {
    //   screen.paper(6).ink(7).bright(1).printAt(y, 29, udgChars[0])
    //   screen.paper(6).ink(7).bright(0).printAt(y, 30, ' ')
    //   screen.paper(6).ink(0).bright(0).printAt(y, 31, udgChars[2])
    // }
    //
    // screen.paper(0).ink(7)
    // screen.bright(1).printAt(21, 29, udgChars[11])
    // screen.bright(0).printAt(21, 30, udgChars[12])
    // screen.bright(0).printAt(21, 31, udgChars[13])
    // screen.bright(1).printAt(22, 29, udgChars[14])
    // screen.bright(0).printAt(22, 30, udgChars[15])
    // screen.bright(0).printAt(22, 31, udgChars[16])
    //
    // screen.paper(0).ink(5)
    // paintGfx('nib', 23, 30)
  },
  leave: function (screen, gVars) {

  },

  inkeys: {
    '0': function () {
      setScreen('formCategories')
    }
  }
}


