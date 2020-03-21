import React from 'react';
import PropTypes from 'prop-types';

export const PlanetView = ({ planet, image }) => {
  const { name, population, rotationPeriod, diameter } = planet;
  return (
    <>
      <img src={image} alt={name} />
      <div className="random-body">
        <h1 className="display-6">{name}</h1>
        <ul className="random-list">
          <li className="random-item">
            Population: <span>{population}</span>
          </li>
          <li className="random-item">
            Rotation Period: <span>{rotationPeriod}</span>
          </li>
          <li className="random-item">
            Diameter: <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </>
  );
};

PlanetView.propTypes = {
  planet: PropTypes.object.isRequired,
  image: PropTypes.string
};
