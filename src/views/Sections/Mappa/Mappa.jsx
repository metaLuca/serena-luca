import React from "react";
import PropTypes from "prop-types";
import './Mappa.scss';

import PageSection from "components/PageSection";
import { MapContainer, Marker, Popup } from 'react-leaflet';

const Mappa = ({className = '', frontmatter}) => {
    if (!frontmatter) {
        return null;
    }

    const {anchor, settings, markers = []} = frontmatter;
    const {position, zoom} = settings;
    console.log('SETTING', settings, anchor, markers)
    return (
        <PageSection className={className + ' fullwidth no-padding'} id={anchor}>

            {typeof window !== 'undefined' &&
            <MapContainer center={position} zoom={zoom} scrollWheelZoom={true}>
                {markers.map(({id, title, description, lat, lng}) =>
                    <Marker key={id} position={[lat, lng]}>
                        <Popup>{title}-{description}</Popup>
                    </Marker>
                )}
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
