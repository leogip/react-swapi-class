import React from 'react';
import PropTypes from 'prop-types';

export const DetailsRecord = ({ item, field, label }) => (
  <li className="details-item">
    {label}: <span>{item[field]}</span>
  </li>
);

DetailsRecord.propTypes = {
  item: PropTypes.object,
  label: PropTypes.string,
  field: PropTypes.string
};
