import "./App.css";
import Nav from "./components/Nav";
import Tweet from "./components/Tweet";

function App() {
  return (
    <div className="App">
      <h1>Tweet Streaming</h1>
      <Nav />
      <Tweet />
    </div>
  );
}

export default App;
