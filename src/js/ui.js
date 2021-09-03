// add layer to map
export const addLayerToMap = (webmap, layer) => {
    webmap.add(layer);
}

// remove layer to map
export const removeLayerFromMap = (webmap, layer) => {
    webmap.remove(layer);
}

// create Swipe Widget
export const createSwipeWidget = (swipe, view, year1Layer, year2Layer, referenceLayer) => {
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
export const setImageryLabels = (uiYear1, uiYear2, labelClass) => {
    // get titles/labels
    const year1Select = document.getElementById('year1Select').value;
    const year2Select = document.getElementById('year2Select').value;
    // set labels
    uiYear1.innerHTML = year1Select;
    uiYear2.innerHTML = year2Select;
    // display labels
    displayImageryLabels(labelClass);
}

// display imagery labels
export const displayImageryLabels = (labelClass) => {
    // access dom elements
    const elements = document.querySelectorAll(labelClass);
    // display labels
    elements.forEach(element => {
        element.style.display = 'inline-block';
    });
}