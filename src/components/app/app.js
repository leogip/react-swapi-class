import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import SwapiService from '../../services/swapi-service';
import ErrorBoundary from '../error-boundary/ErrorBoundary';
import { SwapiServiceProvider } from '../swapi-service-context';

import { AppHeader } from '../app-header/app-header';
import RandomPlanet from '../random-planet/random-planet';
import { PeoplePage, PlanetsPage, StarshipsPage } from '../pages';
import { StarshipsDetails } from '../sw-component';

export const App = () => {
  const swapiService = new SwapiService();
  return (
    <ErrorBoundary>
      <SwapiServiceProvider value={swapiService}>
        <Router>
          <div className="container">
            <AppHeader />
            <RandomPlanet />
            <Route path="/people/:id?" component={PeoplePage} />
            <Route path="/planets/:id?" component={PlanetsPage} />

            <Route path="/starships/" component={StarshipsPage} exact />
            <Route
              path="/starships/:id"
              render={({ match }) => {
                const { id } = match.params;
                return <StarshipsDetails itemId={id} />;
              }}
            />
          </div>
        </Router>
      </SwapiServiceProvider>
    </ErrorBoundary>
  );
};
