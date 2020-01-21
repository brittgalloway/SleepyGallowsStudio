import React from "react";

function Contact() {
  return (
    <div id="skills" className="box">
      <p className="is-size-4">Contact</p>

      <ul>
        <li>Email: crlnfllr@gmail.com</li>
        <li>GitHub: https://github.com/brittgalloway</li>
        <li>LinkedIn: https://www.linkedin.com/in/brittneygalloway/</li>
        <li>
          <a href={process.env.PUBLIC_URL + "/brittneyGallowayResume.docx"}>
            <i class="fas fa-file"></i> Resume
          </a>
        </li>
      </ul>
    </div>
  );
}
export default Contact;
