'use client'
import React from 'react';

const ErrorSearch = () => {
  return (
    <div className="flex flex-col items-center justify-center mb-2 h-96">
      <h2 className="text-6xl font-bold text-red-500">Oops!</h2>
      <p className="text-2xl mb-8">
        Sorry, the product you are looking for could not be found.
      </p>
    </div>
  );
};

export default ErrorSearch;
