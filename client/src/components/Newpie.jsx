import React, { useEffect, useState } from 'react'
import './newpie.css'
import axios from 'axios';
const predefinedColors = ['rgb(10, 90, 10)', 'rgb(31, 129, 20)', 'rgb(90, 157, 87)', 'rgb(120, 171, 120)', 'rgb(184, 222, 195)'];

export default function Newpie() {

    const [pie,setpie]=useState([])
    console.log("pie",pie);

    useEffect(()=>{
        axios.get('http://localhost:3001/api/pie-chart').then((res)=>{
            console.log(res);
            setpie(res.data)
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
    },[])
    const getColor = (index) => {
        return predefinedColors[index % predefinedColors.length];
    };

    
  return (
    <div className='container'>
        <div className="pie-main">
    <div className="pie-chart">
        {pie.map((item,index)=>(
        <div key={index} className='pie-segment' style={{ background: `conic-gradient(${predefinedColors.join(' ')})`}}>
            <p>         {item.value}</p>
        </div>
        ))}
        
    </div>
    {/* <div className="main">
        <div className="a_cat">

            <p>Category A</p>
        </div>
        <div className="b_cat">
        <p>Category B</p>
        </div>
        <div className="c_cat">
        <p>Category C</p>
        </div>
        <div className="d_cat">
        <p>Category D</p>
        </div>
        <div className="e_cat">
        <p>Category E</p>
        </div>
            
        </div> */}
        <div className="legend">
            {pie.map((item,index)=>(
            <div className="legend-item" style={{ color: getColor(index) }}>
                <span>{item.label}: {item.value}%</span> 
            </div>
            ))}
        </div>
        </div>


    </div>
  )
}
