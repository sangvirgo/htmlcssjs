import React, { useState } from "react";

const Bird = () => {
  const [isPlaying1, setIsPlaying1] = useState(false);
  const [isPlaying2, setIsPlaying2] = useState(false);

  const bird1 = new Audio(
    require("../assets/audio/Chuyen-Di-Cua-Nam-Di-De-Tro-Ve-2-Soobin-Hoang-Son.mp3"),
  );

  const bird2 = new Audio(
    require("../assets/audio/Hoa-Co-Mua-Xuan-Nguyen-Hai-Yen.mp3"),
  );

  function toggle1() {
    if (!isPlaying1) {
      bird1.play();
      setIsPlaying1(true);
      setIsPlaying2(false);
      bird2.pause();
    } else {
      bird1.pause();
      setIsPlaying1(false);
    }
  }

  function toggle2() {
    if (!isPlaying2) {
      bird2.play();
      setIsPlaying2(true);
      setIsPlaying1(false);
      bird1.pause();
    } else {
      bird2.pause();
      setIsPlaying2(false);
    }
  }

  return (
    <div>
      <button onClick={toggle1}>
        Caspian Tern 1 {isPlaying1 ? "Playing" : "Paused"}
      </button>
      <button onClick={toggle2}>
        Caspian Tern 2 {isPlaying2 ? "Playing" : "Paused"}
      </button>
    </div>
  );
};

export default Bird;
