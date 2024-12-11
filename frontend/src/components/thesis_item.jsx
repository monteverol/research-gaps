import React from 'react';

const ThesisItem = ({ title, author, date }) => {
    return(
        <div className="w-full flex flex-row justify-between items-center border-b-2 border-primary_bg p-8">
            <div className="w-[50%]">
                <h1 className="text-secondary_bg text-4xl font-bold"> {title} </h1>
            </div>
            <div className="w-[30%]">
                <h1 className="text-secondary_bg text-4xl font-bold"> {author} </h1>
            </div>
            <div className="w-[20%]">
                <h1 className="text-secondary_bg text-4xl font-bold"> {date} </h1>
            </div>
        </div>
    );
}

export default ThesisItem;