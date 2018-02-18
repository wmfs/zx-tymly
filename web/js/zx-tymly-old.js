'use strict'

// Bit rough at the moment...
//   Set currentScreen to:
//     1 = Launch screen
//     2 = Auth screen
//     3 = Search
//     4 = Start

const gVars = {
  currentScreen: 2
}
var username;

function SGXPrepare_OS () {
  gVars.scale = 2
  gVars.status = ""
  gVars.mainSurface = sgxskeleton.init(320 * gVars.scale, 240 * gVars.scale)
}

const udgChars = [
  zx.chr$(0x90),
  zx.chr$(0x91),
  zx.chr$(0x92),
  zx.chr$(0x93),
  zx.chr$(0x94),
  zx.chr$(0x95),
  zx.chr$(0x96),
  zx.chr$(0x97),
  zx.chr$(0x98),
  zx.chr$(0x99),
  zx.chr$(0x9A),
  zx.chr$(0x9B),
  zx.chr$(0x9C),
  zx.chr$(0x9D),
  zx.chr$(0x9E),
  zx.chr$(0x9F),
  zx.chr$(0xA0),
  zx.chr$(0xA1),
  zx.chr$(0xA2),
  zx.chr$(0xA3),
  zx.chr$(0xA4)
]

function paintPill (posY, posX, text, paper, ink, textInk) {
  const screen = zx.system.screen
  const info = gVars.udgInfo.pill
  const leftChar = udgChars[info.baseIdx]
  const rightChar = udgChars[info.baseIdx + 1]
  screen.paper(paper).ink(ink).printAt(posY, posX, leftChar)
  screen.paper(paper).ink(ink).printAt(posY, posX + text.length + 1, rightChar)
  screen.paper(ink).ink(textInk).printAt(posY, posX + 1, text)
}

function paintGfx (gfxName, posY, posX) {
  const info = gVars.udgInfo[gfxName]
  const screen = zx.system.screen
  for (let y = 0; y < info.height; y++) {
    for (let x = 0; x < info.width; x++) {
      let char = udgChars[info.baseIdx + (y * info.width) + x]
      screen.printAt(posY + y, posX + x, char)
    }
  }
}

function SGXinit () {}

function SGXstart () {
  new zx.spectrum(gVars.mainSurface, gVars.scale)

  var username = zx.system.inputAt(8,10,"Username");
  var password = zx.system.inputAt(12,10,"Password");

  username.focus();
  password.setPassword();

  $(username).on('enter', function(e, text) {
    password.focus();
    return false;
  });

  $(password).on('enter', function(e, text) {
    gVars.status = text == "password" ? "Welcome aboard!" : "Access  denied!";
    return false;
  });

  switch (gVars.currentScreen) {
    case 1:
      gVars.udgInfo = setUdgs(zx, ['logo1', 'logo2', 'menu', 'pill']) // 1
      break

    case 2:
      gVars.udgInfo = setUdgs(zx, ['auth0', 'lock', 'face', 'chevronRight'])
      break

    case 3:
      gVars.udgInfo = setUdgs(zx, ['searchLeft', 'searchRight', 'pill', 'chevronLeft']) // 3
      break

    case 4:
      gVars.udgInfo = setUdgs(zx, ['ship', 'wingLeft', 'wingRight', 'pill', 'chevronLeft']) // 3
      break

  }
}

function SGXdraw () {

  const screen = zx.system.screen
  // We draw zx.system first, which is primarily the border, although it's not strictly necessary
  // // General code, redraw in full each frame
  screen.border(0).paper(0).ink(5).cls()

  zx.system.draw()

  switch (gVars.currentScreen) {
    case 1:

      screen.border(0)
      screen.paper(0)

      screen.bright(1)

      screen.printAt(5, 4, 'My dashboard')
      screen.printAt(7, 4, 'Start something new')
      screen.printAt(9, 4, 'Find something')
      screen.printAt(11, 4, 'My todo list')
      screen.printAt(13, 4, 'Alerts')
      screen.printAt(15, 4, 'Nearby things')
      screen.printAt(17, 4, 'My history')
      screen.printAt(19, 4, 'Preferences')

      screen.ink(7)
      paintGfx('logo1', 0, 0)
      screen.ink(5)
      paintGfx('logo2', 1, 0)
      screen.ink(4)
      screen.printAt(3, 2, 'Menu')
      paintGfx('menu', 3, 0)

      paintPill(5, 0, 'D', 0, 1, 6)
      paintPill(7, 0, 'S', 0, 1, 6)
      paintPill(9, 0, 'F', 0, 1, 6)
      paintPill(11, 0, 'T', 0, 1, 6)
      paintPill(13, 0, 'A', 0, 1, 6)
      paintPill(15, 0, 'N', 0, 1, 6)
      paintPill(17, 0, 'H', 0, 1, 6)
      paintPill(19, 0, 'P', 0, 1, 6)
      break

    case 2:
      screen.border(1)
      screen.paper(1)
      screen.ink(0)
      screen.bright(0)
      screen.cls()

      for (let y = 1; y < 7; y++) {
        screen.paper(7).bright(0).ink(2).printAt(y, 6, '                    ')
        screen.paper(0).printAt(y, 26, ' ')
      }

      screen.paper(7).bright(0).ink(2)
      paintGfx('auth0', 1, 14)
      screen.paper(7).bright(0).ink(0)
      screen.printAt(5, 13, 'AUTH0!')

      for (let y = 7; y < 22; y++) {
        screen.paper(7).bright(1).ink(2).printAt(y, 6, '                    ')
        screen.paper(0).printAt(y, 26, ' ')
      }
      screen.paper(0).bright(0).ink(2).printAt(22, 7, '                    ')

      screen.paper(7).bright(1).ink(0).printAt(9, 7, 'Username/email')
      screen.paper(7).bright(0).ink(2).printAt(11, 7, '                  ')

      screen.paper(7).bright(1).ink(0).printAt(14, 7, 'Password')
      screen.paper(7).bright(0).ink(2).printAt(16, 7, '                  ')

      screen.ink(0)
      paintGfx('face', 11, 7)
      paintGfx('lock', 16, 7)

      screen.paper(1).bright(0).ink(2).printAt(1, 26, ' ')
      screen.paper(2).bright(0).ink(7).printAt(19, 6, '                    ')
      screen.paper(2).bright(0).ink(7).printAt(20, 6, '      LOG IN        ')
      screen.paper(2).bright(0).ink(7).printAt(21, 6, '                    ')

      paintGfx('chevronRight', 20, 19)

      screen.paper(3).ink(7).printAt(11, 8, ' ')

      break

    case 3:
      screen.border(3)
      screen.paper(3)
      screen.ink(7)
      screen.bright(0)
      screen.cls()
      screen.printAt(6, 4, 'Find something!')
      screen.printAt(23, 9, 'Menu')
      paintGfx('chevronLeft', 23, 1)

      screen.paper(7).ink(3)
      paintGfx('searchLeft', 8, 3)
      paintGfx('searchRight', 8, 28)

      screen.paper(7).ink(1)
      screen.printAt(8, 6, '                      ')
      screen.printAt(9, 6, '                      ')
      screen.printAt(10, 6, '                      ')
      screen.paper(2).printAt(9, 6, ' ')
      paintPill(23, 3, 'ESC', 3, 7, 3)
      break

    case 4:
      screen.border(0)
      screen.paper(0)
      screen.ink(2)
      screen.bright(1)
      screen.cls()
      paintGfx('ship', 0, 14)
      screen.bright(0)
      screen.ink(2)
      paintGfx('chevronLeft', 23, 1)
      screen.printAt(2, 0, 'Start')
      screen.printAt(3, 0, 'something!')

      screen.ink(7).bright(1)
      paintGfx('wingLeft', 2, 13)
      paintGfx('wingRight', 2, 16)
      screen.ink(7).bright(0)
      screen.printAt(5, 12, zx.chr$(0xA2))
      screen.printAt(5, 17, zx.chr$(0xA3))
      screen.printAt(23, 9, 'Menu')
      paintPill(23, 3, 'ESC', 0, 7, )

      screen.paper(7).bright(1).printAt(5, 14, '  ')
  }
}

function SGXupdate(telaps) {
  zx.system.update(telaps);
}