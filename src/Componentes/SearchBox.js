import React from 'react';

class SearchBox extends React.Component {
    render() {
        return (
            <div className='search-box'>
                <input type='text'
                className='search-box__input'
                placeholder={this.props.placeholder}
                onChange={this.props.onChange}>
                </input>
            </div>
        )
    }
}

export default SearchBox;