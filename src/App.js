import "./App.css";
import Card from "./components/Card/Card";
import data from "./data";
import React, { useState, useEffect } from "react";

function App() {
  const [people, setPeople] = useState(data);
  const [score, setScore] = useState(0);
  const [reset, setReset] = useState(false);
  const [highscore, setHighscore] = useState(0);

  let counter = 0

  useEffect(() => {
    
    people.map((x) => (x.clicked === true ? counter++ : counter));
    
    if (reset === true) {
      if (score > highscore) {
        setHighscore(score);
      }
      setPeople(data)
      setReset(false)
    } 

    setScore(counter);

    

    shufflePeople(people);
  }, [people]);



  //Fischer Yates Algorithm
  const shufflePeople = (people) => {
    for (let i = people.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = people[i];
      people[i] = people[j];
      people[j] = temp;
    }
    return people;
  };

  return (
    <div className="App">
      <div className="header">
        <div className="scores">
          <h1>Max Score</h1>
          <p>8</p>
        </div>
        <div className="scores">
          <h1>High Score</h1>
          <p>{highscore}</p>
        </div>
        <div className="scores">
          <h1>Score</h1>
          <p>{score}</p>
        </div>
      </div>

      <div className="cards">
        {people.map((person) => (
          <Card
            name={person.name}
            img={person.img}
            person={person}
            people={people}
            setPeople={setPeople}
            setScore={setScore}
            setReset={setReset}
            reset={reset}
            description={person.description}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
