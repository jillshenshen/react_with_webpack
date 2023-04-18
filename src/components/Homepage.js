import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useSelector, useDispatch } from 'react-redux';
import { incrementClickCount, clearClickCount, toggleDisable } from '../store';



function Homepage() {
  
  const clickCount = useSelector((state) => state.counter.clickCount);
  const disable = useSelector((state) => state.counter.disable);
  const dispatch = useDispatch();

  const buttons = [
    <Button key="button1" onClick={() => dispatch(incrementClickCount())} disabled={disable}>
      CLICK: {clickCount}
    </Button>,
    <Button key="button2" onClick={() => dispatch(clearClickCount())}>
      CLEAR
    </Button>,
    <Button key="button3" onClick={() => {
      if (disable) {
        dispatch(toggleDisable()); 
        dispatch(incrementClickCount()); 
      } else {
        dispatch(toggleDisable()); 
      }
    }}>
      {disable ? 'ABLE' : 'DISABLE'}
    </Button>,
  ];

  

    return (
      <div className="home">
        <div className="header"><h1>React 練習專案</h1> </div>
        <div className="main">
  
        <ButtonGroup size="large" aria-label="large button group" orientation="vertical">
          {buttons}
        </ButtonGroup>

        
        </div>
       
 
       
      </div>
    );
  }


export  default Homepage;
