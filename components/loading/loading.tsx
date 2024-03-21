import React from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import football from "@/public/football.json";

const Loading: any = () => {
  return (
    <div className="flex justify-center items-center h-[600px] md:h-screen">
      <Player
        autoplay
        loop
        src={football}
        style={{ height: "300px", width: "300px" }}
      ></Player>
    </div>
  );
};

export default Loading;
