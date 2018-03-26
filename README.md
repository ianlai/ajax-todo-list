# WebApp: Ajax-todo-list

## Into

- URL: http://ajaxtodolist.herokuapp.com/
- Topic: Client-side rendering single page app 
- Frontend: HTML + CSS + Javascript + jQuery 
- Backend: Node.js + Express + MongoDB 
- Deploy: Heroku + mLab

This is a client-side rendering SPA (single page app) practice. 
Server provides the bare-bones of the app and the JSON APIs.
Client loads the bare-bones of the app, use JSON APIs to retrive the data, and then render the data onto the view. 


## REST APIs
| No. | Verb   | URL            | Description                              |
|-----|--------|----------------|------------------------------------------|
| 1   | GET    | /api/todos     | Get the whole list of the todos.         |
| 2   | POST   | /api/todos     | Add a new todo.                          |
| 3   | GET    | /api/todos/:id | Retrieve the todo with assigned id.      |
| 4   | PUT    | /api/todos/:id | Update the todo with assigned id.        |
| 5   | DELETE | /api/todos/:id | Delete the todo with assigned id.        |


## Usage of the APP
| No. | Action                         | Usage                                                               |
|-----|--------------------------------|---------------------------------------------------------------------|
| 1   | Add a new todo                 | Type the todo in the input box and hit enter.                       |
| 2   | Toggle between done and undone | Click the todo item.                                                |
| 3   | Delete the todo                | Click the delete button which shows up when hovering the todo item. |
