import React from 'react';
import PropTypes from 'prop-types';

export const ItemList = ({ onSelectedItem, data, children }) => {
  const renderItems = data
    ? data.map(item => {
        const label = children(item);
        return (
          <li
            key={item.id}
            className="list-group-item"
            onClick={() => onSelectedItem(item.id)}>
            {label}
          </li>
        );
      })
    : null;

  return <ul className="list-group">{renderItems}</ul>;
};

ItemList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSelectedItem: PropTypes.func
};
