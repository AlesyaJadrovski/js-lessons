'use strict';

var todoListElement = document.getElementById('todo-list');
var formElement = document.getElementById('todo-controls-form');
var inputTodoElement = document.getElementById('todo-input');
var addTodoHandler = function(event) {
  event.preventDefault();
  if(inputTodoElement.value.trim() == '') {
    inputTodoElement.value = '';
    return;
  }
  var newListItem = document.createElement('li');
  var newTodoText = document.createTextNode(inputTodoElement.value);
  newListItem.appendChild(newTodoText);
  todoListElement.appendChild(newListItem);
  inputTodoElement.value = '';
};
formElement.onsubmit = addTodoHandler;
