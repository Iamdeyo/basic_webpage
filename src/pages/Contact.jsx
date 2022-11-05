import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

function Contact() {
  const [inputs, setInputs] = useState({});
  const [errors, setErrors] = useState({ agreement: true });
  const [submitted, setSubmitted] = useState(null);

  const handleError = (name, value, con) => {
    value !== con
      ? setErrors((prev) => ({ ...prev, [name]: false }))
      : setErrors((prev) => ({ ...prev, [name]: true }));
  };

  const validateForm = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    switch (name) {
      case 'first_name':
        handleError(name, value, '');
        break;
      case 'last_name':
        handleError(name, value, '');
        break;
      case 'email':
        handleError(name, value, '');
        break;
      case 'message':
        handleError(name, value, '');
        break;
      case 'agreement':
        setErrors((prev) => ({ ...prev, [name]: !errors.agreement }));
        break;

      default:
        break;
    }
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleChange = (e) => {
    validateForm(e);
    setSubmitted(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const con = e.target.length - 1;
    if (Object.keys(errors).length === con) {
      setSubmitted({ status: true, mgs: 'Sent Sucessfully' });
      setInputs({});
    } else {
      setSubmitted({ status: false, mgs: 'Failed: please fill in all fields' });
    }
  };

  useEffect(() => {
    if (submitted) {
      setTimeout(() => {
        setSubmitted(null);
      }, 5000);
    }
  }, [submitted]);

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
                className={`input ${
                  errors.first_name
                    ? 'border-[#F89687] focus:border-[#F89687]'
                    : 'border-[#D0D5DD] focus:border-blue-300'
                }`}
                onChange={handleChange}
                value={inputs.first_name || ''}
              />
              {errors.first_name && (
                <span className="text-sm font-normal  text-[#F83F23]">
                  Please enter a first name
                </span>
              )}
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
                className={`input ${
                  errors.last_name
                    ? 'border-[#F89687] focus:border-[#F89687]'
                    : 'border-[#D0D5DD] focus:border-blue-300'
                }`}
                onChange={handleChange}
                value={inputs.last_name || ''}
              />
              {errors.last_name && (
                <span className="text-sm font-normal  text-[#F83F23]">
                  Please enter a last name
                </span>
              )}
            </div>
          </div>
          <div className="group flex flex-col items-start gap-[6px] w-full">
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
              className={`input ${
                errors.email
                  ? 'border-[#F89687] focus:border-[#F89687]'
                  : 'border-[#D0D5DD] focus:border-blue-300'
              }`}
              onChange={handleChange}
              value={inputs.email || ''}
            />
            {errors.email && (
              <span className="text-sm font-normal  text-[#F83F23]">
                Please enter a email
              </span>
            )}
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
              className={`input min-h-[132px] resize-y ${
                errors.message
                  ? 'border-[#F89687] focus:border-[#F89687] focus:shadow-customErr'
                  : 'border-[#D0D5DD] focus:shadow-custom  focus:border-blue-300'
              }`}
              onChange={handleChange}
              value={inputs.message || ''}
            />
            {errors.message && (
              <span className="text-sm font-normal  text-[#F83F23]">
                Please enter a message
              </span>
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
      {/* alerts */}
      {submitted && (
        <div
          className={`alert fixed text-center p-3 rounded-lg left-1/2 -translate-x-1/2 text-white font-bold ${
            submitted.status ? 'bg-green-500' : 'bg-red-500'
          }`}
        >
          {' '}
          {submitted.mgs}{' '}
        </div>
      )}
    </div>
  );
}

export default Contact;
