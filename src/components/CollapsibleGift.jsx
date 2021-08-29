import React, {useState} from "react";
import {Collapse} from "react-bootstrap";

import './CollapsibleTimelineContent.scss';

const CollapsibleTimelineContent = ({title = '', content}) => {
    const [open, setOpen] = useState(false);
    const openCloseSymbol = open ? '-' : '+';

    return (
        <>
            <div
                className="collapse-header"
                onClick={() => setOpen(!open)}
                aria-controls="collapse-text"
                aria-expanded={open}
            >
                {openCloseSymbol} {title} {openCloseSymbol}
            </div>
            <Collapse in={open}>
                <div id="collapse-text" className="collapse-content">
                    {content}
                </div>
            </Collapse>
        </>
    );
};

export default CollapsibleTimelineContent;
