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
    {props.displayGenerationMix ? <h2>Latest generation mix for {props.postcodeCopy}</h2> : null}

    
  </div>);

};

export default ChartArea