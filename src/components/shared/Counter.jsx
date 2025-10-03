import { useState } from "react";

function Counter({ value, onChange }) {

    const addition = () => { onChange(prev => prev + 1) };
    const subtraction = () => { onChange(prev => (prev > 0 ? prev - 1 : 0)) };
    return (
        <div className="flex gap-4 justify-start items-center">
            <button onClick={subtraction} className="p-1 border-1 border-gray-400 cursor-pointer rounded-sm text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
                </svg>

            </button>
            <span>{value}</span>
            <button onClick={addition} className="p-1 border-1 border-gray-400 cursor-pointer rounded-sm text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
            </button>
        </div>
    );
}

export default Counter;