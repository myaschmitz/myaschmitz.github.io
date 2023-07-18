import React, { useState } from 'react';
import resumePdf from "../files/mya-schmitz-resume.pdf"

const Resume = () => {
    // default to collapsed resume
    const [isCollapsed, setIsCollapsed] = useState(true);

    const handleButtonClick = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        // TODO: If on mobile, have link to open resume in a new page rather than expand/collapse

        <div
            className="resume-button-container" style={{
                height: isCollapsed ? 'auto' : '100vh',
                overflow: isCollapsed ? 'hidden' : 'visible'
            }}>
            <h1>Resume</h1>
            <button className="resume-button" onClick={handleButtonClick}>{isCollapsed ? 'Expand' : 'Collapse'}</button><br />
            {isCollapsed ? null : (<iframe src={resumePdf} title="Resume" className="resume" />)}

        </div>
    );
};

export default Resume;