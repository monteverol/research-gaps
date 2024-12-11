import React from 'react';

const ToggleButtonGroup = ({ isRelevanceActive, setIsRelevanceActive }) => {
    return (
        <div className="flex flex-row gap-4">
            <div
                onClick={() => setIsRelevanceActive(false)}
                className={`${
                    !isRelevanceActive
                        ? "bg-neutral_bg text-primary_bg"
                        : "bg-secondary_bg text-neutral_bg"
                } rounded-xl py-4 text-center w-80 cursor-pointer`}
            >
                <h2 className="text-2xl font-bold">Subcategories</h2>
            </div>
            <div
                onClick={() => setIsRelevanceActive(true)}
                className={`${
                    isRelevanceActive
                        ? "bg-neutral_bg text-primary_bg"
                        : "bg-secondary_bg text-neutral_bg"
                } rounded-xl py-4 text-center w-80 cursor-pointer`}
            >
                <h2 className="text-2xl font-bold">Relevance</h2>
            </div>
        </div>
    );
};

export default ToggleButtonGroup;