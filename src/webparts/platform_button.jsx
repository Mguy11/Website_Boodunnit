import React from 'react';
import { Col } from 'react-flexbox-grid';

export default class TeamMember extends React.Component {
  render() {
    return (
      <a href={this.props.website} target="_blank" rel="noreferrer noopenere" className="platform-button">
        <div className="platform-button__icon" style={{ backgroundImage: `url(${this.props.image})` }} alt={this.props.altText} draggable="false"></div>
      </a>
    );
  }
}