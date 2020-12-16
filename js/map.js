require([
  'esri/Map',
  'esri/views/MapView',
  'esri/widgets/Home',
  'esri/widgets/Swipe',
  'esri/layers/TileLayer'
  ],
function(Map, MapView, Home, Swipe, TileLayer) {
  // DOM Elements
  // placeholder areas for years
  const year1UI = document.getElementById('year1display');
  const year2UI = document.getElementById('year2display');
  // select years element
  const selectSubmitEl = document.getElementById('selectYearsSubmit');
  // add event listenere
  selectSubmitEl.addEventListener('click', function() {
    getUserSelectedYears();
  });

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

  const homeWidget = new Home({
    view: mapView,
    label: 'Initial Map Extent'
  });

  // adds the home widget to the top left corner of the MapView
  mapView.ui.add(homeWidget, "top-left");

  /* Initial State of App */
  // use pre-defined years?
  // or let user select
  //addLayerToMap(map, img2012);
  //addLayerToMap(map, img2020);
  //addLayerToMap(map, refLayer);

  // create Swipe Widget
  //let swipeComponent = createSwipeWidget(Swipe, mapView, img2012, img2020, refLayer);

  // add swipe ui to app
  //mapView.ui.add(swipeComponent);

  // set labels for years
  //setImageryLabels(swipeComponent, year1UI, year2UI);

});