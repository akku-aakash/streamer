import React from 'react';
// import axios from 'axios';

const Viewvid = (props) => {

    // useEffect(() => {
    //     console.log(props.match.params.vId)
    //     if(props.match.params.vId){
    //         axios
    //           .get("")
    //           .then(res => )
    //           .catch(err => console.error(err));
    //     }
    // }, [])

    return (
        <div>
            <h2>Hello world</h2>
            {
                props.match && props.match.params.vId &&
                <video id='videoPlayer' controls autoPlay>
                    <source src={`${process.env.REACT_APP_API_URL}/video/?id=${props.match.params.vId}`} type="video/mp4" />
                </video>
            }
        </div>
    );
};

export default Viewvid;