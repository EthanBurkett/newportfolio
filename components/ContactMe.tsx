import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

type Props = {};

const ContactMe = (props: Props) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const subject = e.target[2].value;
    const message = e.target[3].value;
    window.location.href = `mailto:ethan.burkett@outlook.com?subject=${subject}&body=Hi, my name is ${name} (${email}). ${message}`;
  };

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl hidden md:inline-flex">
        Contact
      </h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          I have got just what you need.{" "}
          <span className="decoration-[#F7AB0A]/50 underline">
            Let&lsquo;s talk.
          </span>
        </h4>

        <div className="space-y-10">
          {/* <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">+1 (234) 567-8901</p>
          </div> */}
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">ethan.burkett@outlook.com</p>
          </div>
          {/* <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">123 Not My Address</p>
          </div> */}
        </div>

        <form
          onSubmit={(e) => handleSubmit(e)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex flex-col md:flex-row space-y-2 md:space-x-2 md:space-y-0">
            <input
              placeholder="Name"
              name="name"
              className="contactInput"
              type="text"
            />
            <input
              placeholder="E-Mail"
              name="email"
              className="contactInput"
              type="email"
            />
          </div>

          <input
            name="subject"
            placeholder="Subject"
            className="contactInput"
            type="text"
          />
          <textarea
            name="message"
            placeholder="Message"
            className="contactInput"
          />
          <button
            type="submit"
            className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
