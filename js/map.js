require([
  'esri/Map',
  'esri/views/MapView',
  'esri/widgets/Home',
  'esri/layers/TileLayer',
  'esri/widgets/Swipe'],
function(Map, MapView, Home, TileLayer, Swipe) {

  // webmap object
  const map = new Map({});

  // map view object
  const mapView = new MapView({
    map: map,
    container: "map",
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

  // roads & municipal boundaries
  // https://gis.ccpa.net/arcgiswebadaptor/rest/services/Property_Assessment/Roads_Municipal_Boundaries/MapServer
  const refLayer = new TileLayer({
    url: "https://gis.ccpa.net/arcgiswebadaptor/rest/services/Property_Assessment/Roads_Municipal_Boundaries/MapServer",
    title: 'Reference Data'
  });

  // add layers to map
  map.add(img2012);
  map.add(img2020);
  map.add(refLayer);

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