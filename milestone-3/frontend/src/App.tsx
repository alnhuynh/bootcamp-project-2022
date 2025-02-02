import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import RecipePage from './components/RecipePage'
// import recipes, { Recipe } from "./components/recipeData";
import { Recipe } from "./components/recipeData";

// milestone 3-3.5
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from "react";

function App() {

  const [fetRecipes, setFetRecipes] = useState<Recipe[]>([])
  useEffect(() => {
    fetch("https://bootcamp-milestone-4.onrender.com/recipe")
    .then((response) => response.json())
    .then((data) => setFetRecipes(data))
  }, []);

  const [recipes, setRecipes] = useState<Recipe[]>([])
  useEffect(() => {
    fetch("http://localhost:3001/recipe")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  let all = [...recipes, ...fetRecipes];
 
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        
				{all.map((recipe) => (
          <Route
            path={`/recipe/:name`}
            element={<RecipePage {...recipe} />}
          />
        ))}
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
