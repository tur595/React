import React from "react";
import { LikedPerson } from "./LikedPerson";

export const Lonely = ({ activeUserImage, likedUsers, superLikedUsers }) => (
  <div id="lonely">
    <p>There is no new around you.</p>

    <span className="pulse">
      <img src={`/images/users/${activeUserImage}`} alt="You.." />
    </span>

    <div id="liked-people">
      <p>
        {likedUsers.length > 0
          ? "People you liked, let's hope they like you too!"
          : ""}
      </p>

      {likedUsers.map((item) => (
        <LikedPerson key={item.id} person={item} />
      ))}

      <p>{superLikedUsers.length > 0 ? "People you superliked" : ""}</p>

      {superLikedUsers.map((item) => (
        <LikedPerson key={item.id} person={item} />
      ))}
    </div>
  </div>
);
