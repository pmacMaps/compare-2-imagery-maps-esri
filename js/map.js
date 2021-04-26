require([
  'esri/Map',
  'esri/views/MapView',
  'esri/widgets/Home',
  'esri/widgets/Swipe',
  'esri/layers/TileLayer'
  ],
  function(Map, MapView, Home, Swipe, TileLayer) {
    // DOM Elements
    // placeholder areas for years display for users
    const year1UI = document.getElementById('year1display');
    const year2UI = document.getElementById('year2display');
    // select years element
    const selectSubmitEl = document.getElementById('selectYearsSubmit');
    // add event listenere
    selectSubmitEl.addEventListener('click', function() {
      getUserSelectedYears(map, mapView, arrayOfYears, refLayer, Swipe);
      setImageryLabels(year1UI, year2UI,'.year-label');
      $('#selectModal').modal('hide');
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

    // 1998 imagery > cached map service
    const img1998 = new TileLayer({
      url: "https://gis.ccpa.net/arcgiswebadaptor/rest/services/Imagery/Imagery1998/MapServer",
      title: '1998'
    });

    // 2003 imagery > cached map service
    const img2003 = new TileLayer({
      url: "https://gis.ccpa.net/arcgiswebadaptor/rest/services/Imagery/Imagery2003/MapServer",
      title: '2003'
    });

    // 2008 imagery > cached map service
    const img2008 = new TileLayer({
      url: "https://gis.ccpa.net/arcgiswebadaptor/rest/services/Imagery/Imagery2008/MapServer",
      title: '2008'
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

    // list of imagery years
    const arrayOfYears = [img1998, img2003, img2008, img2012, img2016, img2020];

    // map initial extent widget
    const homeWidget = new Home({
      view: mapView,
      label: 'Initial Map Extent'
    });

    // adds the home widget to the top left corner of the MapView
    mapView.ui.add(homeWidget, "top-left");
});