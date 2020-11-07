import { Avatar, Button } from "@material-ui/core";
import React from "react";
import "./ChannelVideo.css";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

function ChannelVideo({ image, title, description, views, timestamp }) {
  return (
    <div className="ChannelVideo">
      <img src={image} className="video_image" />
      <div className="channelVideo_text">
        <h4>{title}</h4>
        <h5>
          {views} views · {timestamp}
        </h5>
        <div className="video_logo">
          <Avatar src="https://yt3.ggpht.com/a/AATXAJyZBQmbGZE0RH4Rzh0my2iSArzhfVgUXY5iU8c1NYA=s900-c-k-c0x00ffffff-no-rj" className="videoRow_logo" />
          <h6>T-Series</h6>
          <CheckCircleIcon className="checkIcon" />
        </div>

        <p>{description}</p>
        <Button variant="contained" className="new">New</Button>
      </div>
    </div>
  );
}

export default ChannelVideo;
