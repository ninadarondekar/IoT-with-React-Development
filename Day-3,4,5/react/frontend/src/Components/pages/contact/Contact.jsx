import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-cyan-50 flex justify-center items-center">

      <form className="bg-white p-8 rounded-lg shadow-lg w-96">

        <h1 className="text-3xl font-bold text-cyan-700 text-center mb-6">
          Form
        </h1>

        {/* Name */}
        <div className="mb-4">
          <label className="block mb-1 font-semibold">
            Name
          </label>

          <input
            type="text"
            placeholder="Enter your name"
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block mb-1 font-semibold">
            Email
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Contact */}
        <div className="mb-4">
          <label className="block mb-1 font-semibold">
            Contact
          </label>

          <input
            type="tel"
            placeholder="Enter your contact number"
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block mb-1 font-semibold">
            Password
          </label>

          <input
            type="password"
            placeholder="Enter your password"
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Confirm Password */}
        <div className="mb-6">
          <label className="block mb-1 font-semibold">
            Confirm Password
          </label>

          <input
            type="password"
            placeholder="Confirm your password"
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-cyan-700 text-white p-2 rounded hover:bg-cyan-800"
        >
          Submit
        </button>

      </form>

    </div>
  );
};

export default Contact;