import React, { useState } from 'react';
import { TiArrowLeftThick } from "react-icons/ti";
import { Link } from 'react-router-dom';
import ToggleButtonGroup from '../components/toggle_button';
import SubTopicTile from '../components/sub_topic_tile';

const TopicPage = ({ topic }) => {
    const [isRelevanceActive, setIsRelevanceActive] = useState(false);

    return (
        <div className="h-screen w-screen relative flex flex-col bg-secondary_bg">
            {/* NAVIGATION */}
            <div className="w-full p-8 flex flex-row items-center justify-between bg-primary_bg">
                {/* LEFT */}
                <div className="flex flex-row gap-8 items-center">
                    <Link to="/">
                        <TiArrowLeftThick
                            size={60}
                            color="var(--neutral-bg)"
                            className="cursor-pointer"
                        />
                    </Link>
                    {/* TOGGLE BUTTONS */}
                    <ToggleButtonGroup
                        isRelevanceActive={isRelevanceActive}
                        setIsRelevanceActive={setIsRelevanceActive}
                    />
                </div>
                {/* RIGHT */}
                <h6 className="text-neutral_bg text-4xl font-bold">
                    Scholars<span className="text-accent_light">Gap</span>
                </h6>
            </div>

            {/* BODY CONTENT */}
            <div className="h-full w-full relative p-8">
                {/* TILES */}
                <div className="h-full w-full flex flex-row gap-8 items-end">
                    <SubTopicTile name="Sub topic" percentage={15} year={2024} isRelevanceActive={isRelevanceActive} />
                    <SubTopicTile name="Sub topic" percentage={25} year={2023} isRelevanceActive={isRelevanceActive} />
                    <SubTopicTile name="Sub topic" percentage={35} year={2022} isRelevanceActive={isRelevanceActive} />
                    <SubTopicTile name="Sub topic" percentage={45} year={2021} isRelevanceActive={isRelevanceActive} />
                    <SubTopicTile name="Sub topic" percentage={55} year={2020} isRelevanceActive={isRelevanceActive} />
                    <SubTopicTile name="Sub topic" percentage={65} year={2019} isRelevanceActive={isRelevanceActive} />
                    <SubTopicTile name="Sub topic" percentage={75} year={2018} isRelevanceActive={isRelevanceActive} />
                    <SubTopicTile name="Sub topic" percentage={85} year={2017} isRelevanceActive={isRelevanceActive} />
                </div>
                {/* FLOAT */}
                <div className="absolute top-8 left-8 flex flex-col gap-8">
                    <h1 className="text-neutral_bg font-bold text-8xl">Computer Science</h1>
                    <h4 className="text-neutral_bg font-bold text-2xl underline italic">Select a column to view library</h4>
                </div>
            </div>
        </div>
    );
};

export default TopicPage;
