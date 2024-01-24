import React, { useEffect, useState } from 'react'
import './table.css'
import axios from 'axios'

export default function Table() {

    const [state,setstate]=useState([])
    console.log("state",state);

    useEffect(()=>{
        axios.get("http://localhost:3001/api/table",state).then((response)=>{
            console.log(response);
            setstate(response.data)
        }).catch(error => {
            console.error('Error fetching data:', error);
          });
        
    },[])

    const column = ['id' , 'name' , 'quantity', 'price']
  return (
    <>
    <div className='container '>
        <table className="table table-striped table-bordered">
            <thead>
            
                <tr> 
                {column.map(col=>(
                    <th key={col}>{col}</th>
                    ))}  
                </tr>
                
            </thead>
            <tbody>
                {state.map((item, index)=>(
           
                <tr key={index} >
                    {column.map(col=>(
                    <td key={col}>{item[col]}</td>
                    ))}
                   
                    
                </tr>
                ))}
                
                
               
            </tbody>

        </table>
    </div>
    </>
  )
}
