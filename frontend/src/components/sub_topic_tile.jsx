import React from 'react';
import { useNavigate } from 'react-router-dom';

const SubTopicTile = ({ name, percentage, year, isRelevanceActive }) => {
    const navigate = useNavigate(); // Initialize the navigate function
    const currentYear = new Date().getFullYear();

    const bgColorClass = isRelevanceActive
        ? currentYear - year > 5
            ? "bg-accent_dark"
            : "bg-neutral_bg"
        : "bg-neutral_bg";

    const handleClick = () => {
        navigate('/sub-topic'); // subjected to change
    };

    return (
        <div
            onClick={handleClick}
            style={{ height: `${percentage}%` }}
            className={`${bgColorClass} hover:bg-accent_light w-40 p-4 rounded-xl cursor-pointer group flex flex-col justify-between items-center`}
        >
            <h2
                className={`${
                    bgColorClass !== "bg-accent_dark"
                        ? "text-primary_bg"
                        : "text-neutral_bg"
                } w-full text-2xl text-center font-bold group-hover:underline group-hover:text-neutral_bg`}
            >
                {!isRelevanceActive ? name : year}
            </h2>
            <h2 className="text-secondary_bg text-2xl font-bold">{percentage}%</h2>
        </div>
    );
};

export default SubTopicTile;