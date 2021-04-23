// gets years selected by user, and then constructs Swipe Widget
const getUserSelectedYears = (webmap, webmapView, yearsArray, referenceLayer, swipe) => {
    // remove previous layers
    removeLayerFromMap(webmap, referenceLayer)
    //
    yearsArray.forEach(element => removeLayerFromMap(webmap, element));
    // view.ui.remove
    const swipeWidgetFind = webmapView.ui.find('testSwipeWidget');

    if (swipeWidgetFind !== null) {
        webmapView.ui.remove('testSwipeWidget');
    }

    // year 1 selected by user
    const year1Select = document.getElementById('year1Select').value;
    // year 2 selected by user
    const year2Select = document.getElementById('year2Select').value;
    // map service for swipe app
    let year1;
    let year2;

    switch(year1Select) {
        case '1998':
            addLayerToMap(webmap, yearsArray[0]);
            year1 = yearsArray[0];
            break;
        case '2003':
            addLayerToMap(webmap, yearsArray[1]);
            year1 = yearsArray[1];
            break;
        case '2008':
            addLayerToMap(webmap, yearsArray[2]);
            year1 = yearsArray[2];
            break;
        case '2012':
            addLayerToMap(webmap, yearsArray[3]);
            year1 = yearsArray[3];
            break;
        case '2016':
            addLayerToMap(webmap, yearsArray[4]);
            year1 = yearsArray[4];
            break;
        case '2020':
            addLayerToMap(webmap, yearsArray[5]);
            year1 = yearsArray[5];
            break;
        default:
            console.warn('no appropriate year1 selected');
    }

    switch(year2Select) {
        case '1998':
            addLayerToMap(webmap, yearsArray[0]);
            year2 = yearsArray[0];
            break;
        case '2003':
            addLayerToMap(webmap, yearsArray[1]);
            year2 = yearsArray[1];
            break;
        case '2008':
            addLayerToMap(webmap, yearsArray[2]);
            year2 = yearsArray[2];
            break;
        case '2012':
            addLayerToMap(webmap, yearsArray[3]);
            year2 = yearsArray[3];
            break;
        case '2016':
            addLayerToMap(webmap, yearsArray[4]);
            year2 = yearsArray[4];
            break;
        case '2020':
            addLayerToMap(webmap, yearsArray[5]);
            year2 = yearsArray[5];
            break;
        default:
            console.warn('no appropriate year2 selected');
    }

    // add reference (roads/municipal boundaries) to web map
    addLayerToMap(webmap, referenceLayer);

    // construct swipe widget
    const swipeComponent = createSwipeWidget(swipe, webmapView, year1, year2, referenceLayer);
    // add swipe widget to web map
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
        position: 50,
        id: 'testSwipeWidget'
    });

    return swipeWidget;
}

// set label for years being compared
const setImageryLabels = (uiYear1, uiYear2) => {
    // get titles/labels
    const year1Select = document.getElementById('year1Select').value;
    const year2Select = document.getElementById('year2Select').value;
    // set labels
    uiYear1.innerHTML = year1Select;
    uiYear2.innerHTML = year2Select;
}