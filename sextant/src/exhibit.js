import React from 'react';
import {useState,useEffect} from 'react'
import axios from 'axios'
import Comp from "./index"


function Exhibit() {

    const [ipv6, setIP] = useState('');
    const [ipv4,setIP2] = useState('');
    
    const getData = async () => {
        const res = await axios.get('https://api64.ipify.org?format=json');
        const res2 = await axios.get('https://api.ipify.org?format=json');
        //console.log(res.data);
        setIP(res.data.ip)
        setIP2(res2.data.ip)
      }
   
      useEffect( () => {
        //passing getData method to the lifecycle method
        getData();
  
    
      }, [])
    return (
        <div>
      
        
        <ol className="Exhibit_classeslistOL" >
                <li >
                <h2> Your IPv4  is {ipv4} and IPv6 is {ipv6} </h2>
                </li>
                <li><h2 ><Comp /></h2></li>
                <li><h2 >Child Three</h2></li>
                <li><h2 >Child Four</h2></li>
            
        </ol>
      
      </div>
    );
  }

export default Exhibit;

