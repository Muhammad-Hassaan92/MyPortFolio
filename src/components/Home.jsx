import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import MyNavBar from './NavBar';
import Hero from './basic/Hero';
import Hero2 from './basic/Hero2';
import Heading from './basic/Heading';
import Box from './basic/Box';
import Product from './basic/Product';
import FeedbackSlider from './basic/FeedBackSlider';
import Blog from './basic/Blog';
import ContactForm from './basic/ContactForm';
import Footer from './basic/Footer';
import PartnerSlider from './basic/PartnerSlider';
import SkillsSection from './basic/Skills';

const Home = () => {
    return (
        <div>
            <MyNavBar />

            <Hero />

            <Hero2 />

            <Heading superheading="My Service" heading="SERVCES I OFFER" />

            <div className='container-fluid'>
                <div className="row px-5">
                    <Box heading="UI/UX Design" text="Designing clean interfaces and smooth experiences that engage users and meet business goals." image="public\assets\boximg.png" />
                    <Box heading="UI/UX Design" text="Designing clean interfaces and smooth experiences that engage users and meet business goals." image="public\assets\boximg.png" />
                    <Box heading="UI/UX Design" text="Designing clean interfaces and smooth experiences that engage users and meet business goals." image="public\assets\boximg.png" />
                    <Box heading="UI/UX Design" text="Designing clean interfaces and smooth experiences that engage users and meet business goals." image="public\assets\boximg.png" />
                    <Box heading="UI/UX Design" text="Designing clean interfaces and smooth experiences that engage users and meet business goals." image="public\assets\boximg.png" />
                    <Box heading="UI/UX Design" text="Designing clean interfaces and smooth experiences that engage users and meet business goals." image="public\assets\boximg.png" />
                    <Box heading="UI/UX Design" text="Designing clean interfaces and smooth experiences that engage users and meet business goals." image="public\assets\boximg.png" />
                    <Box heading="UI/UX Design" text="Designing clean interfaces and smooth experiences that engage users and meet business goals." image="public\assets\boximg.png" />
                </div>
            </div>

            <Heading superheading="Testimonial" heading="CLIENT FEEDBACK" />

            <FeedbackSlider />

            <Heading superheading="My Portfolio" heading="VISIT MY PORTFOLIO" />

            <div className="container-fluid">
                <div className="row d-flex justify-content-center mx-md-5 px-md-5">
                    <Product image="public\assets\product.png" title="Modern Desk" description="Minimalist Workspace" />
                    <Product image="public\assets\product.png" title="Modern Desk" description="Minimalist Workspace" />
                    <Product image="public\assets\product.png" title="Modern Desk" description="Minimalist Workspace" />
                </div>
                <div className="row d-flex justify-content-center mx-md-5 px-md-5">
                    <Product image="public\assets\product.png" title="Modern Desk" description="Minimalist Workspace" />
                    <Product image="public\assets\product.png" title="Modern Desk" description="Minimalist Workspace" />
                    <Product image="public\assets\product.png" title="Modern Desk" description="Minimalist Workspace" />
                </div>
            </div>

            <Heading superheading="Partners" heading="REPUTED PARTNERS" />

            <PartnerSlider/>

            <Heading superheading="My Skills" heading="SKILLS SECTION" />

            <SkillsSection/>

            <Heading superheading="My Blog" heading="LATEST BLOG" />

            <div className="container-fluid">
                <div className="row mx-5">
                    <Blog image="https://umer879.github.io/portfolio/assets/blogTwo-BnxQAOF1.avif" date="July 16, 2025" heading="Boost Your App with Bootstrap" />
                    <Blog image="https://umer879.github.io/portfolio/assets/blogTwo-BnxQAOF1.avif" date="July 16, 2025" heading="Boost Your App with Bootstrap" />
                    <Blog image="https://umer879.github.io/portfolio/assets/blogTwo-BnxQAOF1.avif" date="July 16, 2025" heading="Boost Your App with Bootstrap" />
                </div>
            </div>

            <Heading superheading="My Contact " heading="I WANT TO HEAR FROM YOU" />

            <ContactForm />

            <Footer />

        </div>
    );
};

export default Home;