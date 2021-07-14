import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import Image from "components/Image";

import "./TimelineItem.scss";
import CollapsibleTimelineContent from "components/CollapsibleTimelineContent";

const TimelineItem = ({
  invert,
  imageFileName,
  imageAlt,
  imageContent,
  tooltip,
  header,
  subheader,
  content,
}) => {
  const headerPart = header ? <h3>{header}</h3> : null;
  const subheaderPart = subheader ? <h5 className="subheading">{subheader}</h5> : null;

  const liClassName = clsx("timeline-item", { "timeline-inverted": invert });

  return (
    <li className={liClassName}>
      <div className="timeline-image">
        {imageContent || (
          <Image
            className="rounded-circle img-fluid"
            fileName={imageFileName}
            alt={imageAlt || header || subheader}
          />
        )}
      </div>
      <div className="timeline-panel">
        <div className="timeline-heading">
          {headerPart}
          {subheaderPart}
        </div>
        <div className="timeline-body">
          <p className={'text-muted'}>
            <CollapsibleTimelineContent content={content} tooltip={tooltip || ''} />
          </p>
        </div>
      </div>
    </li>
  );
};

TimelineItem.propTypes = {
  invert: PropTypes.bool,
  imageFileName: PropTypes.string,
  imageAlt: PropTypes.string,
  imageContent: PropTypes.any,
  header: PropTypes.string,
  subheader: PropTypes.string,
  content: PropTypes.string,
  tooltip: PropTypes.string
};

TimelineItem.defaultProps = {
  invert: false,
  imageFileName: "",
  imageAlt: "",
  imageContent: null,
  header: "",
  subheader: "",
  content: "",
  tooltip: ""
};

export default TimelineItem;
