import React from "react";
import "./recommended.css";
import VideoCard from "./VideoCard";
import FilterBar from "./FilterBar";
import Cover from './Cover';
import News from './News';


function RecommendedVideos() {
  return (
    <div className="recommended">
      <FilterBar />

      <Cover />

      <h2>Recommended</h2>

      <div className="recommendedVideo">
        <VideoCard
          title="Game of Thrones~Every dragon scene~Seasons 1-8"
          views="1.9M views"
          timestamp="1 year ago"
          image="https://pome-mag.com/wp-content/uploads/2017/09/game-of-thrones-season-7-episode-4-the-spoils-of-war-35.jpg"
          channelImage="https://images-na.ssl-images-amazon.com/images/I/91KwasehsHL._RI_.jpg"
          channel="Game Of Thrones"
        />
        <VideoCard
          title="Mujhe Peene Do - Darshan Raval"
          views="890k views"
          timestamp="10 days ago"
          image="https://i.ytimg.com/vi/tOXMlseYc7E/maxresdefault.jpg"
          channelImage="https://yt3.ggpht.com/a/AATXAJyAtaR5kNZ5b7-4ytyB2NOnmPYRO9IXqHHxOBRH=s900-c-k-c0x00ffffff-no-rj"
          channel="Indie Music Label"
        />
        <VideoCard
          title="Hunter X Hunter | The Final Battle"
          views="1.3M views"
          timestamp="3 months ago"
          image="https://latestnews.fresherslive.com/images/articles/origin/2020/10/29/how-to-watch-hunter-x-hunter-in-order-5f9a78524aab5-1603958866.jpg"
          channelImage="https://i.ytimg.com/vi/hGL-t-ESsKc/maxresdefault.jpg"
          channel="Hunter X Hunter"
        />
        <VideoCard
          title="Amazon Clone using ReactJS - The Ultimate Guide"
          views="1.9M views"
          timestamp="2 months ago"
          image="https://miro.medium.com/max/2560/1*J6jEqNvW0wWAblO1FPVtTQ.jpeg"
          channelImage="https://is4-ssl.mzstatic.com/image/thumb/Music118/v4/82/54/ae/8254ae74-339b-de39-4d00-53e5868cfb06/source/600x600bb.jpg"
          channel="Game Of Thrones"
        />

        <VideoCard
          title="BB Ki Vines- | ManglooSutra |"
          views="17M views"
          timestamp="1 months ago"
          image="https://i.ytimg.com/vi/BslKbJkOm98/maxresdefault.jpg"
          channelImage="https://yt3.ggpht.com/a/AATXAJzD2mCg0LPx8_5qMmvfxz2kUbVvwHp94EjyG64COg=s900-c-k-c0x00ffffff-no-rj"
          channel="BB Ki Vines"
        />
        <VideoCard
          title="101 Great Goals By Cristiano Ronaldo |HD"
          views="3M views"
          timestamp="1 year ago"
          image="https://i.ytimg.com/vi/vNW4r7-s6hs/maxresdefault.jpg"
          channelImage="https://static.standard.co.uk/s3fs-public/thumbnails/image/2019/10/14/17/cristiano-ronaldo-111019.jpg?w968"
          channel="CR7 - Fan Club"
        />
        <VideoCard
          title="Darshan Raval - Hawa Banke | Official Music Video | Nirmaan..."
          views="130M views"
          timestamp="1 year ago"
          image="https://www.lyricsbell.com/wp-content/uploads/2019/07/hawa-banke-darshan-raval.jpg"
          channelImage="https://yt3.ggpht.com/a/AATXAJyAtaR5kNZ5b7-4ytyB2NOnmPYRO9IXqHHxOBRH=s900-c-k-c0x00ffffff-no-rj"
          channel="Indie Music Label"
        />
        <VideoCard
          title="Munna Bhai Funny Exam Cheating Scene | Sanjay Dutt | Munna Bhai..."
          views="1.5M views"
          timestamp="7 months ago"
          image="https://i.ytimg.com/vi/iYTvCx5egCQ/maxresdefault.jpg"
          channelImage="https://yt3.ggpht.com/a/AATXAJyzyrPJMwSCUxtTlY-MQ9sEqX8XHm8MYq4yr7e6Gw=s900-c-k-c0x00ffffff-no-rj"
          channel="Netflix India"
        />
      </div>

      <hr />
      <h2>Latest YouTube News</h2>
      <News />
    </div>
  );
}

export default RecommendedVideos;
