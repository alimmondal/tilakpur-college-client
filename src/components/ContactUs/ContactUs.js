import React from 'react';
import './ContactUs.css';
import Navbar from '../Shared/Navbar/Navbar';
import ContactInfo from './ContactInfo/ContactInfo';import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, WebsiteRights, SocialIcons, SocialLogo, SocialIconLink, IconWrapper, ServicesIcon, FooterP } from '../../components/Shared/Footer/FooterElements';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';

const ContactUs = () => {

    const contactPageStyles = {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0fcfec',
        // fontWeight: '700',
        // color: '#fff'
    }

    return (
        <div className="bg-secondary  pt-5">
            <Navbar />
            <div className="text-center text-white py-5 my-4 contactHero">
                <i class="fas fa-book-reader text-white"></i>
                <h1 className="fw-bold">Contact Us</h1>
            </div>
            <div className="container pt-5">
                <div className="row">
                    <div className="col-md-5">
                        <ContactInfo></ContactInfo>
                    </div>
                    <div className="col-md-7">
                        <h1 className="text-white">Always Contact With Us</h1>
                        <form action="">
                       <div className="form-group mb-3">
                           <input type="text" className="form-control" placeholder="Email Address *"/>
                       </div>
                       <div className="form-group mb-3">
                           <input type="text" className="form-control" placeholder="Subject *"/>
                       </div>
                       <div className="form-group mb-3">
                           <textarea name="" className="form-control" id="" cols="30" rows="11" placeholder="Message *"></textarea>
                       </div>
                       <div className="form-group">
                           <button type="button" className=" mainBtn float-end"> Send Message </button>
                       </div>
                   </form>
                    </div>
                    <hr className="text-white mt-5" />
                   <div className="d-flex flex-column justify-content-center align-items-center py-5">
                   
                    <h1 className="text-white fw-bold text-center">Tilakpur Degree College</h1>
                    <SocialMediaWrap>
                    <SocialIcons>
                            <SocialIconLink href="https://facebook.com/" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="https://instagram.com/" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="https://youtube.com/" target="_blank" aria-label="Youtube">
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href="https:twitter.com/" target="_blank" aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href="https://linkedin.com/" target="_blank" aria-label="Linkedin">
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </div>
                   </div>
                {/* <hr className="text-white" /> */}
            </div>
        </div>
    );
};

export default ContactUs;