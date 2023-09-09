import React from "react";
import './Home.css'

export default function Home() {

  return(
    <div
      className="container-home"
    >

      <a href="/flex"> Go to Flex  2</a>
      <a href="/styled"> Go to Styled </a>

      <p>Home</p>
      
      <div className="box" > Box </div>

      <div className="box2" > Box </div>

      <div style={{backgroundColor: "blue", width: 500, height: 300, margin:20, padding: 80}}>
        <div style={{backgroundColor: "#9f9f33", padding: 20}}>  <img
        src={'https://i.pinimg.com/originals/e6/ba/0a/e6ba0a0e1a76e2fad592076f37bc50a3.jpg'}
        className="imageclass"
      />  </div>
        <div style={{backgroundColor: "#70163C", padding: 30}}>  <img
        src={'https://i.pinimg.com/originals/e6/ba/0a/e6ba0a0e1a76e2fad592076f37bc50a3.jpg'}
        className="imageclass"
      />  </div>
      </div>





    </div>
  )
}

