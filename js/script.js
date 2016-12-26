'use strict';

var todoListElement = document.getElementById('todo-list');
var buttonAddElement = document.getElementById('btn-add');
var inputTodoElement = document.getElementById('todo-input');
var addTodoHandler = function(event) {
  if(event.type == 'keyup' && event.keyCode != 13) {
    return;
  }
  // todo work
};
buttonAddElement.onclick = addTodoHandler;
inputTodoElement.onkeyup = addTodoHandler;
