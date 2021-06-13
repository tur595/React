import React, { useEffect } from "react";
import { getStory } from "../services/hnApi";

export const Story = ({ storyId }) => {
  useEffect(() => {}, []);

  return (
    <div>
      <p>Story {storyId}</p>
    </div>
  );
};
