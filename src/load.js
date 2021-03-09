/* exported load, transformQueryColsNotation */
/* global loader_, alasql */

/**
 * Bootloader and entry point
 * @public
 */
function load() {
  loader_.call(this);
  return alasql;
}

/**
 * Replaces 'ColN' to SQL-compatibility string
 * @public
 * @param {string} query
 * @return {string}
 */
function transformQueryColsNotation(query) {
  return query.replace(/Col(\d+)/g, function (_, d) {
    return '[' + (d - 1) + ']';
  });
}

/**
 *
 */
function transformDataMatrixToColsObj(data, index) {
  return data.map((row) =>
    row.reduce((p, o, j) => ((p[`data${index + 1}_Col${j + 1}`] = o), p), {})
  );
}
