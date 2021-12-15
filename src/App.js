import React, { Component } from 'react';
// import "./components/4.1/components/Button.style.css";
// import "./components/4.2/components/Card.style.css"
// import Increment from "./components/7.1/components/Increment.components";
// import HideAndSeek from "./components/7.2/components/Hide&Seek.components";
// import Card from "./components/4.2/components/Card.component";
// import Spinner from "./components/9.1/components/Spinners.components";
// import Color from './components/8.1/components/Color.components';
// import BoxAnimate from './components/8.1.2/components/BoxAnimation.components';
// import ColorBox from './components/8.2/components/ChangeBox.components';
import Btn from './components/11.1/components/ButtonColors.components';
import CheckBox from './components/11.2/components/CheckBox.components';
// import CardClass from "./components/6.1/components/Class.components";

// import Quiz from "./components/3.2/components/Quiz.components";
// import Button from "./components/4.1/components/Button.components";
// import HelloWorld from "./components/2.1/components/HomePage.components";
// import BasicsOfJsx from "./components/2.2/components/App.components";

// import Box1 from "./components/2.3/components/Box.components";

// const colors = [
//   { color: "blue", id: 0 },
//   { color: "red", id: 1 },
//   { color: "yellow", id: 2 },
//   { color: "green", id: 3 }
// ];
class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   // this.state = { seconds: 0 };

  //   this.state = {
  //     selectedColor: '',
  //     setSelectedColor:''
  //   }
   
  // }
  //  updateColor = (color) => {
  //  this.setState ({setSelectedColor:color})
  //  console.log(this.state)
  // };


  // onStart = () => {
  //   this.setState({ seconds: this.state.seconds + 1 });
  // }
  // timer = () => {
  //   this.f = setInterval(this.onStart, 1000);
  // }
  // onPause = () => {
  //   clearInterval(this.f);
  // }
  // onReset = () => {
  //   clearInterval(this.f);
  //   this.setState({ seconds: 0 })
  // }

  render() {
    return (
      // <HelloWorld></HelloWorld>  //uncomment this & import for assignment 2.1
      // <BasicsOfJsx></BasicsOfJsx> //uncomment this & import for assignment 2.2
      // <Box1></Box1> //uncomment this & import for assignment 3.1
      // <Quiz/> //uncomment this & import for assignment 3.2
      // <>
      // <Button fontSize = "bold" text="important"/> 
      // <Button text="not important"/>
      // </>  uncomment this & import for assignment 4.1

      // <>
      //   <Card url ="https://source.unsplash.com/collection/190727/500x500" title='Nice image' desc='a nice image and nice description' link1= "SHARE" link2="EXPLORE"/>
      //   <Card url ="https://source.unsplash.com/collection/190728/500x500" title='Nice image Two' desc='a nice image and nice description two ' link1= "SHARE 2" link2="EXPLORE 2"/>
      //   <Card url ="https://source.unsplash.com/collection/190725/500x500" title='Nice image 3' desc='a nice image and nice description 3' link1= "SHARE 3" link2="EXPLORE 3"/>
      // </> // assignment 4.2
      //   <>
      // <CardClass url ="https://source.unsplash.com/collection/190727/500x500" title='Nice image' desc='a nice image and nice description' link1= "SHARE" link2="EXPLORE"/>
      //     <CardClass  url ="https://source.unsplash.com/collection/190728/500x500" title='Nice image Two' desc='a nice image and nice description two ' link1= "SHARE 2" link2="EXPLORE 2"/>
      //     <CardClass  url ="https://source.unsplash.com/collection/190725/500x500" title='Nice image 3' desc='a nice image and nice description 3' link1= "SHARE 3" link2="EXPLORE 3"/>
      //   </> // assignment 6.1
      // <Increment/> // assignment 7.1 
      // <HideAndSeek /> // assignment 7.2
      // <div>
      //   <h1 style={{ color: 'white' }}>{this.state.seconds}</h1>
      //   <h1>{this.state.seconds}</h1>
      //   <button id='btn' onClick={this.timer}>Start</button>
      //   <button onClick={this.onPause}>Stop</button>
      //   <button onClick={this.onReset}>Reset</button>
      // </div>
      // <Spinner/>
      // <Color/>
      // <BoxAnimate/>
      // <ColorBox/>
    //   <div>
    //   <h1>The color selected is {this.state.setSelectedColor} </h1>
    //   {colors.map((btn) => {
    //     return (
    //       <Btn
    //         callBack={this.state.updateColor}
    //         id={btn.id}
    //         key={btn.id}
    //         color={btn.color}
    //       />
    //     );
    //   })}
    // </div>
    <div style={{display: 'block'}}>
      <CheckBox label = 'I read the term of the app' />
      <CheckBox label = 'I accept the term of the app' />
      <CheckBox label = 'I want to get the weekly news letter' checked='deafult' />
      <CheckBox label = 'I want to get sales and offers' checked='deafult'/>
    </div>
    );
  }
}

export default App;
