"use client";
import React, { useState } from "react";
export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 space-y-6">
      <div>
        <button
          onClick={() => setCount(count + 1)}
          className="px-6 py-2 bg-amber-600 text-white rounded-lg shadow-md hover:bg-amber-700 transition"
        >
          Increment
        </button>
      </div>
      <div>
        <h1 className="text-4xl font-bold text-gray-800">{count}</h1>
      </div>
      <div>
        <button
          onClick={() => setCount(count - 1)}
          className="px-6 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
