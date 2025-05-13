import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { useState } from 'react';
import { PolarArea } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend, RadialLinearScale)

const ChartArea = (props) => {

 
  return (<div>
    {props.displayGenerationMix ? <h3>Latest generation mix for {props.postcodeCopy}</h3> : <h3>View your local energy generation mix</h3>}

  
  </div>);

};

export default ChartArea