import React from "react";
import PropTypes from "prop-types";

import { Container, Row, Col } from "react-bootstrap";
import * as SocialIcons from "components/SocialIcons";

const Footer = ({ props }) => {

  return (
    <footer className="footer py-3">
      <Container>
        <Row className="align-items-center text-center">
          <Col lg={9} className="text-lg-right" />
          <Col lg={3} className="text-lg-right">
            <i>Made with️</i>
            <span>❤ </span>
            <i> by Luca</i>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

Footer.propTypes = {
  frontmatter: PropTypes.object,
};

Footer.defaultProps = {
  frontmatter: null,
};

export default Footer;
