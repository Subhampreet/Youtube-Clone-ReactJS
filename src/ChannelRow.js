import { Avatar } from "@material-ui/core";
import React from "react";
import "./ChannelRow.css";
// import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

function ChannelRow({
  image,
  channel,
  subs,
  noOfVideos,
  description,
  verified,
}) {
  return (
    <div className="channelRow">
      <Avatar className="channelRow_logo" src={image} alt={channel} />
      <div className="channelRow_text">
        <h4>
          {channel} {verified && <CheckCircleIcon className="checkIcon" />}
        </h4>
        <p>
          {subs} subscribers · {noOfVideos} videos
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ChannelRow;
