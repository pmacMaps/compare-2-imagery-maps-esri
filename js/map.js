require([
  'esri/Map',
  'esri/views/MapView',
  'esri/widgets/Home',
  'esri/widgets/Swipe',
  'esri/layers/TileLayer'
  ],
function(Map, MapView, Home, Swipe, TileLayer) {

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

  // 2016 imagery > cached map service
  const img2016 = new TileLayer({
    url: "https://gis.ccpa.net/arcgiswebadaptor/rest/services/Imagery/Imagery2016/MapServer",
    title: '2016'
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
  // initial state of map
  // should let users define initial layers?
  // call within swipe function?
  addLayerToMap(map, img2012);
  addLayerToMap(map, img2020);
  addLayerToMap(map, refLayer);

  let swipeComponent = createSwipeWidget(Swipe, mapView, img2012, img2020, refLayer);

  // add swipe ui to app
  mapView.ui.add(swipeComponent);

  const homeWidget = new Home({
    view: mapView,
    label: 'Initial Map Extent'
  });

  // adds the home widget to the top left corner of the MapView
  mapView.ui.add(homeWidget, "top-left");

  // how best to process this
  //let year1 = swipeWidget.leadingLayers.items[0].title;
  //let year2 = swipeWidget.trailingLayers.items[0].title

  // placeholders for years
  const year1UI = document.getElementById('year1display');
  const year2UI = document.getElementById('year2display');

  // set content
  //year1UI.innerHTML = year1;
  //year2UI.innerHTML = year2;

});