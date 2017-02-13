import React, {Component} from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: 'bam'
    };
  }
  render() {
    return (
      <div>
        <input
          onChange={event => this.setState({ term: event.target.value })}
          placeholder={this.state.term}
        />
        Value: {this.state.term}
      </div>
    );
  }
}

export default SearchBar;
