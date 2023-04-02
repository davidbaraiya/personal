import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import { toast } from "react-toastify";

const ContactForm = () => {
  const [isloading, setIsLoading] = useState(false);
  const services_id = process.env.REACT_APP_SERVICE_ID;
  const template_id = process.env.REACT_APP_TEMPLATE_ID;
  const public_key = process.env.REACT_APP_PUBLIC_KEY;

  const setLoadTime = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const { user_name, user_email, message } = e.target.elements;

    if (!user_name.value || !user_email.value || !message.value) {
      toast.error("Please fill in all fields", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    setIsLoading(true);

    emailjs.sendForm(services_id, template_id, form.current, public_key).then(
      (result) => {
        console.log(result.text);
        toast.success("your message sent !", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setLoadTime();
        user_name.value = user_email.value = message.value = "";
      },
      (error) => {
        console.log(error.text);
        toast.error("something went wrong", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setLoadTime();
      }
    );
  };

  return (
    <>
      <Form ref={form} onSubmit={sendEmail} data-aos="fade-down">
        <div className="row g-4">
          <div className="col-md-6 col-12">
            <input
              name="user_name"
              type="text"
              className="form-control shadow-none"
              required=""
              placeholder="Name"
            />
          </div>
          <div className="col-md-6 col-12">
            <input
              name="user_email"
              type="email"
              className="form-control shadow-none"
              required=""
              placeholder="Email"
            />
          </div>
          <div className="col-12">
            <textarea
              name="message"
              className="form-control shadow-none"
              rows="5"
              required=""
              placeholder="Tell us more about your needs........"
            ></textarea>
          </div>
          <div className="col-12">
            <input
              type="submit"
              value="Send Message"
              className="main-btn"
              disabled={isloading ? true : false}
            />
          </div>
        </div>
      </Form>
    </>
  );
};

export default ContactForm;

const Form = styled.form`
  input,
  textarea {
    text-transform: initial;
  }
  input[type="submit"]:disabled {
    opacity: 0.3;
  }
`;
