import { Avatar } from "@material-ui/core";
import { React, forwardRef } from "react";
import "./Post.css";
import VerifiedUserRoundedIcon from "@material-ui/icons/VerifiedUserRounded";
import ChatBubbleOutlineRoundedIcon from "@material-ui/icons/ChatBubbleOutlineRounded";
import RepeatRoundedIcon from "@material-ui/icons/RepeatRounded";
import FavoriteBorderRoundedIcon from "@material-ui/icons/FavoriteBorderRounded";
import PublishRoundedIcon from "@material-ui/icons/PublishRounded";

export const Post = forwardRef(
  ({ displayName, userName, text, avatar, image, verified }, ref) => {
    return (
      <div className="post" ref={ref}>
        <div className="post_avatar">
          <Avatar src={avatar} />
        </div>
        <div className="post_body">
          <div className="post_header">
            <div className="post_headerText">
              <h3>
                {displayName}
                <span className="post_headerSpecial">
                  {verified && (
                    <VerifiedUserRoundedIcon className="post_badge" />
                  )}
                  @ {userName}
                </span>
              </h3>
            </div>
            <div className="post_headerDescription">
              <p>{text}</p>
            </div>
          </div>
          <img src={image} alt="" />
          <div className="post_footer">
            <ChatBubbleOutlineRoundedIcon fontSize="small" />
            <RepeatRoundedIcon fontSize="small" />
            <FavoriteBorderRoundedIcon fontSize="small" />
            <PublishRoundedIcon fontSize="small" />
          </div>
        </div>
      </div>
    );
  }
);
