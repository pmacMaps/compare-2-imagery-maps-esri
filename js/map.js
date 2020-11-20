require([
  'esri/Map',
  'esri/views/MapView',
  'esri/widgets/Home',
  'esri/Basemap',
  'esri/layers/TileLayer',
  'esri/widgets/Swipe'],
function(Map, MapView, Home, Basemap, TileLayer, Swipe) {

  // basemap with no features > provides correct CRS and tile scheme
  const basemap = new Basemap({
    baseLayers: [
      new TileLayer({
        url: "https://gis.ccpa.net/arcgiswebadaptor/rest/services/Property_Assessment/No_Parcels_Basemap/MapServer"
      })
    ]
  });

  // webmap object
  const map = new Map({
    basemap: basemap
  });

  // map view object
  const mapView = new MapView({
    map: map,
    container: "map-container",
    zoom: 0,
    center: [-77.25, 40.15]
  });

  // 2012 imagery > cached map service
  const img2012 = new TileLayer({
    url: "https://gis.ccpa.net/arcgiswebadaptor/rest/services/Imagery/Imagery2012/MapServer",
    title: '2012'
  });

  // 2020 imagery > cached map service
  const img2020 = new TileLayer({
    url: "https://gis.ccpa.net/arcgiswebadaptor/rest/services/Imagery/Imagery2020/MapServer",
    title: '2020'
  });

  // add layers to map
  map.add(img2012);
  map.add(img2020);

  // swipe ui
  const swipe = new Swipe({
    view: mapView,
    leadingLayers: [img2012],
    trailingLayers: [img2020],
    direction: "horizontal",
    position: 50
  });

 // add swipe ui to app
  mapView.ui.add(swipe);

  const homeWidget = new Home({
    view: mapView,
    label: 'Initial Map Extent'
  });

  // adds the home widget to the top left corner of the MapView
  mapView.ui.add(homeWidget, "top-left");

});