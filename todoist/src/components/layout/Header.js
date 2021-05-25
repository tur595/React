import { useState } from "react";
import { FaPizzaSlice } from "react-icons/fa";
import { AddTask } from "../AddTask";

export const Header = ({ darkMode, setDarkMode }) => {
  const [shouldShowMain, setShouldShowMain] = useState(false);
  const [showQuickAddTask, setShowQuickAddTask] = useState(false);

  return (
    <header className="header" data-testid="header">
      <nav>
        <div className="logo">
          <img src="/logo.png" alt="Todoist" />
        </div>
        <div className="settings">
          <ul>
            <li
              aria-label="Quick Add Task"
              data-testid="quick-add-task-action"
              className="settings__add"
              tabIndex={0}
              role="button"
              onClick={() => {
                setShowQuickAddTask(true);
                setShouldShowMain(true);
              }}
              onKeyDown={() => {
                setShowQuickAddTask(true);
                setShouldShowMain(true);
              }}
            >
              +
            </li>
            <li
              aria-label="Darkmode"
              data-testid="dark-mode-action"
              className="settings__darkmode"
              tabIndex={0}
              role="button"
              onClick={() => setDarkMode(!darkMode)}
              onKeyDown={() => setDarkMode(!darkMode)}
            >
              <FaPizzaSlice />
            </li>
          </ul>
        </div>
      </nav>

      <AddTask
        showAddTaskMain={false}
        shouldShowMain={shouldShowMain}
        showQuickAddTask={showQuickAddTask}
        setShowQuickAddTask={setShowQuickAddTask}
      />
    </header>
  );
};
