import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    education: "",
    jobTitle: "",
    countryOfResidence: "",
    countryApplyingFor: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    // You can add your form submission logic here
  };
  return (
    <div
      className="max-w-md mt-[30px] md:mt-[0px] mx-auto p-6 serviceForm border border-gray-300 rounded-2xl overflow-hidden"
      style={{
        backgroundImage:
          "url(https://conceptmigration.com/wp-content/uploads/2021/10/b36b8cfdf3d9016e2da450e2eb43ed74-scaled.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative z-[1]">
        <h2 className="text-[27px] font-semibold mb-6 text-white">
          Free Assessment
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-white ">
              Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-1 border-b bg-transparent outline-none text-white border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-white ">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-1 border-b bg-transparent outline-none text-white border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-white ">
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-3 py-1 border-b bg-transparent outline-none text-white border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-white ">
              Education
            </label>
            <input
              type="text"
              name="education"
              value={formData.education}
              onChange={handleChange}
              className="w-full px-3 py-1 border-b bg-transparent outline-none text-white border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-white ">
              Job Title
            </label>
            <input
              type="text"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
              className="w-full px-3 py-1 border-b bg-transparent outline-none text-white border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-white ">
              Country of Residence
            </label>
            <input
              type="text"
              name="countryOfResidence"
              value={formData.countryOfResidence}
              onChange={handleChange}
              className="w-full px-3 py-1 border-b bg-transparent outline-none text-white border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-white ">
              Country Applying For
            </label>
            <input
              type="text"
              name="countryApplyingFor"
              value={formData.countryApplyingFor}
              onChange={handleChange}
              className="w-full px-3 py-1 border-b bg-transparent outline-none text-white border-gray-300 rounded-md"
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2  text-[12px] primary-text-color bg-white font-[500] rounded-md "
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
