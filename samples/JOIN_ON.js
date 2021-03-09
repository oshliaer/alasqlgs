/**
 * JOIN ON data from two sheets into one array.
 */
function runJoinOn() {
  const alasql = AlaSQLGS.load();

  const data1 = SpreadsheetApp.openById(
    '14I34TM84uBnVILA3KQh9Y2LZr_Tr_fMsDQI2kYfht-E'
  )
    .getSheets()[0]
    .getDataRange()
    .getValues();

  const data2 = SpreadsheetApp.openById(
    '10uS4_YD4z2Ea-UnxkdydxB6QAKJ9GQUQX4Ozvw0F13o'
  )
    .getSheets()[0]
    .getDataRange()
    .getValues();

  const query =
    'SELECT MATRIX data1.*, data2.* FROM ? AS data1 JOIN ? AS data2 ON data1.data1_Col1 = data2.data2_Col1';

  const res = alasql(
    query,
    [data1, data2].map(AlaSQLGS.transformDataMatrixToColsObj)
  );

  console.log(res.length);
  console.log(res[0]);
}
