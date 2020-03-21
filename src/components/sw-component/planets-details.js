import React from 'react';
import { withSwapiService } from '../hoc';
import ItemDetails from '../item-details/item-details';
import { DetailsRecord } from './details-record';

const PlanetsDetails = props => (
  <ItemDetails {...props}>
    <DetailsRecord field="population" label="Population" />
  </ItemDetails>
);

const mapMethodsToProps = swapiService => {
  return {
    getData: swapiService.getPlanet,
    getImageUrl: swapiService.getPlanetImage
  };
};

export default withSwapiService(mapMethodsToProps)(PlanetsDetails);
