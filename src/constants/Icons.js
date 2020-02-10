import React from 'react';
import angular_path from '../assets/icons/angularjs/angularjs-original.svg';
import react_path from '../assets/icons/react/react-original-wordmark.svg';
import java_path from '../assets/icons/java/java-original-wordmark.svg';
import csharp_path from '../assets/icons/csharp/csharp-original.svg'


const SIZE = { width: 50, height: 50 };

export const REACT = () => {
    return (
        <div style={styles.icon}>
            <img src={react_path} style={SIZE} />
        </div>
    );
}

export const ANGULAR = () => {
    return (
        <div style={styles.icon}>
            <img src={angular_path} style={SIZE} />
        </div>
    );
}

// export const SPRING = () => {
//     return (
//         <div style={styles.icon}>
//             <img src={spring_path} style={SIZE} />
//         </div>
//     );
// }

export const JAVA = () => {
    return (
        <div style={styles.icon}>
            <img src={java_path} style={SIZE} />
        </div>
    );
}

export const CSHAP = () => {
    return (
        <div style={styles.icon}>
            <img src={csharp_path} style={SIZE} />
        </div>
    );
}


const styles = {
    icon: {
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 5,
        paddingBottom: 5,
    }
}