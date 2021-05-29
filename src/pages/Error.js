import React from "react";
import { BiError } from "react-icons/bi";

const Error = () => {
  return (
    <div className="error">
      <span>Page does not exist.</span>
      <span>
        <BiError className="error-icon" />
      </span>
    </div>
  );
};

export default Error;
