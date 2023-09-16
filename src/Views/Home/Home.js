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

      <div style={{backgroundColor: "black", width: 600, height: 500, margin:20, padding: 20, flexDirection: 'row'}}>
        <div style={{width: 5, height: 10, margin:10, float: 'left'}}>  <img
        src={'https://pluspng.com/img-png/one-piece-png-one-piece-chibi-png-image-564.png'}
        className="imageclass" 
      />  </div>
        <div style={{margin: 10, float: 'right'}}>  <img
        src={'https://i.pinimg.com/564x/58/f2/51/58f251c954d944ef3ba0060ca56af599.jpg'}
        className="imageclass"
      />  </div>
      </div>

  





    </div>
  )
}
