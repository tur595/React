import React, {useEffect, useState} from "react";
import env from "react-dotenv";

function App() {

  useEffect(() => {
    getRecipes();
  })

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${env.APP_ID}&app_key=${env.APP_KEY}`)
    const data = await response.json();
    console.log(data)
  }

  return <div className="App">
    <form className="search-form">
      <input className="search-bar" type="text"/>
      <button className="search-button" type="submit">
        Search
      </button>
    </form>
  </div>;
}

export default App;
