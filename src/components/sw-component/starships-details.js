import React from 'react';
import { withSwapiService } from '../hoc';
import ItemDetails from '../item-details/item-details';
import { DetailsRecord } from './details-record';

const StarshipsDetails = props => (
  <ItemDetails {...props}>
    <DetailsRecord field="model" label="Model" />
  </ItemDetails>
);

const mapMethodsToProps = swapiService => {
  return {
    getData: swapiService.getStarship,
    getImageUrl: swapiService.getStarshipImage
  };
};

export default withSwapiService(mapMethodsToProps)(StarshipsDetails);
