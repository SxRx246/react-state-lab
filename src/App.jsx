import { useState } from "react";
import character1 from "./assets/character1.png"
import character2 from "./assets/character2.png"
import character3 from "./assets/character3.png"
import character4 from "./assets/character4.png"
import character5 from "./assets/character5.png"
import character6 from "./assets/character6.png"
import character7 from "./assets/character7.png"
import character8 from "./assets/character8.png"
import character9 from "./assets/character9.png"
import character10 from "./assets/character10.png"
import "./App.css"


const App = () => {

  const [team, setTeam] = useState([])
  const [money, setMoney] = useState(100)
  const [zombieFighters, setZombieFighters] = useState(
    [
      {
        id: 1,
        name: 'Survivor',
        price: 12,
        strength: 6,
        agility: 4,
        img: character1
      },
      {
        id: 2,
        name: 'Scavenger',
        price: 10,
        strength: 5,
        agility: 5,
        img: character3
      },
      {
        id: 3,
        name: 'Shadow',
        price: 18,
        strength: 7,
        agility: 8,
        img: character10
      },
      {
        id: 4,
        name: 'Tracker',
        price: 14,
        strength: 7,
        agility: 6,
        img: character5
      },
      {
        id: 5,
        name: 'Sharpshooter',
        price: 20,
        strength: 6,
        agility: 8,
        img: character4
      },
      {
        id: 6,
        name: 'Medic',
        price: 15,
        strength: 5,
        agility: 7,
        img: character6
      },
      {
        id: 7,
        name: 'Engineer',
        price: 16,
        strength: 6,
        agility: 5,
        img: character8
      },
      {
        id: 8,
        name: 'Brawler',
        price: 11,
        strength: 8,
        agility: 3,
        img: character7
      },
      {
        id: 9,
        name: 'Infiltrator',
        price: 17,
        strength: 5,
        agility: 9,
        img: character9
      },
      {
        id: 10,
        name: 'Leader',
        price: 22,
        strength: 7,
        agility: 6,
        img: character2
      }
    ]
  )


  const [message, setMessage] = useState(""); 

  const handleAddFighter = (fighter) => {
    if (money > fighter.price) {
      setTeam([...team, fighter])
      const newzombieFighters = zombieFighters.filter((zombieFighter) => zombieFighter.id !== fighter.id)
      setZombieFighters(newzombieFighters)
      const updatedMoney = money - fighter.price
      setMoney(updatedMoney)
      setMessage("")
    }
    else {
      setMessage("Not enough money")
    }

  }
  
  const handleRemoveFighter = (fighter) => {
    const updatedTeam = team.filter((teamFighter) => teamFighter.id !== fighter.id)
    setTeam(updatedTeam)
    const updatedMoney = money + fighter.price
    setMoney(updatedMoney)
    setZombieFighters([...zombieFighters , fighter])
  }

  const totalStrength = team.reduce((previousValue, currentValue) => {
    return previousValue + currentValue.strength;
  }, 0);

  const totalAgility = team.reduce((previousValue, currentValue) => {
    return previousValue + currentValue.agility;
  }, 0);


  return (
    <>
      <h1>$$$ {money}</h1>
      <h3>{message}</h3>

      {
        team.length === 0
          ? (
            <>
             <h2 className="show">Total Strength: {totalStrength}</h2>
             <h2 className="show">Total Agility: {totalAgility}</h2>
             <h2 className="message">Pick some team members!</h2>
             </>
          ) :
          (
            <>
              <h2 className="show">Total Strength: {totalStrength}</h2>
              <h2 className="show">Total Agility: {totalAgility}</h2>
              <h2>My Team:</h2>


              {
              team.map((fighter) => (
                <div className="myTeam" key={fighter.id}>
                  <ul>
                  <button onClick={() => handleRemoveFighter(fighter)}>-</button>
                    <img src={fighter.img} alt={fighter.name} />
                    <li className="team">name: {fighter.name}</li>
                    <li className="team">price: {fighter.price}</li>
                    <li className="team">strength: {fighter.strength}</li>
                    <li className="team">agility: {fighter.agility}</li>
                  </ul>
                </div>

              ))}
            </>
          )
      }

<h2>All Zombie fighters: 

</h2>
      {
        zombieFighters.map((zombieFighter) => (
          
          
          <div className="fighter" key={zombieFighter.id}>
            <ul>
            <button id="myTeam" onClick={() => handleAddFighter(zombieFighter)}>+</button>
              <img src={zombieFighter.img} alt={zombieFighter.name} />
              <li>name: {zombieFighter.name}</li>
              <li>price: {zombieFighter.price}</li>
              <li>strength: {zombieFighter.strength}</li>
              <li>agility: {zombieFighter.agility}</li>
            </ul>
          </div>

          

        ))

      }

    </>
  );
}

export default App