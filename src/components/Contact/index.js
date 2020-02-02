import React from "react";

function Contact() {
  return (
    <div id="skills" className="box ">
      <p className="is-size-4 " >Contact</p>

      <ul>
        <li>
          Email:
          <br /> crlnfllr@gmail.com
        </li>
        <li>
          GitHub:
          <br />
          <a href="https://github.com/brittgalloway">
            https://github.com/brittgalloway
          </a>
        </li>
        <li>
          LinkedIn:
          <br />
          <a href="https://www.linkedin.com/in/brittneygalloway/">
            https://www.linkedin.com/in/brittneygalloway/
          </a>
        </li>
        <li>
          <a href={process.env.PUBLIC_URL + "/brittneyGallowayResume.docx"}>
            <i className="fas fa-file"></i> Resume
          </a>
        </li>
      </ul>
    </div>
  );
}
export default Contact;
