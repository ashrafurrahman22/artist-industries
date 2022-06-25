import React from 'react';
import questionMark from '../../assets/question.png'

const HomePage = () => {
    return (
        <div className='min-h-screen'>
            {/* first section */}
            <h1 className='text-5xl font-bold'>Summer Art Camp! 5 Days of Artist and Painting Monet, Van Gogh, Matisse, & More</h1>
            <div className="grid grid-cols-8 my-4">
            <p>Multi-Day Course</p>
            <img className='w-5' src={questionMark} alt="" />
            </div>

            {/* second Section */}
            <div>
                
            </div>
        </div>
    );
};

export default HomePage;