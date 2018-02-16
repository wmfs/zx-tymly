# ZX Tymly

> An example Tymly App client, in the style of a ZX Spectrum. 

## Disclaimer

This really is an evolving (read: badly written) project to satisfy a curiosity concerning how Tymly might look running on a [ZX Spectrum](https://en.wikipedia.org/wiki/ZX_Spectrum).
 
* Developed as a side-hobby-project: no tax-dollars were harmed in the development of ZX Tymly!

## Credits

Based on, and inspired by, the brilliant [ZXJavascript](https://github.com/MarquisdeGeek/ZXJavascript) project by [MarquisdeGeek](https://github.com/MarquisdeGeek).


## Current screenshots

__Authenticate!__

__Menu!__


__Search!__


### Running

Just serve the contents of `/web` for now. For those with [Node.js](https://nodejs.org/en/) installed:

``` bash
npm install serve -g
cd web
serve
```

* ...ZX Tymly will be available [http://localhost:5000](http://localhost:5000).

## Changing screens

Currently a bit torturous, ahead of introducing some [input](https://github.com/MarquisdeGeek/ZXJavascript/tree/master/examples/input).

* Edit the `/web/js/zx-tymly.js` file
* Change the `currentScreen` value to suit:

```javascript
//   Set currentScreen to:
//     1 = Launch screen
//     2 = Auth screen
//     3 = Search
//     4 = Start

const gVars = {
  currentScreen: 1
}
``` 



### <a name="license"></a>License

[MIT](https://github.com/wmfs/zx-tymly/blob/master/LICENSE)
