import mapboxgl from "mapbox-gl";
import { useEffect } from "react";

const Map = () => {
  useEffect(() => {
    console.log("Testing how many runs");

    mapboxgl.accessToken =
      "pk.eyJ1IjoicmFtaWRldjc3IiwiYSI6ImNsbHpodWcyaTExazkzZHM2NTN3NzlhNWYifQ.suBN9luCpHgHqqdlOpo77w";
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v12",
      center: [12.412, 13.2412],
      zoom: 12,
    });
  }, []);
  return <div id="map" style={{ width: "100%", height: "400px" }}></div>;
};

export default Map;
