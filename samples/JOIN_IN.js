/**
 * JOIN IN Looks for substrings of one sheet in another
 */
function runJoinIn() {
  var alasql = AlaSQLGS.load();
  var data1 = SpreadsheetApp.openById(
    '14I34TM84uBnVILA3KQh9Y2LZr_Tr_fMsDQI2kYfht-E'
  )
    .getSheets()[0]
    .getDataRange()
    .getValues()
    .slice(0, 1000);
  var data2 = SpreadsheetApp.openById(
    '10uS4_YD4z2Ea-UnxkdydxB6QAKJ9GQUQX4Ozvw0F13o'
  )
    .getSheets()[0]
    .getDataRange()
    .getValues()
    .slice(0, 1000);

  var res = alasql(
    `
SELECT MATRIX
data2.data2_Col1, data2.data2_Col2,
data1.data1_Col1, data1.data1_Col2
FROM ? AS data1 JOIN ? AS data2 ON data2.data2_Col2 IN data1.data1_Col2`,
    [data1, data2].map(AlaSQLGS.transformDataMatrixToColsObj)
  );

  console.log(res.length);
  console.log(res.slice(0, 100));
}
