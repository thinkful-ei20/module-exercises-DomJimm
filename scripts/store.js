'use strict';
/* global shoppingList, cuid, Item */
//eslint-disable-next-line no-unused-vars
const store = (function (){
  
  const items = [
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false }
  ];
  let hideCheckedItems = false;
  let searchTerm = '';

  function findById(id){
    return items.find(item => item.id === id);
  }

  function addItem(name){
    try{
      Item.validateName(name);
      this.items.push(Item.create(name));
    }catch(e){
      console.log(`Cannot add Item: ${e.message}`);
    }
  }

  function findAndToggleChecked(id){
    this.findById(id).checked =  !this.findById(id).checked;
  }

  function findAndUpdateName(id, newName){
    try{
      Item.validateName(newName);
      Item.findById(id).name = newName;
    }catch(e){
      console.log(`Cannot update Item name: ${e.message}`);
    }
  }

  function findAndDelete(id){
    items.splice(items.findIndex(item => item.id = this.findById(id).id), 1);
  }

  return {
    items, hideCheckedItems, searchTerm, findById, 
    addItem, findAndToggleChecked, findAndUpdateName, findAndDelete,
  };
}());
