import React, { useState } from 'react'

interface IPeople {
  id: number;
  name: string;
  desc: string;
}

const people: IPeople[] = [
  {
    id: 1,
    name: 'hong',
    desc: 'hello',
  },
  {
    id: 2,
    name: 'park',
    desc: 'hi',
  }
];

interface IPeopleObj {
  [key: string]: any
}

const peopleObj: IPeopleObj = {
  hong: {
    id: 1,
    name: 'hong',
    desc: 'hello',
  },
  park: {
    id: 2,
    name: 'park',
    desc: 'hi',
  }
}

const TempComp = () => {
  const [selected, setSelected] = useState<string>('');

  return (
    <div>
      {Object.values(peopleObj).map((person: IPeople, index: number) => {
        return (
          <button key={index} style={{padding: '6px 10px'}} onClick={() => setSelected(person.name)}>{index + 1}</button>
        )
      })}
      {selected && <div>{peopleObj[selected].name}</div>}
    </div>
  )
}

export default TempComp