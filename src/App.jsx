import { useState } from "react";
import NewTaskField from "./components/NewTaskField";
import ToDoList from "./components/ToDoList";
import DoneList from "./components/DoneList";
import "./styles/App.css"

function App() {
  const [toDoList, setToDoList] = useState([{id: Date.now(), description: "Create first TODO"}]);
  const [doneList, setDoneList] = useState([]);

  function addToList(description) {
    setToDoList([...toDoList, {id: Date.now(), description: description}]);
  }

  function removeListItem(id) {
    setToDoList(toDoList.filter(item => item.id !== id));
  }

  function moveToDone(task) {
    setDoneList([...doneList, task]);
    removeListItem(task.id);
  }

  return (
    <div className="App">
      <h1 className="ToDo-App-title visually-hidden">ToDo App</h1>
      <NewTaskField create={addToList}/>
      <section className="toDoList">
        {toDoList.length !== 0
          ? <ToDoList toDoList={toDoList} remove={removeListItem} done={moveToDone}/>
          : <h2 style={{color: "#9E78CF", textAlign: "center", fontFamily: "Inter"}}>No task to do</h2>
        }
        {doneList.length !== 0
          ? <DoneList doneList={doneList}/>
          : <h2 style={{color: "#78CFB0", textAlign: "center", fontFamily: "Inter", marginTop: "60px"}}>No done task</h2>
        }
      </section>
    </div>
  );
}

export default App;