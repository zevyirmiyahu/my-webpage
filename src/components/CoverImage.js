
import React from 'react';
import CoverPhoto from '../assets/desert-cover.jpg';

const CoverImage = () => {
    return (
        // <div style={styles.image}>
        //     <img src={CoverPhoto} style={{height: '50%'}} alt='Desert-Photo' />
        // </div>
        <body style={{backgroundImage: CoverPhoto}}></body>
    );
}

export default CoverImage;

const styles= {
    image: {
        zIndex: -1,
        position: 'absolute',
        top: 0,
        left: 0,
    }
}