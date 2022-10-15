import React from "react";

function Contact() {
  return (
    <>
      <div className="w-8/12 m-auto py-10 pb-10">
        <h1 className="text-3xl px-20 opacity-4 shadow-md text-purple-900 inline-block">
          Contact Us
        </h1>
      </div>
      <div className=" text-3xl text-center w-8/12 m-auto mb-10 h-auto  ">
        <h1 className="shadow-md text-purple-900 inline-block text-2xl mt-4 mb-3">Email</h1>
        <h6 className="text-lg pt-2 text-purple-700 mb-4">hello@soal.io</h6>
        <hr />
        <h1 className="pt-3 text-2xl shadow-md text-purple-900 inline-block mt-6 mb-3">Address</h1>
        <p className="text-2xl pt-2 text-purple-900">Hyderabad Campus </p>
        <p className="text-lg text-purple-700">School of Accelerated Learning</p>
        <p className="text-lg text-purple-700">
          Innov8, Sreshta Marvel, P Janardhan Reddy Nagar, Gachibowli,
        </p>
        <p className="text-lg text-purple-700 mb-4">Hyderabad, Telangana 500081</p>
        <hr />
        <h2 className="text-2xl pt-4 text-purple-900 mt-6">Mumbai Campus</h2>
        <p className="text-lg text-purple-700">School of Accelerated Learning</p>
        <p className="text-lg text-purple-700">Innov8 Kurla, Agastya Piramal Corporate Park,</p>
        <p className="text-lg text-purple-700">LBS Marg, Kurla, Mumbai- 400070</p>
      </div>
    </>
  );
}

export default Contact;
