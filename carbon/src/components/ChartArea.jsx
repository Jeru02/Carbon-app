const ChartArea = (props) => {
   
  return (<div>
    <h2>Latest generation mix for {props.postcode}</h2>
    <p>{props.fuelData[0].fuel}: {props.fuelData[0].perc}</p>
  </div>);

};

export default ChartArea