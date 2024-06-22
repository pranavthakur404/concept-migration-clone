import React, { useState } from "react";

const ContactModal = ({ setIsModalOpen }) => {
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
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      <div className="bg-white p-2 rounded-lg shadow-lg relative">
        <button
          className="absolute top-0 right-0 mt-4 mr-4 text-gray-500 hover:text-gray-700 text-[35px]"
          onClick={() => {
            setIsModalOpen(false);
          }}
        >
          &times;
        </button>
        <div className="max-w-md mx-auto p-3 border border-gray-300 rounded-lg mt-10">
          <h2 className="text-sm font-semibold mb-3 primary-text-color">
            ---- Get In Touch
          </h2>
          <h2 className="text-2xl font-semibold mb-6 primary-text-color">
            Request Free Consultation
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="flex justify-between gap-5">
              <div>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1 primary-text-color">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-1 border-b border-gray-300 rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1 primary-text-color">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-1 border-b border-gray-300 rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1 primary-text-color">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-1 border-b border-gray-300 rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1 primary-text-color">
                    Education
                  </label>
                  <input
                    type="text"
                    name="education"
                    value={formData.education}
                    onChange={handleChange}
                    className="w-full px-3 py-1 border-b border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1 primary-text-color">
                    Job Title
                  </label>
                  <input
                    type="text"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleChange}
                    className="w-full px-3 py-1 border-b border-gray-300 rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1 primary-text-color">
                    Country of Residence
                  </label>
                  <input
                    type="text"
                    name="countryOfResidence"
                    value={formData.countryOfResidence}
                    onChange={handleChange}
                    className="w-full px-3 py-1 border-b border-gray-300 rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1 primary-text-color">
                    Country Applying For
                  </label>
                  <input
                    type="text"
                    name="countryApplyingFor"
                    value={formData.countryApplyingFor}
                    onChange={handleChange}
                    className="w-full px-3 py-1 border-b border-gray-300 rounded-md"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="px-4 py-2 primary-bg-color text-[12px] text-white font-[500] rounded-md hover:bg-blue-600"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
