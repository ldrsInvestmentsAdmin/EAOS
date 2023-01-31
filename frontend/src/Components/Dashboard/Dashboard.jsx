import "./Dashboard.css";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import MarkEmailUnreadIcon from "@mui/icons-material/MarkEmailUnread";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CancelIcon from "@mui/icons-material/Cancel";
import PublicIcon from "@mui/icons-material/Public";
import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import Widget from "./Widgets/Widget";
import { WeatherWidgetObj } from "./Widgets/WeatherWidgetObj";
import { Timezone } from "./Widgets/TimezoneWidget";

export default function Dashboard() {
  //useEffect here is used to call function generateWeatherData during page load everytime
  useEffect(() => {
    generateWeatherData();
    //console.log(city);
  }, []);

  const [weather, setWeather] = useState(WeatherWidgetObj);

  //This function is used to get current date and time
  const [date, setDate] = useState(new Date());

  //here useState hook is used to add a custom widget in the application
  const [{ featuredWidgets }, setFeaturedWidgets] = useState({
    featuredWidgets: [],
  });

  //creates unique id for when you add a new widget component
  const unique_id = uuid();
  //const small_id = unique_id.slice(0,2)

  //the function addCustomWidget binds the current view with the given container
  const addCustomWidget = () => {
    //console.log(weather);
    featuredWidgets.push(
      <Widget key={unique_id} weather={weather} cancel={cancel} />
    );
    setFeaturedWidgets({ featuredWidgets: [...featuredWidgets] });
  };

  //This function is prompt whenever cancel button is clicked. This function removes the element whose cancel button is clicked
  function cancel(selector: any) {
    if (selector.target.parentElement.id === "cancelIcon") {
      selector.target.parentElement.parentElement.remove();
    } else {
      selector.target.parentElement.remove();
    }
  }
  return (
    <div className="featured">
      <button
        title="Add Widget"
        onClick={addCustomWidget}
        id="generateWidget"
        className="generateWidget"
      >
        +
      </button>

      <div className="featuredParent" id="featuredParent">
        <Widget key={unique_id} weather={weather} cancel={cancel} />

        <div className="featuredItem">
          <span className="featuredTitle">Mail</span>
          <CancelIcon onClick={cancel} id="cancelIcon" className="cancelIcon" />
          <div className="featuredWeatherContainer">
            <span className="featuredTemperature">99+</span>
            <MarkEmailUnreadIcon
              className="featuredIcon"
              onClick={() =>
                window.open("https://mail.google.com/mail/u/0/#inbox")
              }
            />
          </div>
        </div>

        <div className="featuredItem">
          <span className="featuredTitle">Calendar</span>
          <CancelIcon onClick={cancel} id="cancelIcon" className="cancelIcon" />
          <div className="featuredWeatherContainer">
            <span className="featuredTemperature">{date.toDateString()}</span>
            <CalendarMonthIcon className="featuredIcon" />
          </div>
        </div>
        <div className="featuredItem">
          <span className="featuredTitle">Timezone</span>
          <CancelIcon onClick={cancel} id="cancelIcon" className="cancelIcon" />
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
        <Timezone date={date} cancel={cancel} />
        {featuredWidgets}
      </div>
    </div>
  );

  function generateWeatherData() {
    function success(position: any) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      const ApiKey = "5a1472c2dddb301e3e2523d4d6081e0e";
      const API = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${ApiKey}`;

      fetch(API)
        .then((response) => response.json())
        .then((data) => [
          setWeather({
            key: unique_id,
            title: "Weather",
            city: data.name,
            temperature: Math.floor(data.main.temp) - 273 + "\u00B0 C",
          }),
        ]);
    }

    function error() {
      setWeather({
        title: "Weather",
        temperature: "Failed to fetch weather data",
      });
    }

    if (!navigator.geolocation) {
      setWeather({
        temperature: "Geolocation is not supported by your browser",
      });
    } else {
      setWeather({ temperature: "Locatingâ€¦" });
      navigator.geolocation.getCurrentPosition(success, error);
    }
  }
}