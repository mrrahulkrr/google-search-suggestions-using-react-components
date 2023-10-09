// Write your code here
import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
  }

  updatedSearchInput = value => {
    this.setState({
      searchInput: value,
    })
  }

  onChangeSearch = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const searchResults = suggestionsList.filter(eachDenomination =>
      eachDenomination.suggestion
        .toLowerCase()
        .includes(searchInput.toLowerCase()),
    )

    return (
      <div className="app-container">
        <div className="google-suggestions-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google"
            className="google-logo"
          />
          <div className="search-input-suggestions-container">
            <div className="search-input-container">
              <img
                alt="search-icon"
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                className="search-icon"
              />
              <input
                className="search-input"
                placeholder="search"
                onChange={this.onChangeSearch}
                value={searchInput}
              />
            </div>
            <ul className="suggestions-list">
              {searchResults.map(eachList => (
                <SuggestionItem
                  key={eachList.id}
                  suggestionDetails={eachList}
                  updatedSearchInput={this.updatedSearchInput}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
