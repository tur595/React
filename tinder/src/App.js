import "./App.css";
import { Header } from "./components/Header";
import { Person } from "./components/Person";
import { Lonely } from "./components/Lonely";
import data from "./data.json";
import { useState } from "react";

function App() {
  const [people, setPeople] = useState(data);
  const [likedUsers, setLikedUsers] = useState([]);
  const [superLikedUsers, setSuperLikedUsers] = useState([]);
  const [dislikedUsers, setDislikedUsers] = useState([]);
  const activeUser = 0;

  const removePersonFromDataSrc = (people, userId) =>
    people.filter((person) => person.id !== userId);

  const modifySuperficialChoices = (userId, action) => {
    const newPeople = [...people];
    const newLikedUsers = [...likedUsers];
    const newSuperLikedUsers = [...superLikedUsers];
    const newDislikeUsers = [...dislikedUsers];

    switch (action) {
      case "ADD_TO_LIKED_USER":
        if (!people[activeUser].likedUsers.includes(userId)) {
          newPeople[activeUser].likedUsers.push(userId);
          newDislikeUsers.push(data[userId]);

          setLikedUsers(newLikedUsers);
          setPeople(removePersonFromDataSrc(people, userId));
        }
        break;
      case "ADD_TO_DISLIKED_USER":
        if (!people[activeUser].dislikedUsers.includes(userId)) {
          newPeople[activeUser].dislikedUsers.push(userId);

          setDislikedUsers(newLikedUsers);
          setPeople(removePersonFromDataSrc(people, userId));
        }
        break;
      case "ADD_TO_SUPERLIKED_USER":
        if (!people[activeUser].superLikedUsers.includes(userId)) {
          newPeople[activeUser].superLikedUsers.push(userId);
          newSuperLikedUsers.push(data[userId]);

          setSuperLikedUsers(newLikedUsers);
          setPeople(removePersonFromDataSrc(people, userId));
        }
      default:
        return people;
    }
  };

  return (
    <div className="App">
      <Header />
      <p>Tinder</p>
      {people[1] ? (
        <Person
          key={people[1].id}
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
    </div>
  );
}

export default App;
