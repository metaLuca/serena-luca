import React from "react";
import PropTypes from "prop-types";
import './Mappa.scss';

import PageSection from "components/PageSection";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Mappa = ({className = '', frontmatter}) => {
    if (!frontmatter) {
        return null;
    }

    const {anchor, settings, markers = []} = frontmatter;
    return (
        <PageSection className={className + ' fullwidth no-padding'} id={anchor}>
            <MapContainer center={settings.position} zoom={13} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {markers.map(({id, title, description, lat, lng}) =>
                    <Marker key={id} position={[lat, lng]}>
                        <Popup>{title}-{description}</Popup>
                    </Marker>
                )}
            </MapContainer>
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
