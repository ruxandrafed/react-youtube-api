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
      <div className="search-bar">
        Search:
        <input
          onChange={event => this.onInputChange(event.target.value)}
          placeholder={this.state.term}
        />
      </div>
    );
  }
  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
