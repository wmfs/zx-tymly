const formCategoriesScreen = {
  ink: 4,
  bright: 0,
  paper: 0,
  border: 0,
  udgs: ['pencilShaft', 'pencilMetal', 'nib', 'heart', 'pill', 'chevronLeft', 'pencilPaper'],
  init: function (screen, gVars) {

  },
  render: function (screen) {
    paintPill(2, 0, '1', 0, 6, 1)
    paintPill(4, 0, '2', 0, 6, 1)
    paintPill(6, 0, '3', 0, 6, 1)


    screen.ink(4).paper(0).printAt(0, 0, 'Form categories')

    screen.ink(7)
    screen.bright(1).printAt(2, 4, 'Favourites!')
    screen.bright(0).printAt(4, 4, 'Prevention')
    screen.printAt(6, 4, 'Response')

    paintPill(23, 2, '0', 0, 4, 0)
    screen.paper(0).ink(4)
    paintGfx('chevronLeft', 23, 0)
    screen.printAt(23, 6, 'Back')

    screen.paper(2).printAt(0, 29, '   ')
    screen.paper(2).printAt(1, 29, '   ')
    screen.paper(7).printAt(2, 29, '   ')
    screen.paper(7).printAt(3, 29, '   ')

    screen.paper(0).ink(2).bright(1)
    paintGfx('heart', 2, 16)

    var y
    for (y = 0; y < 2; y++) {
      screen.paper(2).ink(3).bright(1).printAt(y, 29, udgChars[0])
      screen.paper(2).ink(7).bright(0).printAt(y, 30, ' ')
      screen.paper(2).ink(0).bright(0).printAt(y, 31, udgChars[2])
    }
    screen.printAt(0, 31, udgChars[1])

    for (y = 2; y < 4; y++) {
      screen.paper(7).ink(1).bright(1).printAt(y, 29, udgChars[3])
      screen.paper(7).ink(1).bright(0).printAt(y, 30, udgChars[4])
      screen.paper(7).ink(0).bright(0).printAt(y, 31, udgChars[5])
    }

    for (y = 4; y < 21; y++) {
      screen.paper(6).ink(7).bright(1).printAt(y, 29, udgChars[0])
      screen.paper(6).ink(7).bright(0).printAt(y, 30, ' ')
      screen.paper(6).ink(0).bright(0).printAt(y, 31, udgChars[2])
    }

    screen.paper(0).ink(7)
    screen.bright(1).printAt(21, 29, udgChars[11])
    screen.bright(0).printAt(21, 30, udgChars[12])
    screen.bright(0).printAt(21, 31, udgChars[13])
    screen.bright(1).printAt(22, 29, udgChars[14])
    screen.bright(0).printAt(22, 30, udgChars[15])
    screen.bright(0).printAt(22, 31, udgChars[16])

    //paintGfx('pencilPaper', 21, 29)
    screen.paper(0).ink(5)
    paintGfx('nib', 23, 30)
  },
  leave: function (screen, gVars) {

  },

  inkeys: {
    '0': function () {
      setScreen('launch')
    },
    '1': function () {
      setScreen('forms')
    },
    '2': function () {
      setScreen('forms')
    },
    '3': function () {
      setScreen('forms')
    }


  }
}


