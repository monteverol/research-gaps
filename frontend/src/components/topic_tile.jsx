import React from 'react';
import { Link } from 'react-router-dom';

const TopicTile = ({ name, percentage }) => {
    const tileWidth = `${percentage}%`;
    
    return (
        <Link to="/topic">
            <div
                style={{ width: tileWidth }}
                className="bg-secondary_bg hover:bg-accent_light p-4 rounded-xl cursor-pointer group"
            >
                <h2 className="text-neutral_bg text-2xl font-bold group-hover:underline">
                    {name}
                </h2>
            </div>
        </Link>
    );
};

export default TopicTile;