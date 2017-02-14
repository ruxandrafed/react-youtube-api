import React, {Component} from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: 'bam'
    };
  }
  render() {
    this.onInputChange = this.onInputChange.bind(this);
    return (
      <div>
        <input
          onChange={this.onInputChange}
          placeholder={this.state.term}
        />
        Value: {this.state.term}
      </div>
    );
  }
  onInputChange(event) {
    this.setState(
      { term: event.target.value }
    );
  }
}

export default SearchBar;
