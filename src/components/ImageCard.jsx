import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { Container, Card } from "react-bootstrap";
import Image from "components/Image";
import "./ImageCard.scss";

const ImageCard = ({ className, imageFileName, imageAlt, header, subheader, subsubheader, description, extraInfo }) => {
  return (
    <Card className={clsx("image-card bg-dark text-top-color text-center", className)}>
      <Image className="image img-position" fileName={imageFileName} alt={imageAlt || header || subheader} />
      <Card.ImgOverlay className="no-padding">
        <Container>
          <div className="intro-text">
            <div className="intro-lead-in">{subheader}</div>
            <div className="intro-heading text-uppercase">{header}</div>
            <div className="intro-lead-in">{subsubheader}</div>
            <div className="intro-description">{description}</div>
            {extraInfo}
          </div>
        </Container>
      </Card.ImgOverlay>
    </Card>
  );
};

ImageCard.propTypes = {
  className: PropTypes.string,
  imageFileName: PropTypes.string,
  imageAlt: PropTypes.string,
  header: PropTypes.string,
  subheader: PropTypes.string,
  extraInfo: PropTypes.any,
};

ImageCard.defaultProps = {
  className: null,
  imageFileName: null,
  imageAlt: null,
  header: "",
  subheader: "",
  extraInfo: null,
};

export default ImageCard;
