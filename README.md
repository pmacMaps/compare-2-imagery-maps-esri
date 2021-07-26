# Compare 2 Imagery Years Swipe App

This repository contains sample code for developing an interactive "swipe" map app that allows users to compare two basemaps.  It was developed with orthoimagery or land use datasets in mind.

The app is built on the Esri ArcGIS JavaScript API 4.x.  The [Swipe Widget](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Swipe.html) is the primary Esri component powering the app.  It is using Bootstrap 4.x to make things look pretty.

Within a single session, users can choose different comparison scenarios.  Before a swipe widget is created, the app searches for an existing swipe widget, and removes it.

You can [view a demo](https://pmacmaps.github.io/compare-2-imagery-maps-esri).