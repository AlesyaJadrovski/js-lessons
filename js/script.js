'use strict';

var todoListElement = $("#todo-list");
var formElement = $("#todo-controls-form");
var inputTodoElement = $("#todo-input");
var addTodoHandler = function(event) {
  event.preventDefault();
  if(inputTodoElement.val().trim() == '') {
    inputTodoElement.val('');
    return;
  }
  var newListItem = '<li>' + inputTodoElement.val() + '</li>';
  todoListElement.append(newListItem);
  inputTodoElement.val('');
};
formElement.submit(addTodoHandler);

