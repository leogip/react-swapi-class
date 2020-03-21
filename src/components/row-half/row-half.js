import React from 'react';
import PropTypes from 'prop-types';

export const RowHalf = ({ left, right }) => (
  <div className="row">
    <div className="col-md-6">{left}</div>
    <div className="col-md-6">{right}</div>
  </div>
);

RowHalf.propTypes = {
  left: PropTypes.node,
  right: PropTypes.node
};
