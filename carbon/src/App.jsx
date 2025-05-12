import { useEffect, useState } from "react";
import "./App.css";
import PostcodeForm from "./components/PostcodeForm";
import ChartArea from "./components/ChartArea";

function App() {
  const [fuelData, setFuelData] = useState([{fuel: "biomass", perc: 20}]);
  const [postcode, setPostcode] = useState("SW1A");

  useEffect(()=>{
    fetchAndSetFuelData()
  },[])
  
  function fetchAndSetFuelData(){
    fetch(`https://api.carbonintensity.org.uk/regional/postcode/${postcode}`)
    .then((response) => {      
      return response.json()
    })
    .then(({data}) => {
      console.log(data[0].data[0].generationmix)
      setFuelData(data[0].data[0].generationmix)
    })    
  }
  
  function handleChange(e){
    e.preventDefault();
  };
  
  function handleClick(e){
    e.preventDefault();
    setPostcode(e.target.value);
    fetchAndSetFuelData();   
  };

  return (    
    <div>
      <PostcodeForm
        postcode={postcode}
        setPostcode={setPostcode}
        handleChange={handleChange}
        handleClick={handleClick}
      />

      <ChartArea fuelData={fuelData} postcode={postcode}/>
    </div>
  );
}

export default App;
