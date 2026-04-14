import React, { useState } from "react";

const TicketForm = ({ addTicket }) => {
  const initialState = {
    customerName: "",
    phone: "",
    rqc: "Request",
    title: "",
    description: "",
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.customerName ||
      !formData.phone ||
      !formData.title ||
      !formData.description
    )
      return;

    addTicket(formData);
    setFormData(initialState);
  };

  return (
    <div className="bg-white border border-orange-200 shadow-lg rounded-2xl p-8 w-full max-w-xl">
      <h2 className="text-2xl font-bold text-center text-orange-600 mb-6">
        Ticket Management System
      </h2>
     <label htmlFor="customerName" className="block mb-1 font-medium"> Customer Name </label>
      <form onSubmit={handleSubmit} className="space-y-4 text-black">
        <input
          name="customer Name"
          value={formData.customerName}
          onChange={handleChange}
          placeholder="Enter customer name"
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400"
        />
       <label htmlFor="phone" className="block mb-1 font-medium"> Phone Number </label>
        <input
          name="phone number"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Enter phone number"
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400"
        />
       <label htmlFor="rqc" className="block mb-1 font-medium"> RQC Type </label>
        <select
          name=" rqc"
          value={formData.rqc}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400"
        >
          <option value="Request">Request</option>
          <option value="Complaint">Complaint</option>
          <option value="Query">Query</option>
        </select>
       <label htmlFor="title" className="block mb-1 font-medium"> Title </label>
        <input
          name=" title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Enter title"
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400"
        />
        <label htmlFor="description" className="block mb-1 font-medium"> Description </label>
        <textarea
          name=" description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Enter description"
          rows={3}
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400"
        />

        <button className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600">
          Create Ticket
        </button>
      </form>
    </div>
  );
};

export default TicketForm;