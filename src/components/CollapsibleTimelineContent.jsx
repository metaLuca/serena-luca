import React, {useState} from "react";
import {Collapse} from "react-bootstrap";
import ReactMarkdown from "react-markdown";

import './CollapsibleTimelineContent.scss';

const CollapsibleTimelineContent = ({content = '', tooltip = ''}) => {
    const [open, setOpen] = useState(false);
    const emptyTooltip = tooltip === '';
    if (emptyTooltip)
        return content;


    return (
        <>
            <div
                className="collapse-header"
                onClick={() => setOpen(!open)}
                aria-controls="collapse-text"
                aria-expanded={open}
            >
                {content} {open ? '−' : '＋'}
            </div>
            <Collapse in={open}>
                <div id="collapse-text" className="collapse-content">
                    <ReactMarkdown>{tooltip}</ReactMarkdown>
                </div>
            </Collapse>
        </>
    );
};

export default CollapsibleTimelineContent;
