import React from 'react';

const InputBox = ({ label, type, id, placeholder, value, onChange }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-900 font-medium mb-2" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-4 focus:ring-purple-500 focus:border-purple-500 transition duration-300 hover:bg-gray-100"
      />
    </div>
  );
};

export default InputBox;
