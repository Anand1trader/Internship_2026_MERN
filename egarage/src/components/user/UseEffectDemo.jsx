import React, { useEffect, useState } from "react";

export const UseEffectDemo = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component Mounted or Count Updated:", count);

    return () => {
      console.log("Cleanup Function Called");
    };

  }, [count]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">useEffect Demo</h1>

      <p className="text-xl mb-4">Count: {count}</p>

      <button
        onClick={() => setCount(count + 1)}
        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Increment
      </button>
    </div>
  );
};