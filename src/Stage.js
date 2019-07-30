import React from 'react';

function Stage(props) {
  const onStage = props.participant.filter(item => item.onStage);
  return (
    <div class= 'stage-container'>
      {onStage.map(person => {
        return (
          <div className='onStage' key={props.participant.id}>
            <div>{person.name}</div>
            <img src={person.avatar} alt='avatar' />
          </div>
        )
      })}
    </div>
  );
}

export default Stage;