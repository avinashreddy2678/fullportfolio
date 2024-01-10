import axios from "axios";
import React, { useState } from "react";
import { baseurl } from "../helper";
import ContactMailIcon from "@mui/icons-material/ContactMail";
const Contact = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");

  const handlesubmit = async () => {
    const response = await axios.post(`${baseurl}/contact`, {
      name,
      email,
      message,
    });
    setname("");
    setemail("");
    setmessage("");
    alert(response.data.message);
  };
  return (
    <div className="min-h-[100vh]">
      <div
        className="formargine  text-white d-flex flex-column align-items-center"
        id="contact"
      >
        <div className="header">
          <button
            onClick={() =>
              window.open("mailto:imavinashreddy777@gmail.com.br>")
            }
            className="btn bg-[#0F1035]"
          >
            <p className="text-decoration-none text-white px-2">
              <ContactMailIcon />
              <span className="px-2 contactinfo">Mail</span>
            </p>
          </button>
        </div>
        <div className="contact mt-24">
          <h1>Contact</h1>
          <form onSubmit={handlesubmit}>
            <div class="form-group">
              <label for="exampleInputEmail1">Name</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Name"
                required
                value={name}
                onChange={(e) => {
                  setname(e.target.value);
                }}
              />
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Email</label>
              <input
                type="email"
                required
                value={email}
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                onChange={(e) => {
                  setemail(e.target.value);
                }}
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Message</label>
              <textarea
                type="text"
                required
                value={message}
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Message"
                onChange={(e) => {
                  setmessage(e.target.value);
                }}
              />
            </div>

            <button type="submit" className=" mt-2 btn btn-primary">
              Submit
            </button>
          </form>
        </div>
        <div className="py-3">
          <p>
            @ 2023 <span>-</span>. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
