import React from "react";
import './Links.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLinkedin, faGithub, faDiscord, faInstagram} from "@fortawesome/free-brands-svg-icons";

export default function Links() {
  return (
    <div class="social-container">
        <a href="https://www.linkedin.com/in/rahul-pandey-b51386179" className="linkedin social">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="https://www.github.com/RahulP1209" className="github social">
        <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a href="https://www.discord.com/channels/RahulP#7257" className="discord social">
        <FontAwesomeIcon icon={faDiscord} size="2x" />
        </a>
        <a href="https://www.instagram.com/rahul_pandey.in" className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
    </div>
  );
}