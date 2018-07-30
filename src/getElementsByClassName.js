// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:


var getElementsByClassName = function(className, start, results) {
  //access document body
  var start = start || document.body;
//create results arr
  var results = results || [];
  //check if our current elem contains the target classname
  if ( start.classList.contains(className) ) {
    results.push(start)
  }
  //check if elem contains children
  // if ( start.children ) {
  //   var children = start.children;
  //   console.log(children)
    for (var i = 0; i < start.children.length; i++) {
      getElementsByClassName(className, start.children[i], results)
    }
  // }
    //using .childnodes
    //if so, call function again
  return results;
};
