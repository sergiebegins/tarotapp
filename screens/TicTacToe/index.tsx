import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { bs } from "../bootstrap";

const TicTacToe = () => {
  const [board, setBoard] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const [color, setColor] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [currentPlayerFlag, setCurrentPlayerFlag] = useState(1);
  const [playerScore, setPlayerScore] = useState([0, 0]);

  const handlePress = (index: any) => {
    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    if (board[index] === "") {
      setBoard(newBoard);
      handleRoll();
      setCurrentPlayerFlag(currentPlayerFlag === 1 ? 0 : 1);
      countXYZ(newBoard);
    }

    setTimeout(() => {
      if (!newBoard.includes("")) {
        if (playerScore[0] > playerScore[1]) {
          alert("Player 1 win");
        } else if (playerScore[0] === playerScore[1]) {
          alert("Player 1 draw Player 2");
        } else {
          alert("Player 2 win");
        }
      }
    }, 1000);
  };

  const handleRoll = () => {
    const currentPlayer = ["Y", "Z", "X"];
    const newValue = Math.floor(Math.random() * 3);
    setCurrentPlayer(currentPlayer[newValue]);
  };

  function countXYZ(arr: any) {
    let count = 0;
    const newColor = [...color];

    for (let i = 0; i < arr.length - 2; i += 3) {
      if (arr[i] === "X" && arr[i + 1] === "Y" && arr[i + 2] === "Z") {
        newColor[i] = true;
        newColor[i + 1] = true;
        newColor[i + 2] = true;
        count++;
      }
      if (arr[i] === "Z" && arr[i + 1] === "Y" && arr[i + 2] === "X") {
        newColor[i] = true;
        newColor[i + 1] = true;
        newColor[i + 2] = true;
        count++;
      }
    }

    for (let i = 2; i < arr.length - 2; i += 3) {
      if (arr[i] === "Z" && arr[i + 2] === "Y" && arr[i + 4] === "X") {
        newColor[i] = true;
        newColor[i + 2] = true;
        newColor[i + 4] = true;
        count++;
      }
      if (arr[i] === "X" && arr[i + 2] === "Y" && arr[i + 4] === "Z") {
        newColor[i] = true;
        newColor[i + 2] = true;
        newColor[i + 4] = true;
        count++;
      }
    }

    for (let i = 0; i < arr.length - 2; i++) {
      if (arr[i] === "X" && arr[i + 3] === "Y" && arr[i + 6] === "Z") {
        newColor[i] = true;
        newColor[i + 3] = true;
        newColor[i + 6] = true;
        count++;
      }
      if (arr[i] === "Z" && arr[i + 3] === "Y" && arr[i + 6] === "X") {
        newColor[i] = true;
        newColor[i + 3] = true;
        newColor[i + 6] = true;
        count++;
      }
      if (arr[i] === "Z" && arr[i + 4] === "Y" && arr[i + 8] === "X") {
        newColor[i] = true;
        newColor[i + 4] = true;
        newColor[i + 8] = true;
        count++;
      }
      if (arr[i] === "X" && arr[i + 4] === "Y" && arr[i + 8] === "Z") {
        newColor[i] = true;
        newColor[i + 4] = true;
        newColor[i + 8] = true;
        count++;
      }
    }
    setColor(newColor);
    const totalScore = playerScore[0] + playerScore[1];
    if (count > totalScore) {
      const newPlayerScore = [...playerScore];
      newPlayerScore[currentPlayerFlag] += 1;
      setPlayerScore(newPlayerScore);
    }
  }

  const renderSquare = (index: any) => {
    return (
      <TouchableOpacity
        onPress={() => handlePress(index)}
        style={[bs.w100, bs.h100]}
      >
        <Text
          style={color[index] ? [bs.success, bs.h100] : [bs.danger, bs.h100]}
        >
          {board[index]}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={[bs.container]}>
      <View style={[bs.row1]}>
        <View style={[bs.col12]}>
          Player 1:{JSON.stringify(playerScore)}:Player 2
        </View>
      </View>
      <View style={[bs.row11]}>
        <View style={[bs.col12]}>
          <View style={[bs.row2, bs.border1]}>
            <View style={[bs.col4, bs.border1]}>{renderSquare(0)}</View>
            <View style={[bs.col4, bs.border1]}>{renderSquare(1)}</View>
            <View style={[bs.col4, bs.border1]}>{renderSquare(2)}</View>
          </View>
          <View style={[bs.row2, bs.border1]}>
            <View style={[bs.col4, bs.border1]}>{renderSquare(3)}</View>
            <View style={[bs.col4, bs.border1]}>{renderSquare(4)}</View>
            <View style={[bs.col4, bs.border1]}>{renderSquare(5)}</View>
          </View>
          <View style={[bs.row2, bs.border1]}>
            <View style={[bs.col4, bs.border1]}>{renderSquare(6)}</View>
            <View style={[bs.col4, bs.border1]}>{renderSquare(7)}</View>
            <View style={[bs.col4, bs.border1]}>{renderSquare(8)}</View>
          </View>
          <View style={[bs.row2, bs.border1]}>
            <View style={[bs.col4, bs.border1]}>{renderSquare(9)}</View>
            <View style={[bs.col4, bs.border1]}>{renderSquare(10)}</View>
            <View style={[bs.col4, bs.border1]}>{renderSquare(11)}</View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TicTacToe;
