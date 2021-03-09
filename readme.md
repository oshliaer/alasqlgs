# AlaSQLGS

AlaSQLGS is a library that enables the use of the [AlaSQL.js](http://alasql.org) library in [Google Apps Script](https://developers.google.com/apps-script/).
API docs are available [here](https://script.google.com/macros/library/versions/d/1XWR3NzQW6fINaIaROhzsxXqRREfKXAdbKoATNbpygoune43oCmez1N8U).

## Adding the library to your project

AlaSQL for Google Apps Script is made available as a script library. This is how you add it to your project:

1. Click "Add a library" in the Libraries section of the left pane in the Apps Script IDE.
2. Enter the project key (`1XWR3NzQW6fINaIaROhzsxXqRREfKXAdbKoATNbpygoune43oCmez1N8U`) in the "Script ID" field, and click "Look up".
3. Select the highest version number, and choose `AlaSQL` as the identifier. (Do not turn on Development Mode unless you know what you are doing. The development version may not work)
4. Press "Add". You can now use the AlaSQL library in your code.

## Loading the library

To load AlaSQLGS:

```js
const alasql = AlaSQLGS.load();
```

The library supports lazzy loading.

## Copying the library

A Google Apps Script project for AlaSQL is available [here](https://script.google.com/d/1XWR3NzQW6fINaIaROhzsxXqRREfKXAdbKoATNbpygoune43oCmez1N8U/edit?usp=sharing).

1. Select Overview left pane in the Apps Script IDE.
1. In the upper right corner find the copy icon.

## Samples

[Data and code](https://drive.google.com/drive/folders/1iG34CHDVBIwqG8yOcjJYHl3gx1IsTzOJ?usp=sharing)

## Links

- [agershun/alasql](https://github.com/agershun/alasql)

## License

AlaSQLGS for Google Apps Script is released under the MIT license.
