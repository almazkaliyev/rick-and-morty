import { Route, Switch } from 'react-router-dom';

import CharacterPage from './pages/CharacterPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';

const App = () => (
  <div className="container">
    <header className="header">
      <h1>Rick and Morty</h1>
    </header>
    <main className="main">
      <Switch>
        <Route component={HomePage} exact path="/" />
        <Route component={CharacterPage} exact path="/character/:id" />
        <Route component={NotFoundPage} path="*" />
      </Switch>
    </main>
  </div>
);

export default App;
