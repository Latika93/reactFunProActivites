import React, { useState } from 'react';

const Star = ({ filled, onClick }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 cursor-pointer"
            fill={filled ? "yellow" : "none"}
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={onClick}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 2c.32 0 .638.124.878.364l4.774 4.773 1.96 7.665c.147.573-.054 1.178-.532 1.553-.478.374-1.117.418-1.648.123L12 17.698l-6.433 4.778c-.53.395-1.17.251-1.648-.123-.478-.375-.679-.98-.532-1.553l1.96-7.665 4.774-4.773c.24-.24.557-.364.878-.364zM12 15.022l-3.81 2.834 1.458-5.693L5.466 9.49l5.68-.013L12 3.9l2.853 5.577 5.68.013-4.183 3.673 1.458 5.693L12 15.022z"
            />
        </svg>
    );
};

const StarRating = () => {
    const [rating, setRating] = useState(0);

    const handleClick = (index) => {
        setRating(index + 1);
    };

    return (
        <div className="flex items-center justify-center space-x-2">
            {[...Array(5)].map((_, index) => (
                <Star key={index} filled={index < rating} onClick={() => handleClick(index)} />
            ))}
            <span className="text-gray-600">{rating} out of 5</span>
        </div>
    );
};

export default StarRating;
