import "./App.css";
import Header from "./components/Header";
import Person from "./components/Person";
import Lonely from "./components/Lonely";
import data from "./data.json";
import { useState } from "react";

function App() {
  const [people, setPeople] = useState(data);
  const [likedUsers, setLikedUsers] = useState([]);
  const [superLikedUsers, setSuperLikedUsers] = useState([]);
  const [dislikedUsers, setDislikedUsers] = useState([]);
  const activeUser = 0;

  switch (action) {
    case "ADD_TO_LIKED_USER":
      break;
    case "ADD_TO_DISLIKED_USER":
      break;
    case "ADD_TO_SUPERLIKED_USER":

    default:
      return people;
  }

  return (
    <div className="App">
      <Header />
      <p>Tinder</p>
      {people[1] ? (
        <Person
          key={person[1].id}
          person={people[1]}
          modifySuperficialChoices={modifySuperficialChoices}
          likedUsers={likedUsers}
        />
      ) : (
        <Lonely
          activeUserImage={people[activeUser].image}
          likedUsers={likedUsers}
          superLikedUsers={superLikedUsers}
        />
      )}
      )
    </div>
  );
}

export default App;
