// Composant Student qui affiche le nom et les notes d'un étudiant
const Student = ({ name, notes }) => {
    let sum = 0;
    // Utilisation de la boucle for pour calculer la somme des notes
    for (let i = 0; i < notes.length; i++) {
        sum += notes[i];
    }
    // Calcul de la moyenne de notes
    const avg = sum / notes.length;

    return (

        <article>
      <h3>{name}</h3>
      <ul>
         {notes.map((note, i) =><li key={i}>{note}</li>)}
      </ul>
      <p>Moyenne : {avg.toFixed(2)}</p>
    </article>
    );
};
export default Student;
