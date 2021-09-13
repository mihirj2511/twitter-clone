import { Avatar, Button } from "@material-ui/core";
import React, { useState } from "react";
import "./TweetBox.css";
import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore";

export const TweetBox = () => {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();
    addDoc(collection(db, "Posts"), {
      displaName: "Mihir Joshi",
      userName: "PseudoCoder2511",
      text: tweetMessage,
      image: tweetImage,
      verified: true,
      avatar:
        "https://pbs.twimg.com/profile_images/1416697924361195523/_V0OC1Cd_400x400.jpg",
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox_input">
          <Avatar src="https://pbs.twimg.com/profile_images/1416697924361195523/_V0OC1Cd_400x400.jpg" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            type="text"
            placeholder="What's happening?"
          />
        </div>
        <input
          onChange={(e) => setTweetImage(e.target.value)}
          value={tweetImage}
          type="text"
          className="tweetBox_imageInput"
          placeholder="Optional: Enter image URL"
        />
        <Button
          onClick={sendTweet}
          type="submit"
          variant="outlined"
          className="tweetBox_tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
};
