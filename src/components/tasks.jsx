function Tasks({taskList, count, setCount, setTasks}) {

    /* Coche une tâche : met à jour le compteur*/
    const handleCheck = (e, index) => {
        if (e.target.checked === true) {
            //si une tâche est cochée, on met à jour les données de la tâche avec completed=true
            taskList[index].completed = true;
        } else {
            //si une tâche est décochée, on met à jour les données de la tâche avec completed=false
            taskList[index].completed = false;
        }
        setTasks(taskList);
        setCount(taskList.filter((task)=> task.completed===false).length);
    };

    return (
        <>
            {/* Liste des tâches. dès qu'une tâche est ajoutée via l'input, se met à jour et affiche la nouvelle 
            tâche à la suite de la liste existante*/}
            {taskList.map((task, index) => (
            <span key={index} className={task.completed?"task":""}> 
                <input  type="checkbox" 
                        onClick={(e) => {
                        //gestion du changement d'état (coché/décoché)
                        handleCheck(e, index)
                        }} 
                        defaultChecked={task.completed} /> 
                <p>{task.text}</p>
            </span>
            ))}
        </>
    )
}

export default Tasks;