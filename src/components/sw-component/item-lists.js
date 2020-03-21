import React from 'react';
import { compose, withChild, withData, withSwapiService } from '../hoc';
import { ItemList } from '../item-list/item-list';

const mapPeopleMethodsToProps = swapiService => {
  return {
    getData: swapiService.getAllPeople
  };
};

const mapPlanetsMethodsToProps = swapiService => {
  return {
    getData: swapiService.getAllPlanets
  };
};

const mapStarshipsMethodsToProps = swapiService => {
  return {
    getData: swapiService.getAllStarships
  };
};

const renderPeople = i => (
  <span>
    {i.name} ({i.gender})
  </span>
);
const renderPlanet = i => (
  <span>
    {i.name} ({i.population})
  </span>
);
const renderStarship = i => (
  <span>
    {i.name} ({i.model})
  </span>
);

export const PeopleList = compose(
  withSwapiService(mapPeopleMethodsToProps),
  withData,
  withChild(renderPeople)
)(ItemList);

export const PlanetsList = compose(
  withSwapiService(mapPlanetsMethodsToProps),
  withData,
  withChild(renderPlanet)
)(ItemList);

export const StarshipsList = compose(
  withSwapiService(mapStarshipsMethodsToProps),
  withData,
  withChild(renderStarship)
)(ItemList);
