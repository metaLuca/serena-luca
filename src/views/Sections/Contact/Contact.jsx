import React from "react";
import PropTypes from "prop-types";

import { Row, Col } from "react-bootstrap";
import Icon from "components/Icon";
import PageSection from "components/PageSection";

const Contact = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchor, telephone, emails } = frontmatter;

  return (
    <PageSection className={className + ' less-padding'} id={anchor}>
      <Row>
        <Col lg={4} className="ml-auto text-center">
          <Icon iconName="PhoneIcon" size="3x" className="text-muted mb-3" />
          <a className="d-block" href={`tel:${telephone}`}>
            {telephone}
          </a>
        </Col>
        {emails.map(email => (
          <Col lg={4} className="mr-auto text-center" key={email}>
            <Icon iconName="EnvelopIcon" size="3x" className="text-muted mb-3"/>
            <a className="d-block" href={`mailto:${email}`}>
              {email}
            </a>
          </Col>
        ))}
      </Row>
    </PageSection>
  );
};

Contact.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Contact.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Contact;
