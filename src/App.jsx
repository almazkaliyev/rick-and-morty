import { Route, Switch } from 'react-router-dom';

import Nav from './components/Nav';
import CharacterPage from './pages/CharacterPage';
import HomePage from './pages/HomePage';
import LocationPage from './pages/LocationPage';
import LocationsPage from './pages/LocationsPage';
import NotFoundPage from './pages/NotFoundPage';

const App = () => (
  <div className="container">
    <header className="header">
      <h1>Rick and Morty</h1>
      <Nav />
    </header>
    <main className="main">
      <Switch>
        <Route component={HomePage} exact path="/" />
        <Route component={CharacterPage} exact path="/character/:id(\d+)" />
        <Route component={LocationsPage} exact path="/location" />
        <Route component={LocationPage} exact path="/location/:id(\d+)" />
        <Route component={NotFoundPage} path="*" />
      </Switch>
    </main>
  </div>
);

export default App;
