import React from "react";
import Skeleton from "react-loading-skeleton";
import usePhotos from "../hooks/use-photos";

function Timeline() {
  const { photos } = usePhotos();

  console.log("photos", photos);

  return <div className="container col-span-2">Timeline</div>;
}

export default Timeline;
