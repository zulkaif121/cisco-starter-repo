import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {useState,useEffect} from 'react'
var ping;
var W3CWebSocket = require('websocket').w3cwebsocket;

var client = new W3CWebSocket('ws://localhost:8080/', 'echo-protocol');

client.onerror = function() {
    console.log('Connection Error');
};

client.onopen = function() {
    console.log('WebSocket Client Connected');

    function sendNumber() {
        if (client.readyState === client.OPEN) {
           var curdat =new Date();
            client.send(parseInt(curdat.getTime()));
            setTimeout(sendNumber, 1000);
        }
    }
    sendNumber();
};

client.onclose = function() {
    console.log('echo-protocol Client Closed');
};

function Comp(){
 
client.onmessage = function(e) {
   let dat=new Date()
    
        console.log("Ping in ms: '");
        ping=parseInt(dat.getTime()) - parseInt((e.data));
        setpin(parseInt(dat.getTime()) - parseInt((e.data)));

        console.log(ping);
        

       // console.log("current time is "+ dat.getTime())
    
};
let [pin,setpin]=useState('');
const getpin=()=>{
  setpin(ping);
}
useEffect( () => {
  //passing getData method to the lifecycle method
  
  getpin();

}, []);
return (<p>ping is {pin}</p>);
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <App />
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
export default Comp