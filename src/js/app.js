import "./import-jquery";
import * as bootstrap from 'bootstrap';
import mapView from "./map";

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

$( document ).ready(function() {
    $('#selectModal').modal('show');
});