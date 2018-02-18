var gVars = {}
var username
var password

function SGXPrepare_OS () {
  gVars.scale = 2
  gVars.status = ''
  gVars.screens = {
    login: loginScreen,
    launch: launchScreen,
    search: searchScreen,
    formCategories: formCategoriesScreen,
    forms: formsScreen
  }
  gVars.mainSurface = sgxskeleton.init(320 * gVars.scale, 240 * gVars.scale)
}

function SGXinit () {}

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

function setScreen (screenName) {
  const screen = zx.system.screen
  if (gVars.currentScreen) {
    gVars.screens[gVars.currentScreen].leave(screen, gVars)
  }

  const props = gVars.screens[screenName]
  gVars.udgInfo = setUdgs(zx, props.udgs) // 1
  props.init(screen, gVars)

  // username = zx.system.inputAt(8, 10, 'Username')
  // password = zx.system.inputAt(12, 10, 'Password')
  //
  // username.focus()
  // password.setPassword()
  //
  // $(username).on('enter', function (e, text) {
  //   password.focus()
  //   return false
  // })
  //
  // $(password).on('enter', function (e, text) {
  //   gVars.status = text === 'password' ? 'Welcome aboard!' : 'Access  denied!'
  //   return false
  // })

  gVars.currentScreen = screenName
}

function renderScreen () {
  const screen = zx.system.screen
  const props = gVars.screens[gVars.currentScreen]
  screen.ink(props.ink).paper(props.paper).cls()
  screen.border(props.border)
  zx.system.draw()
  props.render(screen)
}

function processInkeys () {
  const props = gVars.screens[gVars.currentScreen]
  if (props.hasOwnProperty('inkeys')) {
    Object.keys(props.inkeys).forEach(
      function (key) {
        if (zx.inkey$() === key) {
          const f = props.inkeys[key]
          f()
        }
      }
    )
  }
}

function registerInputBoxes () {
  gVars.inputBoxes = {}

  gVars.inputBoxes.username = zx.system.inputAt(11, 8)
  const username = gVars.inputBoxes.username
  username.setSurround(false)
  username.maxlength = 16
  username.hide()

  gVars.inputBoxes.password = zx.system.inputAt(16, 8)
  const password = gVars.inputBoxes.password
  password.setSurround(false)
  password.setPassword()
  username.maxlength = 16
  password.hide()

  gVars.inputBoxes.search = zx.system.inputAt(11, 6, 'Search')
  const search = gVars.inputBoxes.search
  search.setSurround(false)
  search.maxlength = 21
  search.hide()
  $(search).on('enter', function (e, text) {
    if (text === '') {
      setScreen('launch')
    }
    return false
  })



  gVars.inputBoxes.form = zx.system.inputAt(12, 10)
  const form = gVars.inputBoxes.form
  form.setSurround(false)
  form.hide()

  // Add some textbox events
  $(username).on('enter', function (e, text) {
    gVars.inputBoxes.password.focus()
    return false
  })

  $(password).on('enter', function (e, text) {
    setScreen('launch')
    return false
  })

}

function SGXstart () {
  new zx.spectrum(gVars.mainSurface, gVars.scale)
  registerInputBoxes()
  setScreen('login')
}

function SGXdraw () {
  renderScreen()
  processInkeys()
}

function SGXupdate (telaps) {
  zx.system.update(telaps)
}
