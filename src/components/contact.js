import emailjs from "emailjs-com";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const [emailStatus, setEmailStatus] = useState({
    sent: false,
    failed: false,
    visible: false,
  });

  const [formErrors, setFormErrors] = useState({
    fromName: "",
    fromEmail: "",
    message: "",
  });

  const [formValues, setFormValues] = useState({
    fromName: "",
    fromEmail: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update form values
    setFormValues({
      ...formValues,
      [name]: value,
    });

    // Validate fields
    let errors = { ...formErrors };
    switch (name) {
      case "fromName":
        errors.fromName = value.trim() === "" ? "Name is required" : "";
        break;
      case "fromEmail":
        errors.fromEmail = value.trim() === "" ? "Email is required" : "";
        break;
      case "message":
        errors.message = value.trim() === "" ? "Message is required" : "";
        break;
      default:
        break;
    }
    setFormErrors(errors);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Validate all fields before submission
    const errors = {
      fromName: formValues.fromName.trim() === "" ? "Name is required" : "",
      fromEmail: formValues.fromEmail.trim() === "" ? "Email is required" : "",
      message: formValues.message.trim() === "" ? "Message is required" : "",
    };

    setFormErrors(errors);

    if (Object.values(errors).some((error) => error !== "")) {
      return; // Stop submission if there are errors
    }

    emailjs
      .sendForm(
        "service_d6rtipp",
        "template_0n55rgh",
        e.target,
        "CfaqL2GH02i7espVX"
      )
      .then(
        (result) => {
          setEmailStatus({ sent: true, failed: false, visible: true });
          setTimeout(
            () =>
              setEmailStatus((prevState) => ({
                ...prevState,
                visible: false,
              })),
            3000
          );
        },
        (error) => {
          setEmailStatus({ sent: false, failed: true, visible: true });
          setTimeout(
            () =>
              setEmailStatus((prevState) => ({
                ...prevState,
                visible: false,
              })),
            3000
          );
        }
      );
  };

  return (
    <div
      id="contact"
      className="target-section bg-blue-900 text-white py-10 px-4"
    >
      <div className="container mx-auto">
        <div className="max-w-2xl bg-gray-900 rounded-lg shadow-md mx-auto p-8">
          <h2 className="text-3xl font-bold text-center mb-4">Contact</h2>
          <p className="text-center mb-8">
            Feel free to reach out to me for any questions or opportunities at
            <a href="mailto:syedfahed21@gmail.com" className="text-purple-300">
              {" "}
              syedfahed21@gmail.com
            </a>
          </p>

          {emailStatus.visible && emailStatus.sent && (
            <div
              className={`animate-${
                emailStatus.visible ? "fadeIn" : "fadeOut"
              } bg-green-500 text-white px-6 py-3 rounded-md text-center mb-4`}
            >
              Your message has been sent successfully!
            </div>
          )}
          {emailStatus.visible && emailStatus.failed && (
            <div
              className={`animate-${
                emailStatus.visible ? "fadeIn" : "fadeOut"
              } bg-red-500 text-white px-6 py-3 rounded-md text-center mb-4`}
            >
              Failed to send your message. Please try again.
            </div>
          )}
          <form className="space-y-6" onSubmit={sendEmail}>
            <div>
              <label htmlFor="from_name" className="block mb-1">
                Your Name
              </label>
              <input
                type="text"
                id="from_name"
                name="fromName"
                style={{ height: "36px" }}
                placeholder="Name"
                className="w-full pl-2 rounded-md border-transparent bg-blue-800 focus:border-purple-500 focus:ring-0"
                value={formValues.fromName}
                onChange={handleChange}
              />
              {formErrors.fromName && (
                <p className="text-[12px] mt-2 text-red-600">
                  {formErrors.fromName}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="from_email" className="block mb-1">
                Your Email
              </label>
              <input
                type="email"
                id="from_email"
                name="fromEmail"
                placeholder="Email"
                style={{ height: "36px" }}
                className="pl-2 w-full bg-blue-800 rounded-md border-transparent focus:border-purple-500 focus:ring-0"
                value={formValues.fromEmail}
                onChange={handleChange}
              />
              {formErrors.fromEmail && (
                <p className="text-[12px] mt-2 text-red-600">
                  {formErrors.fromEmail}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="message" className="block mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Message"
                className="pl-2 w-full rounded-md bg-blue-800 border-transparent focus:border-purple-500 focus:ring-0"
                value={formValues.message}
                onChange={handleChange}
              ></textarea>
              {formErrors.message && (
                <p className="text-[12px] text-red-600">{formErrors.message}</p>
              )}
            </div>
            <button
              type="submit"
              className="flex items-center justify-center w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-purple-700 bg-purple-300 hover:bg-purple-400"
            >
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              Send Message
            </button>
          </form>
        </div>
      </div>

      <style jsx="true">{`
        #contact {
          scroll-margin-top: 50px; /* Adjust  */
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeOut {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
            transform: translateY(-20px);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
        .animate-fadeOut {
          animation: fadeOut 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Contact;
