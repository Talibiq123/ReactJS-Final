import './about.css';
// import './Assets/profile.png';
import profileImage from './Assets/profile.png';

function About() {
    return (
        <div className="about">
            <h1>About Me</h1>
            <div className='pic'>
                <img src={profileImage} alt=''/>
            </div>
            <p>Hello Everyone! I am thrilled to introduce myself as someone with a passion for software and a track record of succes in the 
            industry. With five years of working at prestigious company like Amazon and Microsoft, as well as contributing to exciting startup 
            like Think24 and Openhouse, I have honed my skills and gained invaluable knowledge along the way.</p>
            <br />
            <p>Beyond my professional endeavors, I have also dedicated a significant portion of my career to teaching and mentoring aspiring 
            software professionals. Over the past three years, I have had the priviledge of instructing thousands of students across various institutions
             througout India. It has been immensely rewarding to witness their growth and seee them flourish in their own journeys.</p>
            <br />
            <p>Currently, I am embarking on a new adventure by creating my own startup. This venture allows me to combine my technical expertise  
            , entrepreneurialship spirit and desire to make a impact on the world of software. I am excited to tackle the challeges and opportunies 
            that lie ahead, and I am eager to connect with like-minded individuals who share my passion for innovation and growth.</p>
            <br />
            <p>Thanks you for this opportunity to introduce myself and I look forward to engage with all of you in the exciting world of software 
            development and entrepreneurialship.</p>
            <br />
            <hr />
        </div>
    );
}
export default About;