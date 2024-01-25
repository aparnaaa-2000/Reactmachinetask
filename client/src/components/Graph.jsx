import React, { useEffect, useState } from 'react'
import './graph.css'
import axios from 'axios';
import 'chart.js/auto';
import 'chart.js';
import 'chartjs-adapter-moment';

import { Line } from 'react-chartjs-2';

export default function Graph() {

    const [graph,setgraph]=useState([])
    console.log(graph);

    useEffect(()=>{
        axios.get('http://localhost:3001/api/graph').then((re)=>{
            console.log(re);
            setgraph(re.data)
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
    },[])

    const data = {
        labels: graph.map(item => item.x),
        datasets: [
          {
            label: 'x',
            data: graph.map(item => item.y),
            fill: false,
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
            // data: graph.map(item => item.x),
          },
        ],
      };
      const options = {
        scales: {
          x: {
            type: 'category',
            position: 'bottom',
            
          },
          y: {
            min: 0,
            // position:'vertical'
          },
        },
      };
    

   

  return (
    <div className="container">
    {/* <h2>Graph Example</h2> */}
    {/* <Line data={data} options={options}/> */}
    <Line data={data} options={options} />

    <p>{graph.x}</p>
    
    
</div>
  )
}
