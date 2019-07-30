import React from 'react';
import Participant from './Participant';
import ChatLog from './ChatLog';
import Stage from './Stage';
import './App.css';

function App({store:{participant, chatLog}}) {

  return (
    <div>
      <div className='Participants'>
      <Participant key='1' participant={participant} />
      </div>
      <div className='Chat'>
        {chatLog.map((chat, id) => {
          console.log('something here');
          let result = ( <ChatLog
            key={id} 
            type={chat.type}
            avatar={participant.find(item =>item.id===chat.participantId).avatar}
            name={participant.find(item =>item.id===chat.participantId).name}
            message={chat.message}
            time={chat.time}
            timestamp={chat.timestamp}
        /> )
        console.log(result);
        return result; 
        })}
      </div>
      <Stage participant={participant} />
    </div>
  );
}

export default App;