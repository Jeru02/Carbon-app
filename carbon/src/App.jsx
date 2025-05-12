import { useEffect, useState } from "react";
import "./App.css";
import PostcodeForm from "./components/PostcodeForm";
import ChartArea from "./components/ChartArea";

function App() {
  const [data, setData] = useState({
    data: [
      {
        regionid: 10,
        dnoregion: "UKPN East",
        shortname: "East England",
        postcode: "CM23",
        data: [
          {
            from: "2025-05-12T10:30Z",
            to: "2025-05-12T11:00Z",
            intensity: {
              forecast: 48,
              index: "low",
            },
            generationmix: [
              {
                fuel: "biomass",
                perc: 0,
              },
              {
                fuel: "coal",
                perc: 0,
              },
              {
                fuel: "imports",
                perc: 2.1,
              },
              {
                fuel: "gas",
                perc: 11.8,
              },
              {
                fuel: "nuclear",
                perc: 27.8,
              },
              {
                fuel: "other",
                perc: 0,
              },
              {
                fuel: "hydro",
                perc: 0,
              },
              {
                fuel: "solar",
                perc: 41,
              },
              {
                fuel: "wind",
                perc: 17.2,
              },
            ],
          },
        ],
      },
    ],
  });

  const [postcode, setPostcode] = useState("");

  // useEffect(()=>{},[])

  const handleChange = (e) => {
    e.preventDefault();
    setPostcode(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setPostcode(e.target.value);

    
  };

  return (
    <div>
      <PostcodeForm
        postcode={postcode}
        setPostcode={setPostcode}
        handleChange={handleChange}
        handleClick={handleClick}
      />

      <ChartArea postcode={postcode} />
    </div>
  );
}

export default App;
