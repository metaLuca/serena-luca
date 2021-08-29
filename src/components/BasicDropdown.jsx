import React from 'react'
import './BasicDropdown.scss'

export const BasicDropdown = ({children}) => (
    <div className="simple-dropdown popover bs-popover-bottom">
        <div className="arrow"
             style={{transform: 'translate3d(24px, 0px, 0px)'}}/>
        {children}
    </div>
)