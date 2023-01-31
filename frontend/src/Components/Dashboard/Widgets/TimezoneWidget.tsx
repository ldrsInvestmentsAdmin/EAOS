import React from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import PublicIcon from "@mui/icons-material/Public";
export const Timezone = (props: any) => {
  const { date } = props;
  return (
    <div className="featuredItem">
      <span className="featuredTitle">Dynamic Timezone</span>
      <CancelIcon
        onClick={props.cancel}
        id="cancelIcon"
        className="cancelIcon"
      />
      <div className="featuredWeatherContainer">
        <span className="featuredTemperature" id="featuredcity"></span>
        <span className="featuredTemperature" id="featuredTemperature">
          {date.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
          &nbsp;
          {
            date
              .toLocaleTimeString("en-us", { timeZoneName: "short" })
              .split(" ")[2]
          }
        </span>
        <PublicIcon className="featuredIcon" />
      </div>
    </div>
  );
};