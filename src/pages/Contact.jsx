import React from 'react';
import { useState } from 'react';

function Contact() {
  const [inputs, setInputs] = useState({});
  const [errors, setErrors] = useState({ agreement: true, message: true });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === 'message') {
      console.log(value.length);
      value !== ''
        ? setErrors((prev) => ({ ...prev, [name]: false }))
        : setErrors((prev) => ({ ...prev, [name]: true }));
    }
    if (name === 'agreement') {
      setErrors((prev) => ({ ...prev, [name]: !errors.agreement }));
    }
    setInputs((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div
      id="contact"
      className="pt-16 pb-8 px-4 container mx-auto md:pb-24 md:pt-16 md:px-8"
    >
      {/* Header Section */}
      <div className="mb-12 flex flex-col text-gray-900 gap-4 md:gap-5">
        <p className="text-4xl font-semibold">Contact Me</p>
        <p className="text-lg font-normal text-gray-600 md:text-xl">
          {' '}
          Hi there, contact me to ask me about anything you have in mind.
        </p>
      </div>
      {/* Form Section */}
      <form onSubmit={handleSubmit}>
        <div id="form_fields" className="flex flex-col gap-6">
          <div className="flex flex-col gap-6 md:flex-row">
            <div className="flex flex-col items-start gap-[6px] md:w-1/2">
              <label
                htmlFor="first_name"
                className="text-sm font-medium text-gray-700"
              >
                Frist name
              </label>
              <input
                id="first_name"
                name="first_name"
                type="text"
                placeholder="Enter your first name"
                className="input"
                onChange={handleChange}
                value={inputs.first_name || ''}
              />
            </div>
            <div className="flex flex-col items-start gap-[6px] md:w-1/2">
              <label
                htmlFor="last_name"
                className="text-sm font-medium text-gray-700"
              >
                Last name
              </label>
              <input
                id="last_name"
                name="last_name"
                type="text"
                placeholder="Enter your last name"
                className="input"
                onChange={handleChange}
                value={inputs.last_name || ''}
              />
            </div>
          </div>
          <div className="flex flex-col items-start gap-[6px] w-full">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="yourname@email.com"
              className="input"
              onChange={handleChange}
              value={inputs.email || ''}
            />
          </div>
          <div className="flex flex-col items-start gap-[6px] w-full">
            <label
              htmlFor="message"
              className="text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Send me a message and I'll reply you as soon as possible..."
              className="input min-h-[132px] resize-y focus:shadow-custom"
              onChange={handleChange}
              value={inputs.message || ''}
            />
            {errors.message ? (
              <span className="text-sm font-normal  text-[#F83F23]">
                Please enter a message
              </span>
            ) : (
              ''
            )}
          </div>
          <div className="flex gap-3">
            <input
              type="checkbox"
              id="agreement"
              name="agreement"
              className={errors.agreement ? '' : 'focus disabled'}
              onChange={handleChange}
            />

            <label
              htmlFor="agreement"
              className="text-base font-normal text-gray-600"
            >
              You agree to providing your data to Deyo who may contact you.
            </label>
          </div>
        </div>
        <button
          id="btn__submit"
          className="border border-blue-600 mt-8 rounded-lg w-full py-3 px-5 transition-all duration-300 text-white bg-blue-600 hover:bg-blue-700 hover:border-blue-700 disabled:bg-blue-200 disabled:border-blue-200 focus:shadow-custom"
          disabled={Object.values(errors).includes(true)}
        >
          Send message
        </button>
      </form>
    </div>
  );
}

export default Contact;
