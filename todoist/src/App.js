import { Content } from "./components/layout/Content";
import { Header } from "./components/layout/Header";

export const App = () => {
  return (
    <div className="App">
      <p>Todoist</p>
      <Header />
      <Content />
    </div>
  );
};

export default App;
