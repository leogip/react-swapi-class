import React from 'react';
import { withRouter } from 'react-router-dom/';

import ErrorBoundary from '../../error-boundary/ErrorBoundary';
import { RowHalf } from '../../row-half/row-half';
import { PlanetsDetails, PlanetsList } from '../../sw-component';

const PlanetsPage = ({ history, match }) => {
  const { id } = match.params;
  return (
    <ErrorBoundary>
      <RowHalf
        left={<PlanetsList onSelectedItem={id => history.push(id)} />}
        right={<PlanetsDetails itemId={id} />}
      />
    </ErrorBoundary>
  );
};

export default withRouter(PlanetsPage);
