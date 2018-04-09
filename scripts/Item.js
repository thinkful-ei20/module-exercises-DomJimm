'use strict';
/* global shoppingList, cuid, Item */
//eslint-disable-next-line no-unused-vars
const Item = (() => {
  const validateName = name => {
    if (!name) {
      throw new TypeError('Name does not exist.');
    }
  };
  const create = name => {
    return {
      id: cuid(), 
      name, 
      checked: false
    };
  };
  return {
    validateName, create
  };
})();