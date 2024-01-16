import React, { useState } from 'react';
import resumePdf from "../files/mya-schmitz-resume.pdf";

const Skills = () => {
    return (
        <div className='section-container' style={{ background: 'var(--color-light-orange-accent)' }}>
            <h2 className={"section-header"}>MY SKILLS</h2>
            <div className='underline' style={{ background: 'var(--color-tertiary)' }}></div>
            <div style={{ width: '80%', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', textAlign: 'center', gap: '6em' }}>
                <div>
                    <h3>Languages</h3>
                    <p>C, C#, HTML/CSS, JavaScript, Python, Assembly, Verilog, MATLAB</p>
                </div>
                <div>
                    <h3>Tools & Tech</h3>
                    <p>Git, Azure DevOps, .NET Core, Entity Framework, Node.js,
                        Express.js, PostgreSQL, Prisma ORM, React, Tailwind CSS
                    </p>
                </div>
            </div>
            <div className='skills-resume'>Check out my resume <a className='resume-link' href={resumePdf} target='_blank'>here</a> to learn more about my skills and experiences!</div>
        </div>
    );
};

export default Skills;