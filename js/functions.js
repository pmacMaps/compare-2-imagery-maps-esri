const getUserSelectedYears = (webmap, webmapView, yearsArray, referenceLayer, swipe) => {
    const year1Select = document.getElementById('year1Select').value;
    const year2Select = document.getElementById('year2Select').value;
    let year1;
    let year2;

    switch(year1Select) {
        case '2012':
            addLayerToMap(webmap, yearsArray[0]);
            year1 = yearsArray[0];
            break;
        case '2016':
            addLayerToMap(webmap, yearsArray[1]);
            year1 = yearsArray[1];
            break;
        case '2020':
            addLayerToMap(webmap, yearsArray[2]);
            year1 = yearsArray[2];
            break;
        default:
            console.warn('no appropriate year1 selected');
    }

    switch(year2Select) {
        case '2012':
            addLayerToMap(webmap, yearsArray[0]);
            year2 = yearsArray[0];
            break;
        case '2016':
            addLayerToMap(webmap, yearsArray[1]);
            year2 = yearsArray[1];
            break;
        case '2020':
            addLayerToMap(webmap, yearsArray[2]);
            year2 = yearsArray[2];
            break;
        default:
            console.warn('no appropriate year2 selected');
    }

    addLayerToMap(webmap, referenceLayer);

    const swipeComponent = createSwipeWidget(swipe, webmapView, year1, year2, referenceLayer);

    webmapView.ui.add(swipeComponent);
}

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