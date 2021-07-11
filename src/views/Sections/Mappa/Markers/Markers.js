import park from 'content/assets/images/markers/Parking_8.png';
import church from 'content/assets/images/markers/Church_5.png';
import defaultIcon from 'leaflet/dist/images/marker-icon.png';
import {Icon} from "leaflet/dist/leaflet-src.esm";

export const MKARKER_TYPE = { CHURCH: 'church', PARK: 'park' }

const getIcon = (icon, height = 45, width = 45) =>
    new Icon({
        iconUrl: icon,
        iconSize: [height, width]
    });


export const getMarkerIcon = (markerType) => {
    if(MKARKER_TYPE.CHURCH === markerType)
        return getIcon(church, 60, 60)
    if(MKARKER_TYPE.PARK === markerType)
        return getIcon(park)
    return getIcon(defaultIcon)
}