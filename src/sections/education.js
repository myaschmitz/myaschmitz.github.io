import uwMadison from '../images/crest-only-logo-print-color.png';

const Education = () => {
    return (
        <div className="section-container">
            <h2 className={"section-header"}>EDUCATION</h2>
            <div className="underline"></div>
            <div className="section-container" style={{padding: '5vh 0', paddingTop: '0px', width: '80%' }}>
                <img src={uwMadison} alt="University of Wisconsin-Madison crest logo" className="education-logo" />
                <h2 className="lightweight" style={{ textAlign: 'center' }}>UNIVERSITY OF WISCONSIN-MADISON</h2>
                <p style={{ fontSize: '12px', marginTop: '-10px' }}>2018 - 2022</p>
                <p style={{ marginBottom: '4px' }}>B.S. Computer Engineering</p>
                <p style={{ marginTop: '4px', marginBottom: '4px' }}>B.S. Computer Science</p>
                <p style={{ marginTop: '4px', marginBottom: '4px' }}>French certificate</p>
            </div>
        </div>
    );
};

export default Education;