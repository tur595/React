import { createContext, useContext, useState } from "react";
import { useProjects } from "../hooks";

export const SelectedProjectContext = createContext();
export const SelectedProjectProvider = ({ children }) => {
  const { selectedProject, setSelecctedProject } = useState("INBOX");

  return (
    <SelectedProjectContext.Provider
      value={{ selectedProject, setSelecctedProject }}
    >
      {children}
    </SelectedProjectContext.Provider>
  );
};

export const useSelectedProjectValue = () => useContext(SelectedProjectContext);
