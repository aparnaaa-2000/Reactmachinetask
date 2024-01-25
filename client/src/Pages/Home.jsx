import React from 'react'
import Sidebar from '../components/Sidebar'
import Graph from '../components/Graph'
import Newpie from '../components/Newpie'
import './home.css'
import Table from '../components/Table'
import Card from '../components/Card'

export default function Home() {
  return (
    <div className='container'>
    <div className='main'>
        <div className="sid">
        <Sidebar></Sidebar>
        </div>
   <div className="midd">
    
    <div className="gd">
        <div className="mn">
    <span >Good Morning</span>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="orange" class="bi bi-brightness-high-fill" viewBox="0 0 16 16">
  <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/>
</svg></div>
<div className="john">
<h5>John Doe</h5>
<p>john@doe.com</p>
</div>
</div>

    <div className="top">
        <div className="gra">
        <Graph></Graph>
        </div>
        <div className="pie">
            <Newpie></Newpie>
        </div>
    </div> 
    <div className="bot">
        <div className="tab">
            <Table></Table>
        </div>
        <div className="card">
            <Card></Card>
        </div>
    </div>
    </div>
    <div>
        
    </div>
    
    
    </div>
    
    </div>
  )
}
