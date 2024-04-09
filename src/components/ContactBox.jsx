import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

function ContactBox({title = "Contact Us"}) {

  return (
    <>



<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel"><img src="https://image.emojipng.com/416/6635416.jpg" width={30} /> Message Sent</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      Thanks for contacting us! We'll be in touch soon. In the meantime, explore our delicious options by visiting our menu.
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" data-bs-dismiss="modal">
        <NavLink to={"/search"} style={{color: "white", textDecoration: "none"}}>
          Explore More 
        </NavLink>
        </button>
      </div>
    </div>
  </div>
</div>


      <div id="third-contactus" style={{textAlign: title == "Leave a comment" ? "start" : "center"}}>
        <h2 style={{textAlign: title == "Leave a comment" ? "start" : "center"}}>{title}</h2>
        <div id="input-info">
          <div id="personal-info">
            <input type="text" name="" id="" placeholder="Name" />
            <input type="text" placeholder="E-mail" />
          </div>

          <input type="text" placeholder="Subject" />
          <textarea
            placeholder="Message"
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <button type="button" className="btn btn-primary green-background-with-left-border sendButton" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Send
        </button>
      </div>
    </>
  );
}

export default ContactBox;
