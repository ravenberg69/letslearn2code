import React, {useEffect} from 'react';

const PersonenListe = ({personen}) => {
  useEffect(() => {
    console.log('test');
  })

  return (
    <ul>
      { personen ?
          personen.map((person) => {
          if(person.alter) {
            return <li key={person.name}>Name: {person.name} Alter: {person.alter}</li>
          }
          return;
        })
        : 'Keine Personen'
      }
    </ul>
  )
}

export default PersonenListe;