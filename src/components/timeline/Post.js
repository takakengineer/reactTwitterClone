import { Avatar } from "@mui/material";
import "./Post.css";
import React, { forwardRef } from "react";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PublishIcon from "@mui/icons-material/Publish";


const Post = forwardRef(
  ({ displayName, username, verified, text, image, avatar } ,ref) =>{
  return (
    <div className="post" ref={ref}>
      <div className="post--avatar">
        <Avatar src={avatar} />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3> {displayName} </h3>
            <span className="post__headerSpecial">
              <VerifiedUserIcon className="post__badge" />@{username}
            </span>
          </div>
          <div className="post__headerDescription">
            <p>{text}</p>
          </div>
          <img src={image} />
          <div className="post__footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <PublishIcon fontSize="small" />
          </div>
        </div>
      </div>
    </div>
  );
});



export default Post;
