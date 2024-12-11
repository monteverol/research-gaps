import React from 'react';
import { Link } from 'react-router-dom';
import { TiArrowLeftThick } from "react-icons/ti";
import ThesisItem from '../components/thesis_item';

const SubTopicPage = ({ name }) => {
    return(
        <div className="w-screen bg-neutral_bg">
            {/* HEADER */}
            <div className="w-full bg-accent_light p-8 flex flex-row justify-between items-center">
                <div className="flex flex-row gap-8 items-center">
                    <Link to="/topic">
                        <TiArrowLeftThick
                            size={60}
                            color="var(--neutral-bg)"
                            className="cursor-pointer"
                        />
                    </Link>
                    <h1 className="text-neutral_bg text-6xl font-bold">Internet of Things</h1>
                </div>
                <div className="">
                    <h6 className="text-neutral_bg text-4xl font-bold">
                        Scholars<span className="text-secondary_bg">Gap</span>
                    </h6>
                </div>
            </div>
            {/* TABLE */}
            <div className="h-full w-full">
                {/* HEADER */}
                <div className="pl-20 py-4 flex flex-row items-center justify-between bg-[#C45F75]">
                    <h3 className="text-neutral_bg font-bold text-2xl w-[50%]">Thesis Title</h3>
                    <h3 className="text-neutral_bg font-bold text-2xl w-[30%]">Author/s</h3>
                    <h3 className="text-neutral_bg font-bold text-2xl w-[20%]">Date Published</h3>
                </div>
                {/* ITEMS */}
                <div className="flex flex-col px-8">
                    <ThesisItem title="Lemmatization of Formal Tagalog Words using Fuzzy Matching Algorithms" author="Author 1" date="March 2023" />
                    <ThesisItem title="Support Vector Machine-Based Bidirectional Long Short-Term Memory to Detect Early Signs of Depression in Social Media" author="Author 1" date="March 2023" />
                    <ThesisItem title="Cebu, Where the Heart Sings: Leveraging Sentiment-Driven Analysis for a Recommendation System for Tourism in Cebu using XLM-RoBERTa and CNN + BiLSTM" author="Author 1" date="March 2023" />
                </div>
            </div>
        </div>
    );
}

export default SubTopicPage;