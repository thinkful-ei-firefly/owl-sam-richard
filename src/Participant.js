import React from 'react';


//props.store -> array of objects
function Participant(props) {
  const peopleIn = props.store.filter(person => person.inSession);
  const peopleOut = props.store.filter(person => !person.inSession);
  const people = peopleIn.concat(peopleOut);
  const peopleList = people.map(function(person) {
    const dot = `dot ${person.inSession ? 'green-dot' : 'grey-dot'}`
    return (
    <div className='person'>
      <img src={person.avatar} alt='avatar' />
      <div>{person.name}</div>
      <div className='status'>
        <span className={dot}></span>
        <div>{person.inSession ? (person.onStage ? 'on stage' : 'in session') : 'left session'}</div>
      </div>
    </div>
    )
  })

  return (
    peopleList
  );
}

export default Participant;