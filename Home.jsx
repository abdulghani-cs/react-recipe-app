import { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";
import axios from "axios";
import { PuffLoader } from "react-spinners";

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  const getRecipes = async (text) => {
    setLoading(true);
    const res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${text}`
    );
    const data = await res.data;

    if (data.meals === null || data.meals === undefined) {
      console.log("error");
    } else {
      setLoading(false);
      setRecipes(data.meals);
    }
  };

  const getInitialRecipes = async () => {
    setLoading(true);
    const res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=`
    );
    const data = await res.data;
    setLoading(false);
    setRecipes(data.meals);
  };

  useEffect(() => {
    getInitialRecipes();
  }, []);

  return (
    <div className="flex flex-col">
      {/* Navigation Bar */}
      {/* Replace this with your navigation bar code */}

      {/* Welcome Section */}
      <div className="bg-blue-900 text-white w-full py-6 text-center mb-10">
        <h1 className="text-4xl font-bold">Welcome to Recipe App</h1>
      </div>

      {/* Content Section */}
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">
          Discover Amazing Recipes
        </h2>
        <p className="text-lg text-blue-900">
          Explore various recipes, discover new dishes, and find inspiration for
          your next meal. Whether you're a cooking enthusiast or a beginner,
          this app provides a wide range of recipes for all tastes and skill
          levels. From quick and easy recipes to complex gourmet dishes, our
          collection covers everything you need to elevate your culinary
          experience.
        </p>
      </div>

      {/* Image Section */}
      <div className="bg-cover bg-right bg-no-repeat h-[500px] lg:h-[400px] xl:h-[300px] flex items-center justify-end">
        <img
          src="https://media.istockphoto.com/id/664222314/photo/cooking-together.webp?b=1&s=170667a&w=0&k=20&c=c2NKqUXxX4LWjSMPQpYL2i5NFpFI_E9sURqjQdUHWVA=" // Replace with your image URL
          alt="Recipe Image"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Search Input */}
      <div className="mt-10">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search the ingredient"
          onChange={(e) => {
            getRecipes(e.target.value);
          }}
          className="outline-none border px-5 py-3 rounded-xl w-[60vw] shadow-md focus:border-red-500"
        />
      </div>

      {/* Recipes Section */}
      <div className="my-10">
        {loading ? (
          <PuffLoader color="#f56565" size={150} />
        ) : recipes === null ? (
          <h1>No recipes to show</h1>
        ) : (
          <div className="lg:w-[70vw] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center gap-3">
            {recipes.map((recipe) => (
              <RecipeCard
                key={recipe.idMeal}
                id={recipe.idMeal}
                title={recipe.strMeal}
                image={recipe.strMealThumb}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
