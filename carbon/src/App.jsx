import { useEffect, useState } from "react";
import "./App.css";
import PostcodeForm from "./components/PostcodeForm";
import ChartArea from "./components/ChartArea";

import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { PolarArea } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend, RadialLinearScale)

function App() {
  const [fuelData, setFuelData] = useState([{ fuel: "biomass", perc: 20 }]);
  const [postcode, setPostcode] = useState("SW1A");
  const [displayGenerationMix, setDisplayGenerationMix] = useState(false);
  const [displayChart, setDisplayChart] = useState(false)
  const [postcodeCopy, setPostcodeCopy] = useState(true)
  const [data, setData] = useState({
    labels: ["Biomass", "Coal", "Imports", "Gas", "Nuclear", "Other", "Hydro", "Solar", "Wind"],
    datasets: [
      {
        label: 'Generation Mix %',
        data: [],
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)',
          'rgba(50, 15, 200, 0.5)',
          'rgba(116, 223, 109, 0.5)',
          'rgba(255, 0, 247, 0.5)'
        ],
        borderWidth: 1,
      },
    ],
  });

  useEffect(() => {
    fetchAndSetFuelData()
  }, [])

  function fetchAndSetFuelData() {
    fetch(`https://api.carbonintensity.org.uk/regional/postcode/${postcode}`)
      .then((response) => {
        return response.json()
      })
      .then(({ data }) => {

        setFuelData(data[0].data[0].generationmix)
      })
  }

  function handleChange(e) {
    e.preventDefault();
    setPostcode(e.target.value);    
  };

  function handleClick(e) {
    e.preventDefault();
    fetchAndSetFuelData();
    setDisplayGenerationMix(true)
    setDisplayChart(true) 
    setPostcodeCopy(postcode.toUpperCase())  
    setData({
      labels: fuelData.map((fuel) => {
        return fuel.fuel
      }),
      datasets: [
        {
          label: 'Generation Mix %',
          data: fuelData.map((fuel) => {
            return fuel.perc
          }),
          backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(153, 102, 255, 0.5)',
            'rgba(255, 159, 64, 0.5)',
            'rgba(50, 15, 200, 0.5)',
            'rgba(116, 223, 109, 0.5)',
            'rgba(255, 0, 247, 0.5)'
          ],
          borderWidth: 1,
        },
      ],
    })
  };

  return (
    <div className="form-div">
      <PostcodeForm
        id="main-form"
        postcode={postcode}
        setPostcode={setPostcode}
        handleChange={handleChange}
        handleClick={handleClick}
      />

      <ChartArea
        fuelData={fuelData}
        postcode={postcode}
        displayGenerationMix={displayGenerationMix}
        // displayChart={displayChart} 
        postcodeCopy={postcodeCopy}
        data={data}
        />
        {displayChart ? <PolarArea id="polar-chart" data={data}/> : null}
    </div>
  );
}

export default App;
