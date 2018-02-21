import React from 'react';
import GridColumn from "./GridColumn";


const Grid = (props) => {
  console.log(props);
  return(
    <div className="columns">
      <GridColumn id="1" cellsArray={props.grid[0]}/>
      <GridColumn id="2" cellsArray={props.grid[1]}/>
      <GridColumn id="3" cellsArray={props.grid[2]}/>
      <GridColumn id="4" cellsArray={props.grid[3]}/>
      <GridColumn id="5" cellsArray={props.grid[4]}/>
      <GridColumn id="6" cellsArray={props.grid[5]}/>
      <GridColumn id="7" cellsArray={props.grid[6]}/>
    </div>
    )
  }
export default Grid;
