import React from 'react';
import { skillsContent } from "../content";

const Skills = () => {
    return (
        <div className='section-container' style={{ background: 'var(--color-light-orange-accent)' }}>
            <h2 className="section-header">MY SKILLS</h2>
            <div className='underline' style={{ background: 'var(--color-tertiary)' }}></div>
            <div className='skills-container'>
                <div>
                    <h3>Programming Languages</h3>
                    <p>{skillsContent.programmingLanguages}</p>
                </div>
                <div>
                    <h3>Technologies & Frameworks</h3>
                    <p>{skillsContent.technologiesFrameworks}</p>
                </div>
                <div>
                    <h3>Tools & Platforms</h3>
                    <p>{skillsContent.toolsPlatforms}</p>
                </div>
            </div>
            <div className='skills-resume'>{skillsContent.resumeText} <a className='resume-link' href="https://drive.google.com/file/d/1r2fMy5B16Ri29AJXlN9dhR20HGJFRUZf/view?usp=drive_link" target='_blank' rel="noreferrer">{skillsContent.resumeLinkText}</a> {skillsContent.resumeEndText}</div>
        </div>
    );
};

export default Skills;