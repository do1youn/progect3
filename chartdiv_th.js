var chart = AmCharts.makeChart("chartdiv_th", {
    "type": "serial",
    "theme": "light",
    "legend": {
        "useGraphSettings": true
    },
    "dataProvider": [{
        "year": 1,
        "italy": 1,
        "germany": 5,
        "uk": 3
    }, {
        "year": 2,
        "italy": 1,
        "germany": 2,
        "uk": 6
    }, {
        "year": 3,
        "italy": 2,
        "germany": 3,
        "uk": 1
    }, {
        "year": 4,
        "italy": 3,
        "germany": 4,
        "uk": 1
    }, {
        "year": 5,
        "italy": 5,
        "germany": 1,
        "uk": 2
    }, {
        "year": 6,
        "italy": 3,
        "germany": 2,
        "uk": 1
    }, {
        "year": 7,
        "italy": 1,
        "germany": 2,
        "uk": 3
    }, {
        "year": 8,
        "italy": 2,
        "germany": 1,
        "uk": 5
    }, {
        "year": 9,
        "italy": 3,
        "germany": 5,
        "uk": 2
    }, {
        "year": 10,
        "italy": 4,
        "germany": 3,
        "uk": 6
    }, {
        "year": 11,
        "italy": 1,
        "germany": 2,
        "uk": 4
    }],
    "valueAxes": [{
        "integersOnly": true,
        "maximum": 6,
        "minimum": 1,
        "reversed": true,
        "axisAlpha": 0,
        "dashLength": 5,
        "gridCount": 10,
        "position": "left",
        "title": "Place taken"
    }],
    "startDuration": 0.5,
    "graphs": [{
        "balloonText": "place taken by Italy in [[category]]: [[value]]",
        "bullet": "round",
        "hidden": true,
        "title": "Italy",
        "valueField": "italy",
		"fillAlphas": 0
    }, {
        "balloonText": "place taken by Germany in [[category]]: [[value]]",
        "bullet": "round",
        "title": "Germany",
        "valueField": "germany",
		"fillAlphas": 0
    }, {
        "balloonText": "place taken by UK in [[category]]: [[value]]",
        "bullet": "round",
        "title": "United Kingdom",
        "valueField": "uk",
		"fillAlphas": 0
    }],
    "chartCursor": {
        "cursorAlpha": 0,
        "zoomable": false
    },
    "categoryField": "year",
    "categoryAxis": {
        "gridPosition": "start",
        "axisAlpha": 0,
        "fillAlpha": 0.05,
        "fillColor": "#000000",
        "gridAlpha": 0,
        "position": "top"
    },
    "export": {
    	"enabled": true,
        "position": "bottom-right"
     }
});
