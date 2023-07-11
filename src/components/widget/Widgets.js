import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./Widgets.css";
// import {TwitterTimelineEmbed,TwitterShareButton,TwitterTweetEmbed,} from "react-twitter-embed";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__seachIcon" />
        <input placeholder="キーワード検索" type="text"></input>
      </div>

      <div className="widgets__widgetContainer">
        <h2>いまどうしてる？</h2>

        {/* ライブラリを追加・追記 */}
        {/* １*/}
        {/* <TwitterTweetEmbed tweetid={"1475764828208009220"}/>
        <TwitterTimelineEmbed sourceType='profile' screenName='Shin_Engineer' options={{height: 400}}/>
        <TwitterShareButton url={"https://twitter.com/Shin_Engineer"} options={{text: "#React.js勉強中", via:"Shin_Engineer"}}/> */}
      </div>
    </div>
  );
}

export default Widgets;
