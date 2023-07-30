//1- receivesAFunction(callback): receives a function and calls it.
  function receivesAFunction(callback) {
    return callback();
  }
//2- returnsANamedFunction(): returns a named function.
  function returnsANamedFunction(){
    return function myNamedFunction(){};
  }
//3- returnsAnAnonymousFunction(): returns an anonymous function.
  function returnsAnAnonymousFunction(){
    return function(){};
  }