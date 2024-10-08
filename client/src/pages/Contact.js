import React from "react";
import Layout from "../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";

const Contact = () => {
  return (
    <Layout title={"Contact TanZero"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contact.jpg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            For any query and info about product feel free to call anytime we
            are 24X7 available.
          </p>
          <p className="mt-3">
            <BiMailSend /> : tanzerotech@gmail.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : +91 81454 53466
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
