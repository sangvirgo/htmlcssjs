import React from "react";
import ReactPlayer from "react-player/youtube";

const MyLove = () => {
  const roiemsegap = "https://www.youtube.com/watch?v=VUplNmhJa6Y";
  return (
    <div>
      <h1>This is my love</h1>
      <img
        height={300}
        src={require("../assets/images/mylove.jpg")}
        alt="An image of my love"
      />

      <ReactPlayer url="https://www.youtube.com/watch?v=5ismRwx4ebM&list=PL_-VfJajZj0W8-gf0g3YCCyFh-pVFMOgy" />

      <ReactPlayer
        url={roiemsegap}
        // playing={true}
        volume={0.5}
      />
    </div>
  );
};

export default MyLove;

// rfc taoj nhanh function
