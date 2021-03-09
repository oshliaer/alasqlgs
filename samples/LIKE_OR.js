/**
 * Select LIKE OR
 */
function runLikeOr() {
  var alasql = AlaSQLGS.load();
  var data = SpreadsheetApp.openById(
    '14I34TM84uBnVILA3KQh9Y2LZr_Tr_fMsDQI2kYfht-E'
  )
    .getSheets()[0]
    .getDataRange()
    .getValues()
    .slice(0, 1000);
  const query = `
SELECT MATRIX Col1, Col2 FROM ? WHERE Col2 LIKE "%wq%" OR Col2 LIKE "%uu%"
`;
  var res = alasql(AlaSQLGS.transformQueryColsNotation(query), [data]);

  console.log(res);

  /*
  
  To insert into another table
  
  var output = SpreadsheetApp.openById("10uS4_YD4z2Ea-UnxkdydxB6QAKJ9GQUQX4Ozvw0F13o").getSheetByName('Output');
  output.getDataRange().clearContent();
  output.getRange(1,1,res.length, res[0].length).setValues(res);
  */
}
