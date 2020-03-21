import React from 'react';
import { withRouter } from 'react-router-dom';

import ErrorBoundary from '../../error-boundary/ErrorBoundary';
import { PeopleList } from '../../sw-component';

const StarshipsPage = ({ history }) => {
  return (
    <ErrorBoundary>
      <PeopleList onSelectedItem={itemId => history.push(itemId)} />
    </ErrorBoundary>
  );
};

export default withRouter(StarshipsPage);
