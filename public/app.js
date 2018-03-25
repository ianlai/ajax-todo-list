/* global $ */
$(document).ready(function(){
    /* show all todos */
    $.getJSON('/api/todos')
    .then(function(todos){
        todos.forEach(appendTodo);
    });
    $('#todoInput').keypress(function(event){
        /* key code 13 is enter key*/
        if(event.which==13){  
            createTodo();
        }
    });
    // $('li').click(function(){
    //     console.log("li clicked!");
    // });
    $('.list').on('click', 'li', function(){
        console.log($(this)[0].innerText + " li clicked.");  //li text which is clicked 
        updateTodo($(this));
    })
    $('.list').on('click', 'span', function(e){
        console.log($(this)[0].innerText + " span clicked.");  //span which is clicked
        e.stopPropagation();  //with this, li click event will not be triggered 
        deleteTodo($(this).parent());
    })
    
});

/* append the todo to the list (view) */
function appendTodo(todo){
    /* todo   : returned object 
     * newTodo: jQuery object
     */
    var newTodo = $('<li class=task>' + todo.name + '<span>Remove <i class="fas fa-trash-alt"></i></span></li>');
    newTodo.data('id', todo._id);
    newTodo.data('completed', todo.completed);
    if(todo.completed){
        newTodo.addClass('done');
    }
    $('.list').append(newTodo);
}

function createTodo(){
    var inputString = $('#todoInput').val();
    $('#todoInput').val('');
    $.post('/api/todos/', {name: inputString})
    .then(appendTodo)
    .catch(function(err){
        console.log(err);
    });
}

function updateTodo(todo){
    /* extract the id from jQuery object */
    var updateUrl = '/api/todos/' + todo.data('id'); 
    var updateCompleted = {completed : !todo.data('completed')};
    $.ajax({
        method: 'PUT',
        url   : updateUrl,
        data  : updateCompleted
    })
    .then(function(updatedTodo){
        todo.toggleClass('done');
        todo.data('completed', updateCompleted);
    })
    .catch(function(err){
        console.log(err) 
    });
}

function deleteTodo(todo){
    var deleteUrl = '/api/todos/' + todo.data('id');
    $.ajax({
        method: 'DELETE',
        url   : deleteUrl,
    })
    .then(function(obj){
        console.log(obj.message);
        todo.remove(); 
    })
    .catch(function(err){
        console.log(err);
    });
}