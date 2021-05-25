import { firebase } from "../firebase";

export const Checkbox = ({ id, taskDesc }) => {
  const archiveTask = () => {
    firebase.firestore().collection("tasks").doc(id).update({
      archived: true,
    });
  };

  return (
    <div
      className="checkbox-holder"
      aria-label={`Mark ${taskDesc} as done?`}
      data-testid="checkbox-action"
      role="button"
      tabIndex={0}
      onClick={() => archiveTask()}
      onKeyDown={() => archiveTask()}
    >
      <span className="checkbox" />
    </div>
  );
};
