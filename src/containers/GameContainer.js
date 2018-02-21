import React from 'react';
import Grid from "../components/Grid";
import ButtonSelector from "../components/ButtonSelector";
class GameContainer extends React.Component{

  constructor(){
    super();

    const grid = [
    ["white", "white", "white", "white", "white", "white"],
    ["white", "white", "white", "white", "white", "white"],
    ["white", "white", "white", "white", "white", "white"],
    ["white", "white", "white", "white", "white", "white"],
    ["white", "white", "white", "white", "white", "white"],
    ["white", "white", "white", "white", "white", "white"],
    ["white", "white", "white", "white", "white", "white"]];

    this.state = {
      currentPlayer: "No one",
      counterColour: null,
      grid: grid
    }
    this.startClicked = this.startClicked.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.togglePlayer = this.togglePlayer.bind(this);
    this.toggleColour = this.toggleColour.bind(this);
    this.clearGame = this.clearGame.bind(this);
  }


  handleClick(buttonId){
    //check player - colour
    //get column from button id
    const columnArray=this.state.grid[buttonId - 1];
    this.updateCells(columnArray, buttonId - 1);
    this.togglePlayer(this.state.currentPlayer);
    this.toggleColour(this.state.counterColour);
    //column check for contents
    //check player colour for connection
    //change player to next player
  }

  togglePlayer(currentPlayer) {
    if(currentPlayer === "Player 1") {
      this.setState({
        currentPlayer: "Player 2"
      })
    }
    else this.setState({
      currentPlayer: "Player 1"
    })
  }

  toggleColour(currentColour) {
    console.log(currentColour);
    if(currentColour === "red") {
      this.setState({
        counterColour: "yellow"
      })
    }
    else this.setState({
      counterColour: "red"
    })
  }

  updateCells(columnArray, columnIndex){
     const index = columnArray.indexOf("white");
     columnArray[index] = this.state.counterColour;
     const newGrid = this.state.grid;
     newGrid[columnIndex] = columnArray;
     this.setState({
       cells: newGrid
     })
   }

  startClicked(e) {
    this.setState({

      currentPlayer: "Player 1",
      counterColour: "red"
    })
    e.target.style.visibility="hidden";
    let button = document.querySelector("#invisible");
    button.style.visibility="visible";
  }

  clearGame(e) {
    const grid = [
    ["white", "white", "white", "white", "white", "white"],
    ["white", "white", "white", "white", "white", "white"],
    ["white", "white", "white", "white", "white", "white"],
    ["white", "white", "white", "white", "white", "white"],
    ["white", "white", "white", "white", "white", "white"],
    ["white", "white", "white", "white", "white", "white"],
    ["white", "white", "white", "white", "white", "white"]];
    this.setState({
      grid: grid,
      currentPlayer: "No one",
      counterColour: null
    })
    let button = document.querySelector('#start-button');
    button.style.visibility = "visible";
    e.target.style.visibility="hidden";
  }

  render(){
    return (<div>
      <ButtonSelector click={this.handleClick}/>
      <Grid grid={this.state.grid} colour={this.state.counterColour}/>
      <button id="start-button" onClick={this.startClicked}>Start game</button>
      <button id="invisible" onClick={this.clearGame}>Restart</button>
      <p id="current-player-tag">Current player: {this.state.currentPlayer}</p>
    </div>)
  }


}
export default GameContainer;
