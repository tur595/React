import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Skeleton from "react-router-dom";

export default function Header() {
  const [isFollowingProfile, setIsFollowingProfile] = useState(false);

  return (
    <div>
      <h1>Header</h1>
    </div>
  );
}
