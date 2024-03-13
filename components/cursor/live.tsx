import React, { useEffect } from "react";
import LiveModules from "./liveModules";
import { useOthers } from "@/liveblocks.config";

const Live = () => {
  const others = useOthers();
  console.log(others);

  return (
    <div className="absolute z-50">
      <LiveModules others={others} />
    </div>
  );
};

export default Live;
