import React from 'react';
import TopicTile from '../components/topic_tile';

const HomePage = () => {
    return(
        <div className="w-screen bg-primary_bg relative p-8">
            {/* TOPICS */}
            <div className="flex flex-col w-full h-full gap-8">
                <TopicTile name="Topic 1" percentage={22}/>
                <TopicTile name="Topic 2" percentage={25}/>
                <TopicTile name="Topic 3" percentage={35}/>
                <TopicTile name="Topic 4" percentage={39}/>
                <TopicTile name="Topic 5" percentage={43}/>
                <TopicTile name="Topic 6" percentage={47}/>
                <TopicTile name="Topic 7" percentage={48}/>
                <TopicTile name="Topic 8" percentage={53}/>
                <TopicTile name="Topic 9" percentage={56}/>
                <TopicTile name="Topic 10" percentage={57}/>
                <TopicTile name="Topic 11" percentage={59}/>
                <TopicTile name="Topic 12" percentage={63}/>
                <TopicTile name="Topic 13" percentage={65}/>
                <TopicTile name="Topic 14" percentage={67}/>
            </div>

            {/* LOGO */}
            <div className="fixed top-8 right-8">
                <h6 className="text-neutral_bg text-2xl font-bold">Scholars<span className="text-accent_light">Gap</span></h6>
            </div>

            {/* HEADER */}
            <div className="fixed top-[40%] right-8 -translate-y-1/2 w-1/2 flex flex-col gap-16">
                <h1 className="text-neutral_bg text-8xl font-bold text-right">Finding your research <span className="text-accent_light">gap</span>?</h1>
                <h3 className="text-neutral_bg text-2xl font-bold italic underline text-right">Click a category</h3>
            </div>
        </div>
    );
}

export default HomePage;