import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Characters from './components/Characters/Characters';
import Home from './components/Home/Home';
import Episodes from './components/Episodes/Episodes';

function App() {

  const client = new ApolloClient({
    uri: "https://rickandmortyapi.com/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/characters">Character</Link>
            </li>
            <li>
              <Link to="/episodes">Episodes</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/characters">
            <Characters />
          </Route>
          <Route path="/episodes">
            <Episodes />
          </Route>
        </Switch>
      </div>
    </Router>
    </ApolloProvider>
  );
}

export default App;
