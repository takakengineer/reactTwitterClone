import { Avatar, Button } from "@mui/material";
import React from "react";
import "./Tweetbox.css";
import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore"; 
import db from "../../firebase"; 

function Tweetbox() {

  const [tweetMessage,setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    // Firebaseのデータベースを追加する。
    e.preventDefault();

    addDoc(collection(db, "posts"),{
          avatar:"http://shincode.info/wp-content/uploads/2021/12/icon.png",
          displayName:"プログラミングチュートリアル",
          image:tweetImage,
          text:tweetMessage,
          username:"Shin_Engineer",
          verified:true,
          timestamp: serverTimestamp(),
    });

    setTweetMessage("");
    setTweetImage("");
    
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar />
          <input 
             value={tweetMessage}
             placeholder="いまどうしてる？" type="text"
             onChange={(e) => setTweetMessage(e.target.value)}
          ></input>
        </div>
        <input
          value={tweetImage}
          className="tweetBox__imageInput"
          placeholder="画像のURLを入力してください"
          type="text"
           onChange={(e) => setTweetImage(e.target.value)}
        ></input>
        <Button className="tweetBox__tweetButton" type="submit"
         onClick={sendTweet}
        >
          ツイートする
        </Button>
      </form>
    </div>
  );
}

export default Tweetbox;
