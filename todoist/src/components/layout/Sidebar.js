import { useState } from "react";
import {
  FaChevronDown,
  FaInbox,
  FaRegCalendarAlt,
  FaRegCalendar,
} from "react-icons/fa";
import { useSelectedProjectValue } from "../../context";
import { AddProject } from "../AddProject";
import { Projects } from "../Projects";

export const Sidebar = () => {
  const { setSelectedProject } = useSelectedProjectValue();
  const [active, setActive] = useState("inbox");
  const [showProjects, setShowProjects] = useState(true);

  return (
    <div className="sidebar" data-testid="sidebar">
      <ul className="sidebar__generic">
        <li
          className={active === "inbox" ? "active" : undefined}
          aria-label="Show Inbox Tasks"
          data-testid="inbox"
          role="button"
          tabIndex={0}
          onClick={() => {
            setActive("inbox");
            setSelectedProject("INBOX");
          }}
          onKeyDown={() => {
            setActive("inbox");
            setSelectedProject("INBOX");
          }}
        >
          <span>
            <FaInbox />
          </span>
          <span>Inbox</span>
        </li>
        <li
          className={active === "today" ? "active" : undefined}
          aria-label="Show Today's Tasks"
          role="button"
          tabIndex={0}
          data-testid="today"
          onClick={() => {
            setActive("today");
            setSelectedProject("TODAY");
          }}
          onKeyDown={() => {
            setActive("today");
            setSelectedProject("TODAY");
          }}
        >
          <span>
            <FaRegCalendar />
          </span>
          <span>Today</span>
        </li>
        <li
          className={active === "next_7" ? "active" : undefined}
          aria-label="Show Next 7 Day's Tasks"
          data-testid="next_7"
          role="button"
          tabIndex={0}
          onClick={() => {
            setActive("next_7");
            setSelectedProject("NEXT_7");
          }}
          onKeyDown={() => {
            setActive("next_7");
            setSelectedProject("NEXT_7");
          }}
        >
          <span>
            <FaRegCalendarAlt />
          </span>
          <span>Next 7 days</span>
        </li>
      </ul>
      <div
        aria-label="Show/Hide Projects"
        className="sidebar__middle"
        role="button"
        tabIndex={0}
        onClick={() => setShowProjects(!showProjects)}
        onKeyDown={() => setShowProjects(!showProjects)}
      >
        <span>
          <FaChevronDown
            className={!showProjects ? "hidden-projects" : undefined}
          />
        </span>
        <h2>Projects</h2>
      </div>
      <ul className="sidebar__projects">{showProjects && <Projects />}</ul>
      {showProjects && <AddProject />}
    </div>
  );
};
