import React from "react";
import "./Sidebar.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import ExploreIcon from "@material-ui/icons/Explore";
import NotificationsIcon from "@material-ui/icons/Notifications";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import BookmarkBorderRoundedIcon from "@material-ui/icons/BookmarkBorderRounded";
import ListAltRoundedIcon from "@material-ui/icons/ListAltRounded";
import PersonRoundedIcon from "@material-ui/icons/PersonRounded";
import MoreHorizRoundedIcon from "@material-ui/icons/MoreHorizRounded";
import { SidebarOptions } from "./SidebarOptions";
import { Button } from "@material-ui/core";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <TwitterIcon className="twitter_icon" />

      <SidebarOptions active Icon={HomeIcon} text="Home" />
      <SidebarOptions Icon={ExploreIcon} text="Explore" />
      <SidebarOptions Icon={NotificationsIcon} text="Notifications" />
      <SidebarOptions Icon={EmailRoundedIcon} text="Messages" />
      <SidebarOptions Icon={BookmarkBorderRoundedIcon} text="Bookmarks" />
      <SidebarOptions Icon={ListAltRoundedIcon} text="Lists" />
      <SidebarOptions Icon={PersonRoundedIcon} text="Profile" />
      <SidebarOptions Icon={MoreHorizRoundedIcon} text="More" />

      <Button variant="outlined" className="sidebar_tweet" fullWidth>
        Tweet
      </Button>
    </div>
  );
};
