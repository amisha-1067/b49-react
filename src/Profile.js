import React from "react";

export function ToDo() {
  return (
    <div>
      <div className="header">
        <h1>My todo</h1>
      </div>
      <div className="main">
        <input type="text" placeholder="Todo Name" className="input" />
        <input type="text" placeholder="Todo Description" className="input" />
        <button className="todo-btn">Add Todo</button>
      </div>
      <div className="container">
        <div className="para1">
          <p>My todo</p>
        </div>
        <div className="para2">
          <p>
            Status Filter:{" "}
            <select className="status-filter">
              <option>All</option>
              <option>Not Completed</option>
              <option>Completed</option>
            </select>
          </p>
        </div>
      </div>
      <div className="cards">
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
  );
}

function Cards() {
  return (
    <div className="card">
      <div className="upper-card">
        <p>Name : Office Task 1</p>
        <p>Description : This is the description for my first task</p>
        <p>
          Status :{" "}
          <select>
            <option className="not-completed">Not Completed</option>
            <option className="completed">Completed</option>
          </select>
        </p>
      </div>
      <div className="lower-card">
        <button className="edit">Edit</button>
        <button className="delete">Delete</button>
      </div>
    </div>
  );
}
