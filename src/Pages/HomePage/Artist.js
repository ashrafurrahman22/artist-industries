import React from 'react';

const Artist = ({image}) => {
    const {name, pic, post, img, img2, img3} = image;
    return (
        <div className='grid grid-cols-2 gap-40'>
            <div>
                <p className='font-semibold'>{post}</p>
                <div className='my-4 flex items-center gap-5'>
                    <img className='rounded-2xl w-10' src={pic} alt="" />
                    <h2 className='font-bold'>{name}</h2>
                </div>
                <div className='flex items-center gap-2'>
                    <img className='w-5' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Golden_star.svg/1070px-Golden_star.svg.png" alt="" />
                    <img className='w-5' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Golden_star.svg/1070px-Golden_star.svg.png" alt="" />
                    <img className='w-5' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Golden_star.svg/1070px-Golden_star.svg.png" alt="" />
                    <img className='w-5' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Golden_star.svg/1070px-Golden_star.svg.png" alt="" />
                    <img className='w-5' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Golden_star.svg/1070px-Golden_star.svg.png" alt="" />
                    <p>467 reviews for this teacher</p>
                </div>
                <div className='flex items-center gap-2 my-3'>
                    <img className='w-5' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Golden_star.svg/1070px-Golden_star.svg.png" alt="" />
                    <img className='w-5' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Golden_star.svg/1070px-Golden_star.svg.png" alt="" />
                    <img className='w-5' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Golden_star.svg/1070px-Golden_star.svg.png" alt="" />
                    <img className='w-5' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Golden_star.svg/1070px-Golden_star.svg.png" alt="" />
                    <img className='w-5' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Golden_star.svg/1070px-Golden_star.svg.png" alt="" />
                    <p>5 reviews for this class</p>
                </div>
                <div>
                    <h4 className="text-xl font-semibold">Completed by 21 learners</h4>
                </div>
                <div className='flex gap-6 my-3'>
                <button class="btn btn-primary">See class schedule ></button>
                <button class="btn btn-info">
                    <img className='w-4 mr-3' src="https://www.freeiconspng.com/thumbs/heart-icon/valentine-heart-icon-6.png" alt="" />
                    Save</button>
                <button class="btn btn-info">
                    <img className='w-4 mr-2' src="https://www.freeiconspng.com/thumbs/share-icon/share-icon-png-26.png" alt="" />
                    Share</button>
                </div>

            </div>
                <div className='flex gap-1'>
                    <img className='w-40' src={img} alt="" />
                <div className='flex flex-col gap-1'>
                    <img className='w-40'  src={img2} alt="" />
                    <img className='w-40' src={img3} alt="" />
                </div>
                </div>
        </div>
    );
};

export default Artist;