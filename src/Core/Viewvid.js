import React from 'react';

const Viewvid = () => {
    return (
        <div>
            <h2>Hello world</h2>
            <video id='videoPlayer' controls autoPlay>
                <source src={`${process.env.REACT_APP_API_URL}/video`} type="video/mp4" />
            </video>
        </div>
    );
};

export default Viewvid;