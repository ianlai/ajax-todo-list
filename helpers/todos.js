 var db = require('../models');
 
 exports.getTodos = function(req, res){
   db.Todo.find()
   .then(function(todos){
       res.json(todos);
   })
   .catch(function(err){
       res.send(err);
   });
}

exports.createTodo = function(req, res){
    //console.log(req.body); //need body parser to read it 
    db.Todo.create(req.body)
    .then(function(newTodo){
        res.status(201).json(newTodo);  //newly created todo item 
    })
    .catch(function(err){
        res.send(err);
    });
}

exports.getTodo = function(req, res){
    db.Todo.findById(req.params.todoId)
    .then(function(foundTodo){
       res.json(foundTodo); 
    })
    .catch(function(err){
        res.send(err);
    });
}

exports.updateTodo = function(req, res){
    db.Todo.findOneAndUpdate({_id: req.params.todoId}, req.body, {new: true})
    .then(function(updatedTodo){
        res.json(updatedTodo);
    })
    .catch(function(err){
        res.send(err); 
    });
}

exports.deleteTodo = function(req, res){
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
}

