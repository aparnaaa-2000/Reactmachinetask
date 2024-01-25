

// import React, { useEffect, useState } from 'react';
// import './pie.css';
// import { Pie } from 'react-chartjs-2';
// import axios from 'axios';

// const PieChart = () => {
//     const [pie,setpie]=useState([])
//     console.log("pie",pie);


//     useEffect(()=>{
//         axios.get('http://localhost:3001/api/pie-chart').then((res)=>{
//             console.log(res);
//             setpie(res.data)
//         })
//         .catch(error => {
//             console.error('Error fetching data:', error);
//           });
//     },[])


//       const labels = pie.map(item=> item.label);
//       const values = pie.map(item=>item.value);

//       const chartData = {
//         labels: labels,
//         datasets: [{
//             data: values,
//             backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'], // You can customize the colors
//         }],
//     };
//     const chartOptions = {
//         responsive: true,
//         maintainAspectRatio: false,
//     };
  
//   return (
//     <div className="pie-chart-container">
//       <h2>Pie Chart Example</h2>
//       <div className="pie-chart">
//        <Pie data={chartData} options={chartOptions}/>
        
        
        
//       </div>
//     </div>
//   );
// };

// export default PieChart;
