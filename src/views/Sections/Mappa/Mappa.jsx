import React from "react";
import PropTypes from "prop-types";

import { Row } from "react-bootstrap";

import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
        <GoogleMap
            defaultZoom={8}
            defaultCenter={{ lat: -34.397, lng: 150.644 }}
        >
          <Marker position={{ lat: -34.397, lng: 150.644 }} />
        </GoogleMap>
    ))

const  API_KEY = 'AIzaSyCebn0d2bk2M_gMWYsj0RK4LjmwKLoMFp4';
const Mappa = ({ className = '', frontmatter }) => {
    if (!frontmatter) {
      return null;

  }

  const { anchor, header: rootHeader, subheader: rootSubHeader, markers = [] } = frontmatter;
    return (
    <PageSection className={className + ' fullwidth no-padding'} id={anchor}>
      <Row>
        <SectionHeader header={rootHeader} subheader={rootSubHeader} />
      </Row>
      <MyMapComponent
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${API_KEY}v=3.exp&libraries=geometry,drawing,places`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
      />
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
