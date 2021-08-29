import React from "react";
import PropTypes from "prop-types";

import { Row, Col } from "react-bootstrap";
import PageSection from "components/PageSection";
import CollapsibleGift from "components/CollapsibleGift";

import './Gifts.scss';
// import Icon from "components/Icon";

const Gifts = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchor, header, subheader, description, iban, paypal } = frontmatter;

    const gifts = (
        <>
            <Row className="justify-content-center">
                <Col className="text-right" style={{display: 'flex', justifyContent: 'flex-end'}}>
                    {/*<Icon iconName={iban.image} size="2x"/>*/}
                    <p className="text-muted iban">{iban.description}</p>
                </Col>
                <Col className="text-left">
                    <p className="text-muted text-uppercase">{iban.number}</p>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col className="text-right" style={{display: 'flex', justifyContent: 'flex-end'}}>
                    {/*<Icon iconName={paypal.image} size="2x"/>*/}
                    <p className="text-muted iban">{paypal.description}</p>
                </Col>
                <Col className="text-left">
                    <a className="btn btn-success" href={paypal.link} target="_blank" rel="noreferrer">
                        paypal
                    </a>
                </Col>
            </Row>
        </>
    )

  return (
    <PageSection className={className + ' fullwidth less-padding'} id={anchor}>
      <Row className="justify-content-center">
        <Col lg={8} className="text-center">
          <h2 className="mt-0">{header}</h2>
          <hr className="divider my-4" />
          <p className="text-muted mb-5">{subheader}</p>
          <div className="gifts-show-more">
            <CollapsibleGift
                title={`${description}`}
                content={gifts}
            />
          </div>
        </Col>
      </Row>
    </PageSection>
  );
};

Gifts.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Gifts.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Gifts;
