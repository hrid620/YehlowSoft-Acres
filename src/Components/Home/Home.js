import React from 'react';
import Banner from '../Banner/Banner';
import Certifications from '../Certifications/Certifications';
import Contact from '../Contact/Contact';
import Services from '../Services/Services';
import TeamMembers from '../TeamMembers/TeamMembers';
import Testimonials from '../Testimonials/Testimonials';
// import HeadBanner from '../HeadBanner/HeadBanner';




const Home = () => {
    return (
        <div>
            <Banner />
            {/* <HeadBanner /> */}
            <Services />
            <Certifications />
            <Testimonials />
            <TeamMembers />
            <Contact />

        </div>
    );
};

export default Home;