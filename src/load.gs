function loader_(){
  @@include('./../alasql/dist/alasql.js')
}


function load() {
  loader_.call(this);
  return alasql;
}