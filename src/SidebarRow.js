import React from 'react';
import './SidebarRow.css';

function SidebarRow({selected, Icon, title}) {
    return (
        <div className={`sidebarRow ${selected && 'selected'}`}>
            <Icon className="sidebar-icon"  />
            <h2 className="sidebar-title">{title}</h2>
        </div>
    )
}

export default SidebarRow
