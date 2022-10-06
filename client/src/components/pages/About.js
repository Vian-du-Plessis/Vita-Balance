import React from 'react';
import styles from './About.module.scss';

const About = () => {
    return (
        <div className={styles.container}>
            <div></div>
            <div className={styles.about__us}>
                <h1>About us</h1>

                <div>
                    <p>
                        We are a group of students working on project surrounding product design, coding and building. For this project specificly we explore our project through a companies perspective or at least part of it.                
                    </p>

                    <br/>
                    <p>
                        We are working on ways to connect our product to a brand and company with the use of diffirent specialities and skills within our groups.
                    </p>
                </div>
            </div>

            <div className={styles.about__us}>
                <h1>About our Products</h1>

                <div>
                    <p>
                        We focus on our users health by automating and regulating our viewers enviorment so that it may benefit them.
                    </p>
                </div>
            </div>
            <div></div>
        </div>
    );
};

export default About;