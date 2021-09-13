import React, { useEffect, useState } from "react";
import "./Feed.css";
import { Post } from "./Post";
import { TweetBox } from "./TweetBox";
import { db } from "./firebase";
import { collection, onSnapshot } from "firebase/firestore";
import FlipMove from "react-flip-move";

export const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const q = collection(db, "Posts");
    onSnapshot(q, (querySnapshot) => {
      setPosts(querySnapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <div className="feed">
      <div className="feed_header">
        <h2>Home</h2>
      </div>

      <TweetBox />

      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.id}
            displayName={post.displayName}
            userName={post.userName}
            verified={post.verified}
            text={post.text}
            image={post.image}
            avatar={post.avatar}
          />
        ))}
      </FlipMove>
    </div>
  );
};
