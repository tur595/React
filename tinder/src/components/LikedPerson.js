import React from "react";

export const LikedPerson = ({ person }) => {
  return (
    <div className="liked-person-image">
      <img
        src={`/images/users/${person.image}`}
        alt={`You liked ${person.name}`}
      />
    </div>
  );
};
