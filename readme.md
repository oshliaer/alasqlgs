# AlaSQLGS

AlaSQLGS is a library that enables the use of the [AlaSQL.js](http://alasql.org) library in [Google Apps Script](https://developers.google.com/apps-script/).
API docs are available [here](https://script.google.com/macros/library/versions/d/1XWR3NzQW6fINaIaROhzsxXqRREfKXAdbKoATNbpygoune43oCmez1N8U).

## Adding the library to your project
AlaSQL for Google Apps Script is made available as a script library. This is how you add it to your project:
1. Select "Resources" > "Libraries..." in the Google Apps Script editor.
2. Enter the project key (`1XWR3NzQW6fINaIaROhzsxXqRREfKXAdbKoATNbpygoune43oCmez1N8U`) in the "Find a Library" field, and choose "Select". (If you have copied the library, enter instead the project key of your copy.)
3. Select the highest version number, and choose Lodash as the identifier. (Do not turn on Development Mode unless you know what you are doing. The development version may not work.)
4. Press Save. You can now use the Lodash library in your code.

## Loading the library
To load AlaSQLGS:

```
var alasql = AlaSQLGS.load();
```

## Copying the library
A Google Apps Script project for AlaSQL is available [here](https://script.google.com/d/1XWR3NzQW6fINaIaROhzsxXqRREfKXAdbKoATNbpygoune43oCmez1N8U/edit?usp=sharing).

To copy the library, Select "File" > "Make a copy..." in the Google
Apps Script editor.

## Testing the library
{TO DO}

## Links
* [agershun/alasql](https://github.com/agershun/alasql)

## License
AlaSQLGS for Google Apps Script is released under the MIT license.