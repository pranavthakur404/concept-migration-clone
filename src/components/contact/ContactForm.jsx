import React, { useState } from "react";

const ContactForm = () => {
  //   form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    service: "",
    message: "",
  });

  const handleSubmitData = async () => {
    // try {
    //   if (
    //     !formData.name ||
    //     !formData.email ||
    //     !formData.phoneNumber ||
    //     !formData.service ||
    //     !formData.message
    //   ) {
    //     toast.error("All fields required");
    //     return null;
    //   }
    //   const res = await axios.post(`${api_url}/contact/send`, formData);
    //   console.log(res);
    //   setFormData({
    //     name: "",
    //     email: "",
    //     phoneNumber: "",
    //     service: "",
    //     message: "",
    //   });
    //   toast.success("Thank you, we will get back to you shortly.", {
    //     duration: 2000,
    //   });
    // } catch (err) {
    //   console.log(err);
    //   toast.error(
    //     "Something went wrong please refresh the page and try again.",
    //     { duration: 3000 }
    //   );
    // }
  };

  return (
    <>
      <form
        action="#"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div>
          <div className="w-full text-center">
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={(e) => {
                setFormData((prevData) => {
                  return { ...prevData, [e.target.name]: e.target.value };
                });
              }}
              placeholder="Enter Your Name"
              className="w-full border rounded py-4 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="w-full">
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={(e) => {
                setFormData((prevData) => {
                  return { ...prevData, [e.target.name]: e.target.value };
                });
              }}
              placeholder="Enter Your E-Mail"
              className="w-full border rounded py-4 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="w-full">
            <input
              type="number"
              name="phoneNumber"
              required
              value={formData.phoneNumber}
              onChange={(e) => {
                setFormData((prevData) => {
                  return { ...prevData, [e.target.name]: e.target.value };
                });
              }}
              placeholder="Enter Your Phone Number"
              className="w-full border rounded py-4 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="w-full">
            <select
              name="service"
              id="service"
              required
              value={formData.service}
              onChange={(e) => {
                setFormData((prevData) => {
                  return { ...prevData, [e.target.name]: e.target.value };
                });
              }}
              className="w-full border rounded py-4 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="" hidden>
                Select Service
              </option>
              <option value="Housekeeping and Janitorial Services">
                Housekeeping and Janitorial Services
              </option>
              <option value="Deep Cleaning">Deep Cleaning</option>
              <option value="Pest Control">Pest Control</option>
              <option value="MEP Services">MEP Services</option>
              <option value="STP & WTP">STP & WTP</option>
              <option value="option 3">
                BMS - Automation & Security Services
              </option>
              <option value="Building Repairs">Building Repairs</option>
              <option value="Landscaping Services">Landscaping Services</option>
              <option value="Waste Management">Waste Management</option>
              <option value="Fleet Management Systems">
                Fleet Management Systems
              </option>
              <option value="Staffing Solutions">Staffing Solutions</option>
              <option value="Staffing Solutions">Security Service</option>
            </select>
          </div>
          <div className="w-full">
            <textarea
              name="message"
              id="Message"
              placeholder="Message"
              required
              value={formData.message}
              onChange={(e) => {
                setFormData((prevData) => {
                  return { ...prevData, [e.target.name]: e.target.value };
                });
              }}
              className="w-full h-[100px] border rounded py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>
        <button
          type="button"
          className="primary-bg-color text-white py-2 px-12 mt-5 rounded-tl-lg rounded-tr-md rounded-br-2xl"
          onClick={() => {
            handleSubmitData();
          }}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default ContactForm;
