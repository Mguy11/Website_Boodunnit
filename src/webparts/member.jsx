import React from 'react'

export default class Member extends React.Component {
  render() {
    return (
      <div className="member__content">
        <p className="member__name">{this.props.name}</p>
        <p className="member__description">{this.props.role}</p>
      </div>
    );
  }
}

