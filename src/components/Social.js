import React, { useState, useRef, useEffect } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaFacebookSquare,
  FaYoutube,
} from "react-icons/fa";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

const Social = () => {
  const [show, setShow] = useState(false);
  const [socialHeight, setSocialHeight] = useState(0);

  const socialItems = useRef(null);

  useEffect(() => {
    setSocialHeight(socialItems.current.scrollHeight);
  }, []);

  const handleShow = () => {
    if (show) {
    }
    setShow(!show);
  };

  return (
    <aside className="social">
      <div className={`social-wrapper ${show && "show"}`}>
        <div className="social-toggle" onClick={() => handleShow()}>
          {show ? (
            <BiRightArrow className="arrow" />
          ) : (
            <BiLeftArrow className="arrow" />
          )}
          <div className="title">SOCIAL</div>
        </div>
        <div className="social-items" ref={socialItems}>
          <a href="https://github.com/jkbsck" target="_blank">
            <div className="social-item">
              <FaGithub />
            </div>
          </a>
          <a href="https://www.linkedin.com/" target="_blank">
            <div className="social-item">
              <FaLinkedin />
            </div>
          </a>
          <a href="https://www.facebook.com" target="_blank">
            <div className="social-item">
              <FaFacebookSquare />
            </div>
          </a>
          <a href="https://www.youtube.com" target="_blank">
            <div className="social-item">
              <FaYoutube />
            </div>
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Social;
