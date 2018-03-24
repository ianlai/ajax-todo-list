var express = require('express');
var router  = express.Router();
var db = require('../models');
var helpers = require('../helpers/todos');

/* 5 APIs 
   - GET     /api/todos             //List all todos 
   - POST    /api/todos             //Create new todo
   - GET     /api/todos/:todoId     //Retrieve a todo
   - PUT     /api/todos/:todoId     //Update a todo 
   - DELETE  /api/todos/:todoId     //Delete a todo
*/

//router.get('/', );
//router.post('/', );

/* Combine the 2 routes with the same route together */
router.route('/')
.get(helpers.getTodos)
.post(helpers.createTodo);

/* Combine the 3 routes with the same route together */
router.route('/:todoId')
.get(helpers.getTodo)
.put(helpers.updateTodo)
.delete(helpers.deleteTodo);

module.exports = router;