import React from 'react';

class Description extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      readState: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      readState: !this.state.readState
    })
  }

  render() { 
    if (this.state.readState) {
      return ( 
        <div>
          <div id="description">{this.props.description}</div>
          <a className="hyperlink" onClick={this.handleClick}>- Read less</a>
        </div>
      );
    } else {
      return (
        <div>
          <div id="description">{this.props.description.slice(0, 294)}</div>
          <a className="hyperlink" onClick={this.handleClick}>+ Read more</a>
        </div>
      )
    }
  }
}

export default Description;