import React from 'react';
import resumePdf from "../files/mya-schmitz-resume.pdf";

const Skills = () => {
    return (
        <div className='section-container' style={{ background: 'var(--color-light-orange-accent)' }}>
            <h2 className="section-header">MY SKILLS</h2>
            <div className='underline' style={{ background: 'var(--color-tertiary)' }}></div>
            <div className='skills-container'>
                <div>
                    <h3>Programming Languages</h3>
                    <p>C#, Java, HTML/CSS, JavaScript, TypeScript, Python, SQL</p>
                </div>
                <div>
                    <h3>Technologies & Frameworks</h3>
                    <p>.NET Core, Entity Framework Core, Node.js, Express.js, Next.js, Svelte, SvelteKit, React, 
                        Tailwind CSS
                    </p>
                </div>
                <div>
                    <h3>Tools & Platforms</h3>
                    <p>Agile Methodology, Jira, Git, Azure DevOps, PostgreSQL, Firebase, Firestore, 
                        Amazon CloudWatch
                    </p>
                </div>
            </div>
            <div className='skills-resume'>Check out my resume <a className='resume-link' href={resumePdf} target='_blank' rel="noreferrer">here</a> to learn more about my skills and experiences!</div>
        </div>
    );
};

export default Skills;