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

    var newListItem = '<li><label><input id=check1 type="checkbox" name="cb1">' + inputTodoElement.val() + '</label></li>';

    $('#btn1').on('click', function() {
      todoListElement.find('li input[type="checkbox"]').each(function() {
        var checkbox = $(this),
          li = checkbox.closest('li')
        ;

        if (checkbox.is(':checked')) {
          li.addClass('checked');
        }
      });
    });

    $('#btn3').on('click', function() {
      todoListElement.find('li input[type="checkbox"]').each(function() {
        var checkbox = $(this),
            li = checkbox.closest('li')
            ;

        if (checkbox.is(':checked')) {
          li.addClass('cancel');
        }
      });
    });

    

    todoListElement.append(newListItem);
    inputTodoElement.val('');
  };

  formElement.submit(addTodoHandler);
});

