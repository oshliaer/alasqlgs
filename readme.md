# AlaSQLGS

AlaSQLGS is a library that enables the use of the [AlaSQL.js](http://alasql.org) library in [Google Apps Script](https://developers.google.com/apps-script/).
API docs are available [here](https://script.google.com/macros/library/versions/d/1XWR3NzQW6fINaIaROhzsxXqRREfKXAdbKoATNbpygoune43oCmez1N8U).

## Adding the library to your project

AlaSQL for Google Apps Script is made available as a script library. This is how you add it to your project:

1. Select "Resources" > "Libraries..." in the Google Apps Script editor.
2. Enter the project key (`1XWR3NzQW6fINaIaROhzsxXqRREfKXAdbKoATNbpygoune43oCmez1N8U`) in the "Find a Library" field, and choose "Select". (If you have copied the library, enter instead the project key of your copy.)
3. Select the highest version number, and choose AlaSQL as the identifier. (Do not turn on Development Mode unless you know what you are doing. The development version may not work.)
4. Press Save. You can now use the AlaSQL library in your code.

## Loading the library

To load AlaSQLGS:

```js
var alasql = AlaSQLGS.load();
```

## Copying the library

A Google Apps Script project for AlaSQL is available [here](https://script.google.com/d/1XWR3NzQW6fINaIaROhzsxXqRREfKXAdbKoATNbpygoune43oCmez1N8U/edit?usp=sharing).

To copy the library, Select "File" > "Make a copy..." in the Google
Apps Script editor.

## Examples

[Data and code](https://drive.google.com/drive/folders/1iG34CHDVBIwqG8yOcjJYHl3gx1IsTzOJ?usp=sharing)

### Example 01

It works very fast. For the example the code below selects common records from two large tables (10k rows JOIN 7k rows):

```js
var alasql = AlaSQLGS.load();

function example01() {
  var data1 = SpreadsheetApp.openById(
    "14I34TM84uBnVILA3KQh9Y2LZr_Tr_fMsDQI2kYfht-E"
  )
    .getSheets()[0]
    .getDataRange()
    .getValues();
  var data2 = SpreadsheetApp.openById(
    "10uS4_YD4z2Ea-UnxkdydxB6QAKJ9GQUQX4Ozvw0F13o"
  )
    .getSheets()[0]
    .getDataRange()
    .getValues();

  var res = alasql("\
SELECT \
data1.[0], data1.[1], data1.[2], data1.[3], data1.[4], data1.[5], data1.[6], data1.[7], data1.[8], data1.[9], data1.[10],\
data2.[0], data2.[1], data2.[2], data2.[3], data2.[4], data2.[5], data2.[6], data2.[7], data2.[8], data2.[9] \
FROM ? AS data1 JOIN ? AS data2 ON data1.[0] = data2.[0]", [data1, data2]);

  Logger.log(res.length);
}
```

## Testing the library

{TO DO}

## Links

- [agershun/alasql](https://github.com/agershun/alasql)

## License

AlaSQLGS for Google Apps Script is released under the MIT license.
