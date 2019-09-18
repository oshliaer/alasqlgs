function loader_(){
  @@include('./../alasql/dist/alasql.js')
}

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
 * @param {string} s
 * @return {string}
 */
function fromColNota(s){
  return s.replace(/Col(\d+)/g, function(_, d){
    return '[' + (d - 1) + ']';
  });
}