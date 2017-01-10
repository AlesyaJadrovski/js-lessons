'use strict';

var todoListElement = $("#todo-list");
var formElement = $("#todo-controls-form");
var inputTodoElement = $("#todo-input");
var addTodoHandler = function(event) {
  event.preventDefault();
  if(inputTodoElement.value.trim() == '') {
    inputTodoElement.value = '';
    return;
  }
  var newListItem = '<li>' + inputTodoElement.val() + '</li>';
  todoListElement.append(newListItem);
  inputTodoElement.value = '';
};
formElement.onsubmit = addTodoHandler;

