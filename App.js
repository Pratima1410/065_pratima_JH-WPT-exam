// import { useState } from "react";

// export default function App() {
//   return(
//   <>MyComponent</>
//   );
// }

// function MyComponent(){
// const [message , setMessage] = useState ("MyChatApp");
// const [list,setList] = useState ([]);

// const Letschathere = () => {

//   const newList = [message,...list];

// };

// setList (newList);
// setMessage("");
// };

// const changeMessage = (e) =>
// {
//   const newMessage = e.target.value;
//   setMessage(newMessage);
// };
//   return (
// <div>
//   <h1> Letschathere </h1>
//   <input type ="button" value = "send"></input>

// <div id = "parent" >
//   {list.map(item) => (
//     <div>{item}</div>
//   ))}
// </div>
// </div>
  
// </div>
//  );
// }


import [component] from 'react';
import { render } from "@testing-library/react";
import React from "react";
import { Component } from "react/cjs/react.production.min";

class Message extends Component{

  render()
  {
    const {message} = this.props;
    return(
      <ul classname = "Messages-list" >
      {messages.map (m => this.renderMessage(m))}
      </ul>
    );
  }
}

renderMessage(message){
const{member,text} = message;
const {currentMember} = this.props;
const messageFromMe = member.id === currentMember.id;
const className = messageFromMe ? 
"Messages - message currentMember" : "Messages-message";
return(
<li className = {className} >
  
  <span className  = "Pratima"
  style ={{backgroundColor:member.clientData.color}}
  />
  <div className="Message-content">
    <div className="username">
      {member.clientData.username}
    </div>
    <div className = 'text'>{text}</div>
  </div>
</li>)
}
state = {
  messages:
  [
{
    text: "This is a text message",
member:{
  color: "blue",
  username: "Pratima"
}
}
  ],

  member: {
    username: randomName(),
    color : randomColor()
  }
}
render(){

  return(
<div className = "WhatsApp"> <Messages
messages = {this.state.messages}
currentMember = {this.state.member}
/>
</div>
 );
}

import [component] from 'react';
import React from 'react';

class Input extends Component{

  state = {
    text: " "
  }
}
export default Input;


render(){


  return (
<div className="Input">
  <form onSubmit={e => this.onSubmit(e)}>
    <input onChange = {e => this.OnCharge(e)}
    value={this.state.text}
    type = "text"
    placeholder="Enter your message"
    />
    <button> Send</button>
  </form>

</div>
);
}
onChange(e){
  this.setState({text:e.target.value})
}
onSubmit (e)
{
  e.preventDefault ();
  this.setState ({text: " "}) ;
  this.prop.onSendMessage(this.state)
}

render (){

return(
<div classNmae= "WhatsApp">

    <Messages 
    messages = {this.state.messages}
    currentmember = {this.state.member}
    />
    <Input onSendMessage = {this.onSendMessage}/>
    </div>
  )
}
onSendMessage = (message) =>
{

  const messages = this.state.messages
  messages.push({

    text.message,
    member: this.static.member
  }
  )
  this.setState({messages:messages}
    )

    