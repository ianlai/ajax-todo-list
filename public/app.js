/* global $ */
$(document).ready(function(){
    
    /* show all todos */
    $.getJSON('/api/todos')
    .then(function(todos){
        todos.forEach(function(todo){
            /* todo   : returned object 
             * newTodo: jQuery object
             */
           var newTodo = $('<li class=task>' + todo.name + '</li>'); 
           $('.list').append(newTodo);
        });
    });
    
    $('#todoInput').keypress(function(event){
        
        /* key code 13 is enter key*/
        if(event.which==13){  
            createTodo();
        }
    });
    
});

function createTodo(){
    var inputString = $('#todoInput').val();
    $('#todoInput').val('');
    $.post('/api/todos/', {name: inputString})
    .then(function(todo){
        var newTodo = $('<li class=task>' + todo.name + '</li>'); 
        $('.list').append(newTodo);
    })
    .catch(function(err){
        console.log(err);
    });
}