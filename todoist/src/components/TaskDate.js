import { FaRegPaperPlane, FaSpaceShuttle, FaSun } from "react-icons/fa";
import moment from "moment";

export const TaskDate = ({ setTaskDate, showTaskDate, setShowTaskDate }) => {
  return (
    showTaskDate && (
      <div className="task-date" data-testid="task-date-overlay">
        <ul className="task-date__list">
          <li
            role="button"
            tabIndex={0}
            data-testid="task-date-overlay"
            aria-label="Select today as the task date"
            onClick={() => {
              setShowTaskDate(false);
              setTaskDate(moment().format("DD/MM/YYYY"));
            }}
            onKeyDown={() => {
              setShowTaskDate(false);
              setTaskDate(moment().format("DD/MM/YYYY"));
            }}
          >
            <span>
              <FaSpaceShuttle />
            </span>
            <span>Today</span>
          </li>
          <li
            role="button"
            tabIndex={0}
            aria-label="Select tomorrow as the task date"
            data-testid="task-date-tomorrow"
            onClick={() => {
              setShowTaskDate(false);
              setTaskDate(moment().add(1, "day").format("DD/MM/YYYY"));
            }}
            onKeyDown={() => {
              setShowTaskDate(false);
              setTaskDate(moment().add(1, "day").format("DD/MM/YYYY"));
            }}
          >
            <span>
              <FaSun />
            </span>
            <span>Tomorrow</span>
          </li>
          <li
            role="button"
            tabIndex={0}
            data-testid="task-date-next-week"
            aria-label="Select next week as the task date"
            onClick={() => {
              setShowTaskDate(false);
              setTaskDate(moment().add(7, "day").format("DD/MM/YYYY"));
            }}
            onKeyDown={() => {
              setShowTaskDate(false);
              setTaskDate(moment().add(7, "day").format("DD/MM/YYYY"));
            }}
          >
            <span>
              <FaRegPaperPlane />
            </span>
            <span>Next Week</span>
          </li>
        </ul>
      </div>
    )
  );
};
