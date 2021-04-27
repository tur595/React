import React from "react";
import PropTypes from "prop-types";
import Skeleton from "react-loading-skeleton";

export default function Photos({ photos }) {
  return (
    <div>
      <h1>Photos</h1>
    </div>
  );
}

Photos.propTypes = {
  photos: PropTypes.array.isRequired,
};
