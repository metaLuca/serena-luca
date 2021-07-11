import React from "react";
import PropTypes from "prop-types";
import './Mappa.scss';

import PageSection from "components/PageSection";
import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet';
import Client from "components/Client";
import {getMarkerIcon} from "views/Sections/Mappa/Markers/Markers";

const Mappa = ({className = '', frontmatter}) => {
    if (!frontmatter) {
        return null;
    }

    const {anchor, settings, markers = []} = frontmatter;
    const {position, zoom} = settings;

    return (
        <PageSection className={className + ' fullwidth no-padding'} id={anchor}>
            {typeof window !== 'undefined' &&
                <MapContainer center={position} zoom={zoom} scrollWheelZoom={true} className="map map-base">
                    <TileLayer
                        url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
                        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                    />
                    {markers.map(({id, title, description, href, lat, lng, icon}) => {
                        // const imgFile = `maps/${id}.png`
                        console.log(icon, getMarkerIcon(icon))
                        return (
                        <Marker key={id} position={[lat, lng]} icon={getMarkerIcon(icon)}>
                            <Popup>
                                <p className="capitalize"><strong>{title}</strong></p>
                                {/*<Image className="img-fluid d-block mx-auto" fileName={imgFile} alt={imgFile}/>*/}
                                {description && <p className="description">{description}</p>}
                                {href && <p className="maps">
                                    <Client href={href} imageFileName={'maps/a_auto.png'}/>
                                </p>}
                            </Popup>
                        </Marker>
                        )
                    })}
                </MapContainer>
            }
        </PageSection>
    );
};


Mappa.propTypes = {
    className: PropTypes.string,
    frontmatter: PropTypes.object,
};

Mappa.defaultProps = {
    className: null,
    frontmatter: null,
};

export default Mappa;
