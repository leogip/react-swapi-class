import React, { Component } from 'react';

import { withSwapiService } from '../hoc';
import { Spinner } from '../spinner/spinner';
import { ErrorIndicator } from '../error-indicator/error-indicator';
import { PlanetView } from '../planet-view/planet-view';
import ErrorBoundary from '../error-boundary/ErrorBoundary';

import './random-planet.css';
import PropTypes from 'prop-types';

class RandomPlanet extends Component {
  state = {
    planet: {},
    image: null,
    loading: true,
    error: false
  };

  static propTypes = {
    getData: PropTypes.func
  };

  componentDidMount() {
    this.updatePlanet();
  }

  onError = () => {
    this.setState({ loading: false, error: true });
  };
  onPlanetLoaded = planet => {
    this.setState({
      planet,
      image: this.props.getImageUrl(planet),
      loading: false
    });
  };

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 25) + 3;
    this.props
      .getData(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  };

  render() {
    const { planet, image, loading, error } = this.state;

    const hasData = !(loading || error);

    const errorMessage = error ? <ErrorIndicator /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = hasData ? (
      <PlanetView planet={planet} image={image} />
    ) : null;

    return (
      <ErrorBoundary>
        <div className="jumbotron random">
          {spinner}
          {errorMessage}
          {content}
        </div>
      </ErrorBoundary>
    );
  }
}

const mapMethodToProps = swapiService => {
  return {
    getData: swapiService.getPlanet,
    getImageUrl: swapiService.getPlanetImage
  };
};

export default withSwapiService(mapMethodToProps)(RandomPlanet);
