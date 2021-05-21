import { useState } from "react";
import { FaPizzaSlice } from "react-icons/fa";

export const Header = ({ darkMode, setDarkMode }) => {
  const [shoulShowMain, setShoulShowMain] = useState(false);
  const [showQuickAddTask, setShowQuickAddTask] = useState(false);

  return (
    <header className="header" data-testid="header">
      <nav>
        <div className="logo">
          <img src="/logo.png" alt="Todoist" />
        </div>
        <div className="settings">
          <ul>
            <li data-testid="quick-add-task-action" className="settings__add">
              +
            </li>
            <li
              onClick={() => setDarkMode(!darkMode)}
              data-testid="dark-mode-action"
              className="settings__darkmode"
            >
              <FaPizzaSlice />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
