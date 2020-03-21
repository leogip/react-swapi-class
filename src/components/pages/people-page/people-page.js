import React from 'react';
import { withRouter } from 'react-router-dom/';

import ErrorBoundary from '../../error-boundary/ErrorBoundary';
import { PeopleDetails, PeopleList } from '../../sw-component';
import { RowHalf } from '../../row-half/row-half';

const PeoplePage = ({ history, match }) => {
  const { id } = match.params;
  return (
    <ErrorBoundary>
      <RowHalf
        left={<PeopleList onSelectedItem={id => history.push(id)} />}
        right={<PeopleDetails itemId={id} />}
      />
    </ErrorBoundary>
  );
};

export default withRouter(PeoplePage);
