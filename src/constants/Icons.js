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
import linux_path from '../assets/icons/linux/linux-original.svg';
import mac_path from '../assets/icons/apple/apple-original.svg';
import windows_path from '../assets/icons/windows8/windows8-original.svg';
import ruby_path from '../assets/icons/ruby/ruby-original.svg';
import bootstrap_path from '../assets/icons/bootstrap/bootstrap-plain-wordmark.svg';
import tomcat_path from '../assets/icons/tomcat/tomcat-original.svg';
import redux_path from '../assets/icons/redux/redux-original.svg';
import slack_path from '../assets/icons/slack/slack-original-wordmark.svg';
import yarn_path from '../assets/icons/yarn/yarn-original-wordmark.svg';
import npm_path from '../assets/icons/npm/npm-original-wordmark.svg';
import vim_path from '../assets/icons/vim/vim-original.svg';
import oracle_path from '../assets/icons/oracle/oracle-original.svg';
import docker_path from '../assets/icons/docker/docker-original-wordmark.svg';
import vs_path from '../assets/icons/visualstudio/visualstudio-plain.svg';
import eclipse_path from '../assets/eclipse-original.png';

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

export const LINUX = () => {
    return (
        <div style={styles.icon}>
            <img src={linux_path} style={SIZE} />
        </div>
    );
}

export const WINDOWS = () => {
    return (
        <div style={styles.icon}>
            <img src={windows_path} style={SIZE} />
        </div>
    );
}

export const MAC = () => {
    return (
        <div style={styles.icon}>
            <img src={mac_path} style={SIZE} />
        </div>
    );
}

export const BOOTSTRAP = () => {
    return (
        <div style={styles.icon}>
            <img src={bootstrap_path} style={SIZE} />
        </div>
    );
}

export const RUBY = () => {
    return (
        <div style={styles.icon}>
            <img src={ruby_path} style={SIZE} />
        </div>
    );
}

export const TOMCAT = () => {
    return (
        <div style={styles.icon}>
            <img src={tomcat_path} style={SIZE} />
        </div>
    );
}

export const REDUX = () => {
    return (
        <div style={styles.icon}>
            <img src={redux_path} style={SIZE} />
        </div>
    );
}

export const SLACK = () => {
    return (
        <div style={styles.icon}>
            <img src={slack_path} style={SIZE} />
        </div>
    );
}

export const VIM = () => {
    return (
        <div style={styles.icon}>
            <img src={vim_path} style={SIZE} />
        </div>
    );
}

export const YARN = () => {
    return (
        <div style={styles.icon}>
            <img src={yarn_path} style={SIZE} />
        </div>
    );
}

export const NPM = () => {
    return (
        <div style={styles.icon}>
            <img src={npm_path} style={SIZE} />
        </div>
    );
}

export const ORACLE = () => {
    return (
        <div style={styles.icon}>
            <img src={oracle_path} style={SIZE} />
        </div>
    );
}

export const DOCKER = () => {
    return (
        <div style={styles.icon}>
            <img src={docker_path} style={SIZE} />
        </div>
    );
}

export const VS = () => {
    return (
        <div style={styles.icon}>
            <img src={vs_path} style={SIZE} />
        </div>
    );
}

export const ECLIPSE = () => {
    return (
        <div style={styles.icon}>
            <img src={eclipse_path} style={SIZE} />
        </div>
    );
}

const styles = {
    icon: {
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 20,
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 0,
        paddingBottom: 0,
    }
}