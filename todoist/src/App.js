import { Content } from "./components/layout/Content";
import { Header } from "./components/layout/Header";
import { ProjectsProvider, SelectedProjectProvider } from "./context";

export const App = () => {
  return (
    <SelectedProjectProvider>
      <ProjectsProvider>
        <div className="App">
          <p>Todoist</p>
          <Header />
          <Content />
        </div>
      </ProjectsProvider>
    </SelectedProjectProvider>
  );
};

export default App;
