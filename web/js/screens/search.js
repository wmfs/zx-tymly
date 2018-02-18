const searchScreen = {
  ink: 7,
  bright: 0,
  paper: 3,
  border: 3,
  udgs: ['searchLeft', 'searchRight'],
  init: function (screen, gVars) {
    const search = gVars.inputBoxes.search
    search.show()
    search.focus()

  },
  render: function (screen) {
    screen.paper(3).ink(7)

    screen.paper(7).ink(3)
    paintGfx('searchLeft', 10, 3)
    paintGfx('searchRight', 10, 28)

    screen.paper(7).ink(1)
    screen.printAt(10, 6, '                      ')
    screen.printAt(12, 6, '                      ')
  },

  leave: function (screen, gVars) {
    const search = gVars.inputBoxes.search
    search.hide()
  }
}


