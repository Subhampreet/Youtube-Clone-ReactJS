import React from 'react';
import "./SearchPage.css";
import TuneIcon from '@material-ui/icons/Tune';

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage-filter">
                <TuneIcon />
                <h2>Filter</h2>
            </div>

            <hr />
        
        </div>
    )
}

export default SearchPage
