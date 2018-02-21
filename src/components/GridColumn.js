import React from 'react';
import Cell from "./Cell";



  const GridColumn = (props) => {
    return (

      <div>
        <Cell colour={props.cellsArray[5]}/>
        <Cell colour={props.cellsArray[4]}/>
        <Cell colour={props.cellsArray[3]}/>
        <Cell colour={props.cellsArray[2]}/>
        <Cell colour={props.cellsArray[1]}/>
        <Cell colour={props.cellsArray[0]}/>
      </div>
    )
  }



export default GridColumn;
