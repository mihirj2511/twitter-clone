import React from "react";
import "./Widget.css";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import {
  TwitterShareButton,
  TwitterTweetEmbed,
  TwitterTimelineEmbed,
} from "react-twitter-embed";

export const Widget = () => {
  return (
    <div className="widget">
      <div className="widget_input">
        <SearchRoundedIcon className="widget_searchIcon" />
        <input type="text" placeholder="Search Twitter" />
      </div>
      <div className="widget_widgetContainer">
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId={"1420646793059049481"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="PseudoCoder2511"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://www.facebook.com/Mihirj.17"}
          options={{ text: "#reactjs is awsome", via: "PseudoCoder2511" }}
        />
      </div>
    </div>
  );
};
