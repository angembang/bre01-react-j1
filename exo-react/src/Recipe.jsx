import Steps from './Steps.jsx';


const Recipe = (props) => {
  // Tableau des ingrédients
  const ingredients = ["Oeufs", "Lait", "Farine", "Beurre"];

  return (
      <section>
        <h2>La recette de la pâte à crêpes</h2>
        <article>
        <h3>Ingrédients</h3>
          <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
          </ul>
        </article>
        <Steps />
      </section>
      
     
 
  );
};

export default Recipe;