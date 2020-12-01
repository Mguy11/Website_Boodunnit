import React from 'react';

export default class Image extends React.Component {
  render() {
    return (
      <div className="text-image__image" style={{ backgroundImage: `url(${this.props.image})` }} alt={this.props.altText} draggable="false"></div>
    );
  }
}