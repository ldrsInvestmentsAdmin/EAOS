import React from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";

const Widget = (props: any) => {
  //console.log(props);
  const { title, city, temperature } = props.weather;
  return (
    <div className="featuredItem">
      <span className="featuredTitle">{title}</span>
      <CancelIcon
        id="cancelIcon"
        onClick={props.cancel}
        className="cancelIcon"
      />
      <div className="featuredWeatherContainer">
        <span className="featuredTemperature" id="featuredcity">
          {city}
        </span>
        <span className="featuredTemperature" id="featuredTemperature">
          {temperature}
        </span>
        <DeviceThermostatIcon className="featuredIcon" />
      </div>
    </div>
  );
};

export default Widget;