import React from 'react';
import angular_path from '../assets/icons/angularjs/angularjs-original.svg';
import react_path from '../assets/icons/react/react-original-wordmark.svg';
import java_path from '../assets/icons/java/java-original-wordmark.svg';
import csharp_path from '../assets/icons/csharp/csharp-original.svg'
import c_path from '../assets/icons/c/c-original.svg';
import cpp_path from '../assets/icons/cplusplus/cplusplus-original.svg';
import javascript_path from '../assets/icons/javascript/javascript-original.svg';
import html_path from '../assets/icons/html5/html5-original-wordmark.svg';
import css_path from '../assets/icons/css3/css3-original-wordmark.svg';
import typescript_path from '../assets/icons/typescript/typescript-original.svg';
import aws_path from '../assets/icons/amazonwebservices/amazonwebservices-original-wordmark.svg';
import git_path from '../assets/icons/git/git-original-wordmark.svg';
import github_path from '../assets/icons/github/github-original-wordmark.svg';

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

export const HTML = () => {
    return (
        <div style={styles.icon}>
            <img src={html_path} style={SIZE} />
        </div>
    );
}

export const CSS = () => {
    return (
        <div style={styles.icon}>
            <img src={css_path} style={SIZE} />
        </div>
    );
}

export const JAVASCRIPT = () => {
    return (
        <div style={styles.icon}>
            <img src={javascript_path} style={SIZE} />
        </div>
    );
}

export const TYPESCRIPT = () => {
    return (
        <div style={styles.icon}>
            <img src={typescript_path} style={SIZE} />
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

export const C = () => {
    return (
        <div style={styles.icon}>
            <img src={c_path} style={SIZE} />
        </div>
    );
}

export const CPP = () => {
    return (
        <div style={styles.icon}>
            <img src={cpp_path} style={SIZE} />
        </div>
    );
}

export const AWS = () => {
    return (
        <div style={styles.icon}>
            <img src={aws_path} style={SIZE} />
        </div>
    );
}

export const GIT = () => {
    return (
        <div style={styles.icon}>
            <img src={git_path} style={SIZE} />
        </div>
    );
}

export const GITHUB = () => {
    return (
        <div style={styles.icon}>
            <img src={github_path} style={SIZE} />
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