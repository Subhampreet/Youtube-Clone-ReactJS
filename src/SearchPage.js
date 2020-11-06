import React from 'react';
import "./SearchPage.css";
import TuneIcon from '@material-ui/icons/Tune';
import ChannelRow from './ChannelRow';

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage-filter">
                <TuneIcon />
                <h2>Filter</h2>
            </div>

            <hr />

            <ChannelRow
                image = "https://media-exp1.licdn.com/dms/image/C4E0BAQGLKj3JHcof0w/company-logo_200_200/0?e=2159024400&v=beta&t=Wc7KjFXDW1ir3_AFFOb5boJvkgMluj7F5d5YO3SWr9M"
                channel= "freeCodeCamp.org"
                verified
                subs="2.71M"
                noOfVideos = {1191}
                description="Learn to code for Free."
            /> 

            <hr />
        
        </div>
    )
}

export default SearchPage
