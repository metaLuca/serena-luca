import React from "react";
import PropTypes from "prop-types";

import ImageCard from "components/ImageCard";
import {CalendarButton} from "components/CalendarButton";

const Top = ({ frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { header, subheader, imageFileName } = frontmatter;

  const extraInfo = (
      <CalendarButton />
  )

  return (
    <ImageCard
      imageFileName={imageFileName}
      header={header}
      subheader={subheader}
      extraInfo={extraInfo}
    />
  );
};

Top.propTypes = {
  frontmatter: PropTypes.object,
};

Top.defaultProps = {
  frontmatter: null,
};

export default Top;
