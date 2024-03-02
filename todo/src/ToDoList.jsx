//imports useState hook from react

import React, { useState } from "react";

//create a main function that returns jsx file
function ToDoList() {
//declare two constant variables that utilize the useState hook
//in first variable we declare the first state of "tasks" to be "eat", "sleep", "rave", "repeat" . setTasks is setter function used later to update the task
//in the second variable we declare the first state to be empty string. setNewTask is setter function used later to update the setNewTask
  const [tasks, setTasks] = useState(["eat", "sleep", "rave", "repeat"]);
  const [newTask, setNewTask] = useState("");

//this function is made for us to see what we are writing and access the setNewTask to update the newTask with the updated value
  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

//this function is called when the add button is clicked

  function addTask() {
//on the next row it checks if the input is empty
    if (newTask.trim() !== "") {
//if it's not empty utilizes the setTask function to 
//update the tasks state variable. It uses arrow function ((t) => ...) that receives current state "t"
//[...t, newTask]: This creates a new array by spreading the existing tasks array (...t) and adding the newTask to the end using the comma operator ,.
      setTasks((t) => [...t, newTask]);
//This line resets the newTask state to an empty string, clearing the input field after adding the tas
      setNewTask("");
    }
  }

//this function is called when the user clicks delete button, associated with the specific item in the list
  function deleteTask(index) {
//next line creates new array named updatedTasks, that filters out the task based on the index that user clicks
//then updates the setter that then updates the current list
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }


  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }


  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }



  return (
    <div className="to-do-list">
      <h1 className="heading">To-Do-List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a task"
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="add-button" onClick={addTask}>
          Add
        </button>
      </div>
      <ol>
        {tasks.map((tasks, index) => (
          <li key={index}>
            <span className="text">{tasks}</span>
            <button className="delete-button" onClick={() => deleteTask(index)}>
              DELETE
            </button>
            <button className="move-button" onClick={() => moveTaskUp(index)}>
              UP
            </button>
            <button className="move-button" onClick={() => moveTaskDown(index)}>
              DOWN
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDoList;
