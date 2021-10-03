import React from "react";
import PropTypes from "prop-types";

import ImageCard from "components/ImageCard";
// import {CalendarButton} from "components/CalendarButton";

const Top = ({ frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { header, subheader, imageFileName, description } = frontmatter;

  // const extraInfo = (
  //     <CalendarButton />
  // )

  return (
    <ImageCard
      imageFileName={imageFileName}
      header={header}
      subheader={subheader}
      description={description}
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
