import React from 'react';

function ChatLog({type, avatar, name, message, time, timestamp}) {
    console.log(type);
    if (type==='message') {
        return (
            <div className='message'>
                <img src={avatar} alt="avatar"/>
                <span>{name}</span>
                {/* <span>{new Date(timestamp)}</span> error needs fixing*/}
                <p>{message}</p>
            </div>
    )}
    else if (type === 'thumbs-down') {
        return (
        <div>
            <span>{name} gave a thumbs down <i className="far fa-thumbs-down"></i></span>
        </div>)
    }
    else if (type === 'thumbs-up') {
        return (
        <div>
            <span>{name} gave a thumbs up <i className="far fa-thumbs-up"></i></span>
        </div>)
    }
    else if (type === 'raise-hand') {
        return (
        <div>
            <span>{name} raised their hand</span>
        </div>)
    }
    else if (type === 'clap') {
        return (
        <div>
            <span>{name} clapped</span>
        </div>)
    }
    else if (type === 'leave') {
        return (
        <div>
            <span>{name} left</span>
        </div>)
    }
    else if (type === 'join') {
        return (
        <div>
            <span>{name} joined</span>
        </div>)
    }
    else if (type === 'join-stage') {
        return (
        <div>
            <span>{name} joined the stage</span>
        </div>)
    }
    else if (type === 'leave-stage') {
        return (
        <div>
            <span>{name} left the stage</span>
        </div>)
    }
}

export default ChatLog;