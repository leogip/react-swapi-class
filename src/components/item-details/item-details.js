import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ErrorIndicator } from '../error-indicator/error-indicator';
import { Spinner } from '../spinner/spinner';
import './item-details.css';

export default class ItemDetails extends Component {
  state = {
    item: null,
    image: null,
    loading: true,
    error: false
  };

  static propTypes = {
    itemId: PropTypes.string,
    getData: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
  }

  onError = () => {
    this.setState({ loading: false, error: true });
  };
  onItemLoaded = item => {
    this.setState({
      item,
      image: this.props.getImageUrl(item),
      loading: false
    });
  };

  updateItem() {
    const { itemId, getData } = this.props;

    if (!itemId) {
      return;
    }
    this.setState({ loading: true });
    getData(itemId)
      .then(this.onItemLoaded)
      .catch(this.onError);
  }

  render() {
    if (!this.state.item) {
      return <span>Select a person from list</span>;
    }

    const { item, loading, error, image } = this.state;

    const hasData = !(loading || error);

    const errorMessage = error ? <ErrorIndicator /> : null;
    const spinner = loading ? <Spinner /> : null;
    const renderContent = hasData ? (
      <>
        <img src={image} alt={`character ${item.name}`} />
        <div className="details-body">
          <h5 className="card-title">{item.name}</h5>
          <ul className="details-list">
            {React.Children.map(this.props.children, child => {
              return React.cloneElement(child, { item });
            })}
          </ul>
        </div>
      </>
    ) : null;

    return (
      <div className="card">
        <div className="card-body details-card">
          {spinner}
          {errorMessage}
          {renderContent}
        </div>
      </div>
    );
  }
}
