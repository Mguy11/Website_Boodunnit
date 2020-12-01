import React from 'react';

export default class Button extends React.Component {
  render() {
    return (
      <a href={this.props.website} className="button">
        <span className="button__text">{this.props.btnText}</span>
      </a>
    );
  }
}