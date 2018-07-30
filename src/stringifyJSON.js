// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if ( typeof obj === 'number' ) {
    return '' + obj;
  }

  if (obj === null) {
    return '' + null;
  }

  if (typeof obj === 'boolean') {
    return '' + obj;
  }

  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }

  if (Array.isArray(obj) && obj.length === 0) {
    return '[]';
  }

  if (Array.isArray(obj)) {
    var result = [];

    for (var i = 0; i < obj.length; i++) {
      result.push(stringifyJSON(obj[i]));
    }

    return '[' + result + ']';
  }

  if (typeof obj === 'object' && Object.keys(obj).length === 0) {
    return '{}';
  }

  if (typeof obj === 'object') {
    var result = '{';
    var lastKey = (Object.keys(obj)[Object.keys(obj).length - 1]);

    for (var key in obj) {

      if (typeof obj[key] !== 'function' && typeof obj[key] !== 'undefined') {
  
        result += stringifyJSON(key) + ':' + stringifyJSON(obj[key]);

        if (key !== lastKey) {
          result += ',';
        }
      }

    }
    return result + '}';
  }


  

};














