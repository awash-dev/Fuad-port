import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { BsArrowRight } from "react-icons/bs";

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vagnd2c",
        "template_lawgpe3",
        formRef.current,
        "RIxnIgu-In-op0S-Z"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          alert(`Failed to send message: ${error.text}`);
        }
      );
  };

  return (
    <div className="dark:bg-gray-700 dark:text-white">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-[100vh] ">
        <div className="flex flex-col w-full max-w-[700px] dark:bg-slate-500 bg-slate-100 p-6 rounded-lg mt-20">
          <h2 className="text-[30px] mb-12">Contact Me</h2>
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
          >
            <div className="flex gap-x-6 w-full">
              <input
                className="input placeholder:text-black dark:bg-slate-400 rounded-lg w-full p-3"
                type="text"
                name="name"
                placeholder="Name"
                required
                aria-label="Name"
              />
              <input
                className="input placeholder:text-black dark:bg-slate-400 rounded-lg w-full p-3"
                type="email"
                name="email"
                placeholder="Type Email"
                required
                aria-label="Email"
              />
            </div>
            <input
              className="input placeholder:text-black dark:bg-slate-400 rounded-lg w-full p-3"
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              pattern="[0-9]*" // Basic pattern for numbers
              aria-label="Phone Number"
            />
            <textarea
              name="message"
              placeholder="Type Message Here!"
              className="textarea h-[100px] placeholder:text-black dark:bg-slate-400 rounded-lg xl:h-[150px] w-full p-3"
              required
              aria-label="Message"
            ></textarea>
            <button
              type="submit"
              className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent p-3 group"
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Send
              </span>
              <BsArrowRight
                className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"
              />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
