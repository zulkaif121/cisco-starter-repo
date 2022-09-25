import React from 'react';
import {useState,useEffect} from 'react'
import axios from 'axios'
function Exhibit() {

    const [ip, setIP] = useState('');
    const getData = async () => {
        const res = await axios.get('https://api64.ipify.org?format=json');
       
        setIP(res.data.ip)
      }
      useEffect( () => {
        //passing getData method to the lifecycle method
        getData()
    
      }, [])
    return (
        <div>
      
        
        <ol className="Exhibit_classeslistOL" >
                <li >
                <h2> Your IP is {ip} </h2>
                </li>
                <li><h2 >Child Two</h2></li>
                <li><h2 >Child Three</h2></li>
                <li><h2 >Child Four</h2></li>
            
        </ol>
      
      </div>
    );
  }

export default Exhibit;

