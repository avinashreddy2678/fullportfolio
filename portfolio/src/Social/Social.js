import React, {useState } from "react";
import axios from 'axios'
import "./social.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import Twitter from "@mui/icons-material/Twitter";
import Github from "@mui/icons-material/GitHub";
import Linkedin from "@mui/icons-material/LinkedIn";
import { baseurl } from "../helper";
function Social() {
  const [name,setname]=useState('');
  const [email,setemail]=useState('');
  const [message,setmessage]=useState('');
  const handlesubmit=async()=>{
    const response=await axios.post(`${baseurl}/contact`,{
        name,email,message
    })
    setname('');setemail('')
    setmessage('')
    alert(response.data.message);
  }
  return (
    <>
      <div
        className="formargine text-white d-flex flex-column align-items-center"
        id="social"
      >
        <div className="socail-project">
          <h1 className="pt-5">Connect With Me</h1>

          <div className="all-media">
            <button
              className="button btn btn-dark px-3"
              onClick={() => {
                window.open(
                  "https://www.instagram.com/avinashreddy.2689/",
                  "_blank"
                );
              }}
            >
              <InstagramIcon />
            </button>
            <button
              className="button btn btn-dark px-3"
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/in/avinash-mamidi-2687782i/",
                  "_blank"
                );
              }}
            >
              <Linkedin />
            </button>
            <button
              className="button btn btn-dark px-3"
              onClick={() => {
                window.open("https://github.com/avinashreddy2678", "_blank");
              }}
            >
              <Github />
            </button>

            <button
              className="button btn btn-dark px-3"
              onClick={() => {
                window.open("https://twitter.com/Avinash86855738", "_blank");
              }}
            >
              <Twitter />
            </button>
          </div>
        </div>
      </div>
      <div
        className="formargine text-white d-flex flex-column align-items-center"
        id="contact"
      >
      <div className="contact">
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
              onChange={(e)=>{setname(e.target.value)}}
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
              onChange={(e)=>{setemail(e.target.value)}}
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
              onChange={(e)=>{setmessage(e.target.value)}}
            />
          </div>
          <p className="mt-4">Note: If you Really Want to contact Me Msg me until you get an Alert</p>
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
    </>
  );
}

export default Social;
