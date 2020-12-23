import React from 'react'

export default class FAQitem extends React.Component {
  state = {
    showButton: false,
  }

  render() {
    return (
      <div className="faq-item">
        <h3>{this.props.title}</h3>
        <p>{this.props.body}</p>
      </div>
    );
  }
}

