import React from "react";
import { Link } from 'react-router-dom';

function Homepage() {
    return (
      <div className="home">
        <div className="header"><h1>React 練習專案</h1> </div>
        <div className="main"><h1>歡迎光臨我的頁面</h1></div>
        <div ><button className="button"> <Link to="/drag">點此開始</Link></button></div>
       
      </div>
    );
  }


export  default Homepage;
