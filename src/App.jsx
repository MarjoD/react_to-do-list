import { useState } from 'react';
import './App.css';
import Input from "./components/input";
import Tasks from "./components/tasks";
import Count from "./components/count";

function App() {

  /* Déclaration de la liste des tâches*/
  const [taskList, setTasks] = useState ([]);

  /* Déclaration du compteur de tâches restantes*/
  const [count, setCount] = useState(0);

  return (
    <>
      <section>
        <Input taskList={taskList}
            setTasks={setTasks}
            count={count}
            setCount={setCount} />
      </section>
      <section>
        <Count count={count} />
      </section>
      <section>
        <Tasks taskList={taskList}
            setTasks={setTasks}
            setCount={setCount} />
      </section>
    </>
  )
}

export default App
