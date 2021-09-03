import TileLayer from "@arcgis/core/layers/TileLayer";

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
  export const refLayer = new TileLayer({
    url: "https://gis.ccpa.net/arcgiswebadaptor/rest/services/Property_Assessment/Roads_Municipal_Boundaries/MapServer",
    title: 'Reference Data'
  });

  // list of imagery years
  export const arrayOfYears = [img1998, img2003, img2008, img2012, img2016, img2020];