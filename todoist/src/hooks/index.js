import { useState, useEffect } from "react";
import moment from "moment";
import { firebase } from "../firebase";
import { collatedTasksExists } from "../helpers";

export const useTasks = (selectedProject) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    let unsubcsribe = firebase
      .firestore()
      .collection("tasks")
      .where("userId", "==", "asd123");

    unsubcsribe =
      selectedProject && !collatedTasksExists(selectedProject)
        ? (unsubscribe = unsubscribe.where("projectId", "==", selectedProject))
        : selectedProject === "TODAY"
        ? (unsubscribe = unsubscribe.where(
            "date",
            "==",
            moment().format("DD/MM/YYYY")
          ))
        : selectedProject === "INBOX" || selectedProject === 0
        ? (unsubcsribe = unsubcsribe.where("date", "==", ""))
        : unsubcsribe;
  }, [selectedProject]);
};
