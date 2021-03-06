'use strict';
/* global shoppingList, cuid, Item, store */

// eslint-disable-next-line no-unused-vars
$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
  const itemNames = ['', 'apples', 'pears'];
  itemNames.forEach (name => {
    try {
      Item.validateName(name);
      store.items.push(Item.create(name));
    } catch(error){
      console.log('Cannot add item: ' + error.message);
    }
  });
  shoppingList.render();
});

