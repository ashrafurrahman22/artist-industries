import React, { useEffect, useState } from 'react';
import questionMark from '../../assets/question.png'
import Artist from './Artist';

const HomePage = () => {

    const [images, setImages] = useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setImages(data))
    }, []);

    return (
        <div className='min-h-screen'>
            {/* first section */}
            <h1 className='text-5xl font-bold'>Summer Art Camp! 5 Days of Artist and Painting Monet, Van Gogh, Matisse, & More</h1>
            <div className="grid grid-cols-8 my-4">
            <p>Multi-Day Course</p>

<label for="my-modal-3">
    <img className='w-5 cursor-pointer' src={questionMark} alt="" />
</label>

<input type="checkbox" id="my-modal-3" class="modal-toggle" />
<div class="modal">
  <div class="modal-box relative">
    <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 class="text-lg font-bold">Congratulations random Interner user!</h3>
    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
  </div>
</div>
            </div>

            {/* second Section */}
            <div>
                {
                    images.map(image => <Artist
                    key={image.id}
                    image={image}
                    ></Artist> )
                }
            </div>
        </div>
    );
};

export default HomePage;