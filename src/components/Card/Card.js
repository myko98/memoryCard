import React, { useState } from "react";
import "./Card.css";

const Card = ({ img, name, person, people, setPeople, setScore, setReset, reset, description }) => {
  const onClickLogic = (e) => {
    // setPeople([...people,{...person}])

    let newPerson = people.map((x) =>
      x.name === name ? { ...x, clicked: true } : x
    );
    let charName = e.target.alt;

    for (let i = 0; i < people.length; i++) {
      if (people[i].name === charName && people[i].clicked === true) {
        setReset(!reset);
      }
    }

    setPeople(newPerson)
  };

  return (
    <div className={`card ${name}`}>
      <img src={img} alt={name} onClick={onClickLogic} />
      <div className="info">
        <p>{name}</p>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

export default Card;
