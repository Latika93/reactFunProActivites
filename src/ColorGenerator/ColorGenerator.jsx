import React, { useState } from 'react';

const ColorGenerator = () => {
    const [color, setColor] = useState("#000000");

    // Function to generate a random color code
    const generateRandomColor = () => {
        const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        setColor(randomColor);
    };

    return (
        <div className='flex items-center justify-center h-screen'>
            <h2 className="text-3xl font-bold mb-4">Random Color Generator</h2>
            <div className="mb-4">
                <div
                    className="w-32 h-32 mx-auto rounded-md"
                    style={{ backgroundColor: color }}
                ></div>
                <p className="mt-2 text-gray-600">{color}</p>
            </div>
            <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                onClick={generateRandomColor}
            >
                Generate Random Color
            </button>
        </div>
    );
};

export default ColorGenerator;
