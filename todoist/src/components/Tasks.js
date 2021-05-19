import { useEffect, useState } from "react";
import { Checkbox } from "./Checkbox";
import { useTasks } from "../hooks";
import { useProjectsValue, useSelectedProjectValue } from "../context";
import { collatedTasksExists, getTitle, getCollatedTitle } from "../helpers";
import { collatedTasks } from "../constants";
import { AddTask } from "./AddTask";

export const Tasks = () => {
  const { selectedProject } = useSelectedProjectValue();
  const { projects } = useProjectsValue();
  const { tasks } = useTasks(selectedProject);
  let projectName = "";

  if (projects && selectedProject && !collatedTasksExists(selectedProject)) {
    projectName = getTitle(projects, selectedProject).name;
  }

  if (collatedTasksExists(selectedProject) && selectedProject) {
    projectName = getCollatedTitle(collatedTasks, selectedProject).name;
  }

  useEffect(() => {
    document.title = `${projectName}: Todoist`;
  }, []);

  return (
    <div className="tasks" data-testid="tasks">
      <h2 data-testid="project-name">{projectName}</h2>

      <ul className="tasks__list">
        {tasks.map((task) => (
          <li key={`${task.id}`}>
            <Checkbox id={task.id} />
            <span>{task.task}</span>
          </li>
        ))}
      </ul>
      <AddTask />
    </div>
  );
};
