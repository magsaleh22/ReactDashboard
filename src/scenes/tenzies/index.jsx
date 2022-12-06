import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import React from "react";
import Die from "./components/Die";
import { nanoid } from "nanoid";
// import './index.css';

const Tenzies = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [dice, setDice] = React.useState(allNewDice()); // [1,2,3,5,2,1] original working   thia is initialization

  function allNewDice() {
    const arrValues = Array.from({ length: 10 }, () =>
      Math.floor(Math.random() * (6 - 1 + 1) + 1)
    );
    const newDice = [];

    arrValues.forEach((val) => {
      newDice.push({
        key: nanoid(),
        value: val,
        isHeld: false,
        id: nanoid(),
      });
    });
    return newDice;
  }

  // sync useEffect with useState
  const [tenzies, setTenzies] = React.useState(false);

  React.useEffect(() => {
    dice.forEach((die) => die.isHeld === false && setTenzies(false));
    if (tenzies === true) {
      console.log("celeberate");
    }
  }, [dice]);

  function handleDieHold(event, dieID) {
    setDice((prevDice) => {
      return prevDice.map(function (prevDie) {
        return prevDie.id === dieID
          ? { ...prevDie, isHeld: !prevDie.isHeld }
          : prevDie;
      });
    });

    console.log(dice);
  }

  const diceElements = dice.map((die) => {
    return (
      <Die
        dieHeld={handleDieHold}
        key={die.key}
        value={die.value}
        isHeld={die.isHeld}
        id={die.id}
      />
    );
  });

  //onClick can call only functions, not implicis setState calls
  function rollDice() {
    // here you will get new objects with new ID, how is this possible, we need to remain save the state
    setDice((oldDice) => {
      return oldDice.map((oldDie) => {
        return oldDie.isHeld
          ? oldDie
          : { ...oldDie, value: Math.floor(Math.random() * 6) + 1 };
      });
    }); // this is not right, this is just initialization
    console.log(dice);
  }

  return (
    <Box m="20px" >
      <Header title="Tenzies" subtitle="funny game" />
      <Box
        height="50vh"
        width = "50vh"
        m="auto"
        padding="30px"

        display="flex"
        // justifyContent="space-between"
        bgcolor={colors.primary[400]}
        borderRadius="20px"
        

        // flexDirection="column"
        // border= "1px solid red"
        // justify-content= "space-around"
        align-items= "center"
      >
        <Box 
        display="flex"
        flexDirection="column"
        // justifyContent="space-around"
        align-items= "center"
        // padding="5%"
        >
          <h1 className="title">Tenzies</h1>
          <p className="instructions">
            Roll until all dice are the same. Click each die to freeze it at its
            current value between rolls.
          </p>
       
          <div className="dice-container">{diceElements}</div>
          <button  className="roll-dice" onClick={rollDice}>
            Roll
          </button>
        </Box>
      </Box>
    </Box>
  );
};

export default Tenzies;
