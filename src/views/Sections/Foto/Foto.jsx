import React from "react";
import PropTypes from "prop-types";

import { Row, Col } from "react-bootstrap";
import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";

import "./Foto.scss";
import Image from "components/Image";

const Foto = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchor, header: rootHeader, subheader: rootSubHeader, album } = frontmatter;

  return (
    <PageSection className={className + ' no-padding-top'} id={anchor}>
      <Row>
        <SectionHeader header={rootHeader} subheader={rootSubHeader} />
          <a className="btn google-photo" href={album} target="_blank" rel="noreferrer">
              <Image className="image img-position" fileName={"PhotosIcon.png"} alt={"Google Photos Icon"} />
          </a>
      </Row>
     {/* <Row>
          <Col lg={12}>
          </Col>
      </Row>*/}
    </PageSection>
  );
};

Foto.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Foto.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Foto;
