import { useState } from 'react'
import './App.css'

function App() {
  /* Déclaration du compteur de tâches restantes*/
  const [count, setCount] = useState(0);

  /* Déclaration de la liste des tâches*/
  const [taskList, setTache] = useState ([]);

  /* Déclaration de la valeur de l'input avec initialisation à vide*/
  const [value, setValue] = useState("Ajouter une tâche");

  /* Fonction d'ajout de la nouvelle tâche à la liste des tâches*/
  const ajoutTache = () => {
    if (value && value.trim()) {
      //si non vide, on ajoute la nouvelle tâche à la liste, en conservant les tâches précédentes de la liste
      setTache([...taskList, {text: value, completed: false }]);
      //incrémenter le compteur (+1 tâche à faire)
      setCount(count+1);
    }
    // Réinitialiser la valeur de l'input à vide pour permettre à l'utilisateur d'écrire une nouvelle tâche
    setValue("");
  };

  /* Récupération de la valeur de l'input à chaque nouveau caractère*/
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  /* Coche une tâche : met à jour le compteur*/
  const handleCheck = (e, index) => {
    if (e.target.checked === true) {
      //si une tâche est cochée, on met à jour les données de la tâche avec completed=true
      taskList[index].completed = true;
      //une tâche est cochée : compteur -1
      setCount(count-1);
    } else {
      //si une tâche est décochée, on met à jour les données de la tâche avec completed=false
      taskList[index].completed = false;
      //une tâche est décochée : compteur +1
      setCount(count+1);
    }
  };

  return (
    <>
      <section>
      {/* permet à l'utilisateur de créer une nouvelle tâche : 
      écrit la description puis quand presse la touche "entrer", la tâche est créee avec la description*/}
	    <input  type="text" 
              value={value} 
              onFocus={() => {
                setValue("")
              }}
              onBlur={() => {
                setValue("Ajouter une tâche")
              }}
              onChange={(e) => {
                handleChange(e)
              }} 
              onKeyDown={(e) => {
                //si la touche pressée est "Entrer", alors on ajoute la tâche à la liste
                if (e.key === "Enter") ajoutTache();
              }} />
      </section>

      <section>
      {/* compteur est dynamique : il indique le nombre de tâches dans la liste dont la propriété checked = false. 
      se met à jour chaque fois qu'une tâche est cochée. 
      donc augmente si nouvelle tache enregistrée, diminue dès qu'une tache est cochée */}
      <p>{count} tâches à faire</p>
      </section>

      <section>
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
      </section>
    </>
  )
}

export default App
