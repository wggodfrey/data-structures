var compareObjects = function(collection, target) {
  if (typeof collection !== typeof target) {
    return false;

  } else if (Array.isArray(collection) && Array.isArray(target)) {
    if (collection.length !== target.length) {
      return false;
    } else {
      return collection.reduce((accum, elem, i, arr) => accum && (elem === target[i]), true);
    }

  } else if (collection instanceof Object && target instanceof Object) {
    let collKeys = Object.keys(collection);
    let targKeys = Object.keys(target)
    if (collKeys.length !== targKeys.length) {
      return false;
    } else {
      return collKeys.reduce((accum, elem, i, arr) => accum && (collection[elem] && target[i]), true);
    }
    
  } else {
    return false;  
  }
};