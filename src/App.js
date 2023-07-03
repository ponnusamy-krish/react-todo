import FilterButton from "./components/FilterButton";
import Form from "./components/Form";
import Todo from "./components/Todo";
import React, { useState } from "react";


function App(props) {
  const [tasks,setTasks] = useState(props.tasks)
  const taskLIst = tasks.map((t) => <Todo id={t.id} name={t.name} completed={t.completed} key={t.id}/>)
  function addTask(name){
    alert(name);
  }
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      
      <Form addTask={addTask}/>
      <div className="filters btn-group stack-exception">
        <FilterButton name="all"/>
        <FilterButton name="Active"/>
        <FilterButton name="Completed"/>

        
     </div>
      <h2 id="list-heading">3 tasks remaining</h2>
      <ul
        
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
        {taskLIst}

      </ul>
    </div>
  );
}

export default App;
