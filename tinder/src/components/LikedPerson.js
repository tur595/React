import React from "react";

export const LikedPerson = () => {
  return (
    <div className="liked-person">
      <img
        src={`/images/users/${person.image}`}
        alt={`You liked ${person.name}`}
      />
    </div>
  );
};
