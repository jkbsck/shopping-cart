import React from "react";
import { AiOutlineLoading } from "react-icons/ai";

const Loading = () => {
  return (
    <div className="loading">
      <span>Loading...</span>
      <span>
        <AiOutlineLoading className="loading-icon" />
      </span>
    </div>
  );
};

export default Loading;
