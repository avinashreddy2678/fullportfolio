import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseurl } from "../../helper";
import ContactMailIcon from "@mui/icons-material/ContactMail";

import { Input, Textarea } from "../../UI/Input";
import { useToast } from "@chakra-ui/react";
import { Button } from "../../UI/Button";
import { Card } from "../../UI/TechUI";
const Contact = () => {
  useEffect(()=>{
    document.title=`Contact`
  },[]);
 
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");
  const toast = useToast();
  const handlesubmit = async (e) => {
    e.preventDefault();
    //  console.log(name,email,message)
    const response = await axios.post(`${baseurl}/contact`, {
      name,
      email,
      message,
    });
    setname("");
    setemail("");
    setmessage("");
    toast({
      title: "Message Sent ",
      description: "Thanks for the message.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    // alert(response.data.message);
  };
  return (
    <div className="min-h-[100vh]">
      <div className="formargine " id="contact">
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
        <h1 className="text-gray-500 pt-24">Contact</h1>
        <Card className="mt-12">
          <form onSubmit={handlesubmit} className="mx-4">
            <div className="my-3 grid sm:grid md:grid-cols-2 lg:grid-cols-2 gap-6">
              <Input
                required
                value={name}
                onChange={(e) => {
                  setname(e.target.value);
                }}
                type="text"
                className="text-gray-500 my-2 "
                placeholder="Name"
              />

              <Input
                required
                value={email}
                onChange={(e) => {
                  setemail(e.target.value);
                }}
                type="email"
                className="text-white my-2"
                placeholder="Email"
              />
            </div>
            <div class="form-group">
              {/* <label for="exampleInputPassword1">Message</label> */}
              {/* <textarea
                type="text"
                required
                value={message}
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Message"
                onChange={(e) => {
                  setmessage(e.target.value);
                }}
              /> */}
              <Textarea
                onChange={(e) => {
                  setmessage(e.target.value);
                }}
                className="text-gray-500"
                placeholder="Message"
                type="text"
                required
                value={message}
              />
            </div>

            <div className="grid w-full mt-3 gap-2">
              <Button type="submit pt-2" variant="outline">
                Send Message
              </Button>
            </div>
          </form>
        </Card>
        
        <div className="py-2">
          <p>
            @ 2023 <span>-</span>. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;

//  {/* <label for="exampleInputEmail1">Name</label> */}
//                 {/* <input
//                 type="text"
//                 className="bg-blue-200 form-control p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 id="exampleInputEmail1"
//                 aria-describedby="emailHelp"
//                 placeholder="Name"
//                 required
//                 value={name}
//                 onChange={(e) => {
//                   setname(e.target.value);
//                 }}
//               /> */}

// {/* <label for="exampleInputEmail1">Email</label> */}
//   {/* <input
//   type="email"
//   required
//   value={email}
//   class="form-control"
//   id="exampleInputEmail1"
//   aria-describedby="emailHelp"
//   placeholder="Enter email"
//   onChange={(e) => {
//     setemail(e.target.value);
//   }}
// /> */}
