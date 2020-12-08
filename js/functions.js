// add layer to map
const addLayerToMap = (webmap, layer) => {
    webmap.add(layer);
}

// remove layer to map
const removeLayerFromMap = (webmap, layer) => {
    webmap.remove(layer);
}

// create Swipe Widget
const createSwipeWidget = (swipe, view, year1Layer, year2Layer, referenceLayer) => {
    const swipeWidget = new swipe({
        view: view,
        leadingLayers: [year1Layer, referenceLayer],
        trailingLayers: [year2Layer, referenceLayer],
        direction: "horizontal",
        position: 50
    });

    return swipeWidget;
}

// set label for years being compared
const setImageryLabels = (swipeWidget, uiYear1, uiYear2) => {
    // get titles/labels
    const year1 = swipeWidget.leadingLayers.items[0].title;
    const year2 = swipeWidget.trailingLayers.items[0].title;
    // set labels
    uiYear1.innerHTML = year1;
    uiYear2.innerHTML = year2;
}