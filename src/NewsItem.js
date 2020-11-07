import { Avatar } from '@material-ui/core'
import React from 'react';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import MessageIcon from '@material-ui/icons/Message';
import MoreVertIcon from '@material-ui/icons/MoreVert';

function News_item({logoImage, name, timestamp, image, desc,like, comment}) {
    return (
        <div className="newsItem">
            <div className ="newsTop">
                <Avatar src={logoImage} className="newsLogo" />
                <h6>{name} · {timestamp}</h6>
            </div>

            <div className="newsMiddle">
                <p>{desc}</p>
                <img src={image} />
            </div>

            <div className="newsBottom">
                <div className="newsBottom_l">
                    <ThumbUpAltIcon className="news_logo" />
                    {like}
                    <ThumbDownIcon className="news_logo" />
                </div>

                <div className="newsBottom_r">
                    <MessageIcon className="news_logo" />
                    {comment}
                    <MoreVertIcon className="news_logo" />
                </div>
            </div>

        </div>
    )
}

export default News_item
