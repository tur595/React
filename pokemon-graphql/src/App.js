import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { PokemonsContainer } from "./containers/PokemonsContainer";

function App() {
  const client = new ApolloClient({
    uri: "https://graphql-pokemon2.vercel.app",
  });

  return (
    <ApolloProvider client={client}>
      <main>
        <p>Pokemon</p>
        <PokemonsContainer />
      </main>
    </ApolloProvider>
  );
}

export default App;
