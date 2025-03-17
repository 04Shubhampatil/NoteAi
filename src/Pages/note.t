import React from 'react';

function Api() {
  const [data, setData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  async function RecipeFinder() {
    setIsLoading(true);
    try {
      const Res = await fetch("https://api.restful-api.dev/objects");
      const response = await Res.json();
      setData(response);
    } catch (error) {
      console.error("Error fetching recipe:", error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div>
      <button  className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
      onClick={RecipeFinder}>Fetch Data</button>
      {isLoading ? (
        <p className='text-2xl'>Loading...</p>
      ) : (
        <ul>
          {data.map((item) => (
            <li>
         <li>{JSON.stringify(item)}</li>

            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Api;


----------------------------------------------------------------------------------------------------------------------------------
import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import { 
  Loader2, ChefHat, Clock, BookOpen, Scale, 
  Utensils, Flame, CircleCheckBig 
} from "lucide-react";
import Askai from "../../src/Util/Askai";

export default function Recipes() {
  const [aiRes, setAiRes] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [recipeDetails, setRecipeDetails] = useState({
    ingredients: [],
    instructions: [],
    cookTime: "Not specified",
    servings: "Not specified"
  });
  const { DishName } = useParams();

  async function RecipeFinder() {
    setIsLoading(true);
    try {
      const Res = await Askai(`
        Provide a detailed recipe for ${DishName}:
        - Ingredients list
        - Step-by-step instructions
        - Cooking time and servings
      `);
      
      const parsedResponse = parseRecipeResponse(Res);
      setRecipeDetails(parsedResponse);
      setAiRes(Res);
    } catch (error) {
      console.error("Error fetching recipe:", error);
    } finally {
      setIsLoading(false);
    }
  }

  function parseRecipeResponse(response) {
    const parsed = {
      ingredients: [],
      instructions: [],
      cookTime: "Not specified",
      servings: "Not specified"
    };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6 md:p-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-5xl font-extrabold mb-3">
                {DishName} Recipe
              </h1>
              <p className="text-white/80 max-w-xl text-sm md:text-base">
                Discover authentic flavors and traditional cooking techniques of this classic dish.
              </p>
            </div>
            <button
              onClick={RecipeFinder}
              disabled={isLoading}
              className="mt-4 md:mt-0 flex items-center px-6 py-3 bg-white text-orange-600 rounded-full hover:bg-orange-50 transition"
            >
              {isLoading ? (
                <><Loader2 className="mr-2 animate-spin" size={20} /> Generating...</>
              ) : (
                <>Generate Recipe</>
              )}
            </button>
          </div>
        </div>

        {/* Recipe Details */}
        {recipeDetails.ingredients.length > 0 && (
          <div className="p-6 md:p-10">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Ingredients Section */}
              <div>
                <h2 className="text-2xl font-bold mb-6 flex items-center text-orange-600">
                  <ChefHat className="mr-3" size={28} />
                  Ingredients
                </h2>
                <ul className="space-y-3 text-gray-700">
                  {recipeDetails.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-start">
                      <CircleCheckBig className="mr-3 text-orange-500 flex-shrink-0" size={20} />
                      <span>{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Instructions and Metadata */}
              <div>
                {/* Recipe Metadata */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-orange-50 p-4 rounded-xl flex items-center">
                    <Clock className="mr-3 text-orange-600" size={24} />
                    <div>
                      <span className="block text-xs text-gray-500">Cooking Time</span>
                      <span className="font-bold">{recipeDetails.cookTime}</span>
                    </div>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-xl flex items-center">
                    <Utensils className="mr-3 text-orange-600" size={24} />
                    <div>
                      <span className="block text-xs text-gray-500">Servings</span>
                      <span className="font-bold">{recipeDetails.servings}</span>
                    </div>
                  </div>
                </div>

                {/* Instructions */}
                <h2 className="text-2xl font-bold mb-6 flex items-center text-orange-600">
                  <Flame className="mr-3" size={28} />
                  Instructions
                </h2>
                <ol className="space-y-4 text-gray-700">
                  {recipeDetails.instructions.map((step, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-4 bg-orange-500 text-white rounded-full px-3 py-1 text-sm font-bold flex-shrink-0">
                        {index + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        )}

        {/* Raw Response (Optional) */}
        {aiRes && (
          <div className="bg-gray-100 p-6">
            <h3 className="text-lg font-semibold mb-3">Raw AI Response</h3>
            <pre className="bg-white p-4 rounded-md text-gray-700 overflow-x-auto">
              {aiRes}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}