import NavBar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { taskList } from './components/Data/TaskList';
import ListTask from "./ListTaks/ListTaks";
import AddMovie from "./components/AddMovie/AddMovie";
import FilterMovie from "./components/FilterMovie/FilterMovie";
import Formulaire from "./components/Formulaire/Formulaire";


function App() {
  const [tasks , setTasks] = useState(taskList)

  const [inputSearch, setInputSearch] = useState("")

  const handelAdd = (newTask) => {
    setTasks ([ ...tasks,newTask])
  }
  return ( 
    <div className="App">
    <NavBar />
    <FilterMovie inputSearch={inputSearch} setInputSearch={setInputSearch} />

    <ListTask tasks={tasks} inputSearch={inputSearch} /> 

    <AddMovie handelAdd={handelAdd}/>
    <Formulaire/>
    </div>
  );
}

export default App;
