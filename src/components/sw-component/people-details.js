import React from 'react';
import { withSwapiService } from '../hoc';
import ItemDetails from '../item-details/item-details';
import { DetailsRecord } from './details-record';

const PeopleDetails = props => (
  <ItemDetails {...props}>
    <DetailsRecord field="gender" label="Gender" />
  </ItemDetails>
);

const mapMethodsToProps = swapiService => {
  return {
    getData: swapiService.getPerson,
    getImageUrl: swapiService.getPersonImage
  };
};

export default withSwapiService(mapMethodsToProps)(PeopleDetails);
