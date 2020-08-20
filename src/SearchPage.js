import React from 'react';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow'
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import './SearchPage.css';

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage_filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
            </div>
            <hr />

            <ChannelRow
                image="https://avatars1.githubusercontent.com/u/22734604?s=460&u=d0f998a43369e9af1bd0244048490277213f619b&v=4"
                channel="Chukwuebuka Okafor"
                verified
                subs="2M"
                noOfVideos={2468}
                description="You can find awesome programming lessons here! Also, except programming tips and tricks that will take your coding skills to the ..."
            />

            <hr />

            <VideoRow
                views="1.4M"
                subs="700K"
                description="HTML #CSS #Bootstrap Learn HOW TO CREATE A WEBSITE IN HTML AND CSS STEP BY STEP FROM START TO FINISH ..."
                timestamp="59 seconds ago"
                channel="Chukwuebuka Okafor"
                title="How To Make Website Using HTML CSS | Start To End | Step By Step Tutorial | #9"
                image="https://i.ytimg.com/vi/DAWWf7q8sqM/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBwMu2Vj5p3TDdJA_TkZ4ccJ86yRg"
            />

            <VideoRow
                views="1.4M"
                subs="700K"
                description="HTML #CSS #Bootstrap Learn HOW TO CREATE A WEBSITE IN HTML AND CSS STEP BY STEP FROM START TO FINISH ..."
                timestamp="1 day ago"
                channel="Chukwuebuka Okafor"
                title="How To Make Website Using HTML CSS | Start To End | Step By Step Tutorial | #8"
                image="https://i.ytimg.com/vi/DAWWf7q8sqM/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBwMu2Vj5p3TDdJA_TkZ4ccJ86yRg"
            />

            <VideoRow
                views="1.4M"
                subs="700K"
                description="HTML #CSS #Bootstrap Learn HOW TO CREATE A WEBSITE IN HTML AND CSS STEP BY STEP FROM START TO FINISH ..."
                timestamp="2 days ago"
                channel="Chukwuebuka Okafor"
                title="How To Make Website Using HTML CSS | Start To End | Step By Step Tutorial | #7"
                image="https://i.ytimg.com/vi/DAWWf7q8sqM/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBwMu2Vj5p3TDdJA_TkZ4ccJ86yRg"
            />

            <VideoRow
                views="1.4M"
                subs="700K"
                description="HTML #CSS #Bootstrap Learn HOW TO CREATE A WEBSITE IN HTML AND CSS STEP BY STEP FROM START TO FINISH ..."
                timestamp="3 days ago"
                channel="Chukwuebuka Okafor"
                title="How To Make Website Using HTML CSS | Start To End | Step By Step Tutorial | #6"
                image="https://i.ytimg.com/vi/DAWWf7q8sqM/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBwMu2Vj5p3TDdJA_TkZ4ccJ86yRg"
            />

            <VideoRow
                views="1.4M"
                subs="700K"
                description="HTML #CSS #Bootstrap Learn HOW TO CREATE A WEBSITE IN HTML AND CSS STEP BY STEP FROM START TO FINISH ..."
                timestamp="4 days ago"
                channel="Chukwuebuka Okafor"
                title="How To Make Website Using HTML CSS | Start To End | Step By Step Tutorial | #5"
                image="https://i.ytimg.com/vi/DAWWf7q8sqM/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBwMu2Vj5p3TDdJA_TkZ4ccJ86yRg"
            />

            <VideoRow
                views="1.4M"
                subs="700K"
                description="HTML #CSS #Bootstrap Learn HOW TO CREATE A WEBSITE IN HTML AND CSS STEP BY STEP FROM START TO FINISH ..."
                timestamp="5 days ago"
                channel="Chukwuebuka Okafor"
                title="How To Make Website Using HTML CSS | Start To End | Step By Step Tutorial | #4"
                image="https://i.ytimg.com/vi/DAWWf7q8sqM/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBwMu2Vj5p3TDdJA_TkZ4ccJ86yRg"
            />

            <VideoRow
                views="1.4M"
                subs="700K"
                description="HTML #CSS #Bootstrap Learn HOW TO CREATE A WEBSITE IN HTML AND CSS STEP BY STEP FROM START TO FINISH ..."
                timestamp="6 days ago"
                channel="Chukwuebuka Okafor"
                title="How To Make Website Using HTML CSS | Start To End | Step By Step Tutorial | #3"
                image="https://i.ytimg.com/vi/DAWWf7q8sqM/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBwMu2Vj5p3TDdJA_TkZ4ccJ86yRg"
            />

            <VideoRow
                views="1.4M"
                subs="700K"
                description="HTML #CSS #Bootstrap Learn HOW TO CREATE A WEBSITE IN HTML AND CSS STEP BY STEP FROM START TO FINISH ..."
                timestamp="7 days ago"
                channel="Chukwuebuka Okafor"
                title="How To Make Website Using HTML CSS | Start To End | Step By Step Tutorial | #2"
                image="https://i.ytimg.com/vi/DAWWf7q8sqM/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBwMu2Vj5p3TDdJA_TkZ4ccJ86yRg"
            />

            <VideoRow
                views="1.4M"
                subs="700K"
                description="HTML #CSS #Bootstrap Learn HOW TO CREATE A WEBSITE IN HTML AND CSS STEP BY STEP FROM START TO FINISH ..."
                timestamp="8 days ago"
                channel="Chukwuebuka Okafor"
                title="How To Make Website Using HTML CSS | Start To End | Step By Step Tutorial | #1"
                image="https://i.ytimg.com/vi/DAWWf7q8sqM/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBwMu2Vj5p3TDdJA_TkZ4ccJ86yRg"
            />
        </div>
    )
}

export default SearchPage
