var express = require('express');
var router  = express.Router();
var db = require('../models');


/* 5 APIs 
   - GET     /api/todos             //List all todos 
   - POST    /api/todos             //Create new todo
   - GET     /api/todos/:todoId     //Retrieve a todo
   - PUT     /api/todos/:todoId     //Update a todo 
   - DELETE  /api/todos/:todoId     //Delete a todo
*/

router.get('/', function(req, res){
   db.Todo.find()
   .then(function(todos){
       res.json(todos);
   })
   .catch(function(err){
       res.send(err);
   });
});

router.post('/', function(req, res){
    //console.log(req.body); //need body parser to read it 
    db.Todo.create(req.body)
    .then(function(newTodo){
        res.status(201).json(newTodo);  //newly created todo item 
    })
    .catch(function(err){
        res.send(err);
    });
});

router.get('/:todoId', function(req, res){
    db.Todo.findById(req.params.todoId)
    .then(function(foundTodo){
       res.json(foundTodo); 
    })
    .catch(function(err){
        res.send(err);
    });
});

router.put('/:todoId', function(req, res){
    db.Todo.findOneAndUpdate({_id: req.params.todoId}, req.body, {new: true})
    .then(function(updatedTodo){
        res.json(updatedTodo);
    })
    .catch(function(err){
        res.send(err); 
    });
});

router.delete('/:todoId', function(req, res){
    db.Todo.findById(req.params.todoId)
    .then(function(foundTodo){
        db.Todo.remove({_id: req.params.todoId})
        .then(function(){
            var removedTodoName = foundTodo.name;
            res.json({message: "'" + removedTodoName + "' is deleted"});
        })
        .catch(function(err){
            res.send(err); 
        });
    })
    .catch(function(err){
        res.send(err);
    });
});

module.exports = router;