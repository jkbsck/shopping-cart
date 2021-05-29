import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { RiEyeCloseLine, RiEye2Line } from "react-icons/ri";
import { HiEye } from "react-icons/hi";

const Info = () => {
  const [eyesOpened, setEyesOpened] = useState(false);

  return (
    <section className="info">
      <div className="wrapper">
        <a href="https://github.com/jkbsck" target="_blank">
          <div
            className="trigger"
            onMouseEnter={() => setEyesOpened(true)}
            onMouseLeave={() => setEyesOpened(false)}
          ></div>
        </a>
        <FaGithub className="github" />
        {eyesOpened ? (
          <>
            <HiEye className="left" />
            <HiEye className="right" />
          </>
        ) : (
          <>
            <RiEyeCloseLine className="left" />
            <RiEyeCloseLine className="right" />
          </>
        )}
      </div>
    </section>
  );
};

export default Info;
