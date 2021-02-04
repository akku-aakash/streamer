import React from 'react';

const App = () => {

  return (
    <div>
      <h2>Hello world</h2>

      <video id='videoPlayer' controls autoPlay>
      <source src="http://localhost:5000/video" type="video/mp4"/>
      </video>
    </div>
  );
};

export default App;