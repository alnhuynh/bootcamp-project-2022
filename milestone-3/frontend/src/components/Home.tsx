// cd my-app -> npm start
// {/* how to comment */}

import '../App.css';
import recipes from '../recipeData.json';
import RecipePreview from './ReceipePreview';

// milestone 3.5
import { ChangeEvent, useState, useEffect } from "react";

interface Recipe {
  name: string,
  image: string,
  description: string
  ingredients: string[];
  instructions: string[];
}

function Home() {

  const [fetRecipes, setFetRecipes] = useState<Recipe[]>([])
  useEffect(() => {
    fetch("http://bootcamp-milestone-4.onrender.com/recipe")
    .then((response) => response.json())
    .then((data) => setFetRecipes(data))
  }, [])

  return (
    <body>
        <main>
        <p id="motto">Satisfy Your Sweet Tooth With Our Simple Recipes!</p>
        {recipes.map((recipe) => (
				<RecipePreview
					name={recipe.name}
					image={recipe.image}
					desc={recipe.desc}
				/>
			  ))}

        {fetRecipes.map((fr) => (
				<RecipePreview
					name={fr.name}
					image={fr.image}
					desc={fr.description}
				/>
			  ))}
        </main>
    </body>
  );
}

export default Home;