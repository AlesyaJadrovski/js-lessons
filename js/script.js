$(document).ready(function() {
  'use strict';

  var todoListElement = $("#todo-list");
  var formElement = $("#todo-controls-form");
  var inputTodoElement = $("#todo-input");

  var addTodoHandler = function(event) {
    event.preventDefault();

    if (inputTodoElement.val().trim() == '') {
      inputTodoElement.val('');
      return;
    }

    var newListItem = '<li><label><input type="checkbox" name="cb1">' + inputTodoElement.val() + '</label></li>';

    todoListElement.append(newListItem);
    inputTodoElement.val('');
  };

  $('#btn-done').on('click', function() {
    todoListElement.find('li input[type="checkbox"]:checked').each(function() {
      var checkbox = $(this),
          li = checkbox.closest('li')
          ;

        li.addClass('state-done');
        li.removeClass('state-cancel');
        $("input[type=checkbox]").prop('checked', false);
       console.log('test');
    });
  });

  $('#btn-cancel').on('click', function() {
    todoListElement.find('li input[type="checkbox"]:checked').each(function() {
      var checkbox = $(this),
          li = checkbox.closest('li')
          ;

        li.addClass('state-cancel');
        li.removeClass('state-done');
        $("input[type=checkbox]").prop('checked', false);    });
  });

  $('#btn-delete').on('click', function() {
    todoListElement.find('li input[type="checkbox"]:checked').each(function() {
      var checkbox = $(this),
          li = checkbox.closest('li')
          ;
      li.remove();

    });
  });

  formElement.submit(addTodoHandler);
});

