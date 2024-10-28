import { useState } from 'react';

function Input( {taskList, setTasks, count, setCount} ) {

    //valeur par défaut de l'input
    const initialValue = "Ajouter une tâche";

    /* Déclaration de la valeur de l'input avec initialisation à vide*/
    const [value, setValue] = useState(initialValue);

    /* Récupération de la valeur de l'input à chaque nouveau caractère*/
    const handleChange = (e) => {
        setValue(e.target.value);
    };

    /* Fonction d'ajout de la nouvelle tâche à la liste des tâches*/
    const handleSubmit = () => {
        if (value && value.trim()) {
        //si non vide, on ajoute la nouvelle tâche à la liste, en conservant les tâches précédentes de la liste
        setTasks([...taskList, {text: value, completed: false }]);
        }
        // Réinitialiser la valeur de l'input à vide pour permettre à l'utilisateur d'écrire une nouvelle tâche
        setValue("");
        setCount(count+1);
    };

    return (
        <>
        {/* permet à l'utilisateur de créer une nouvelle tâche : 
        écrit la description puis quand presse la touche "entrer", la tâche est créee avec la description*/}
            <input  type="text" 
                value={value} 
                onFocus={() => {
                value === initialValue && setValue("");
                    }}
                onBlur={() => {
                    !value && setValue(initialValue);
                    }}
                onChange={(e) => {
                    handleChange(e)
                    }} 
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        //si la touche pressée est "Entrer", alors on ajoute la tâche à la liste
                        handleSubmit();
                    }
                    
                }} 
            />
        </>
    );
}

export default Input;