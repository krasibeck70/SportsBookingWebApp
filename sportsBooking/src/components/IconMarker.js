import L from 'leaflet';

const Icon = new L.Icon({
    //iconUrl: require('../pictures/marker1.svg'),
    //iconRetinaUrl: require('../pictures/marker1.svg'),
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(60, 75),
    className: 'leaflet-div-icon'
});

export default { Icon };