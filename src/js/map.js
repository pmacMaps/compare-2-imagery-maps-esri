import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import Home from "@arcgis/core/widgets/Home";

// webmap object
const map = new Map({});

// map view object
const mapView = new MapView({
  map: map,
  container: "map",
  zoom: 0,
  center: [-77.25, 40.15]
});

// map initial extent widget
const homeWidget = new Home({
  view: mapView,
  label: 'Initial Map Extent'
});

// adds the home widget to the top left corner of the MapView
mapView.ui.add(homeWidget, "top-left");