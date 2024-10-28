export default function Count({count}) {
    return (
        <>
            {/* compteur est dynamique : il indique le nombre de tâches dans la liste dont la propriété checked = false. 
            se met à jour chaque fois qu'une tâche est cochée. 
            donc augmente si nouvelle tache enregistrée, diminue dès qu'une tache est cochée */}
            <p>{count} tâche{count>1 && "s"} à faire</p>
        </>
    );
}