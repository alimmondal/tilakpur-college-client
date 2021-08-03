
import React from 'react';
import Icon1 from '../../../images/college.jpg'
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, WebsiteRights, SocialIcons, SocialLogo, SocialIconLink, ServicesIcon, FooterP } from './FooterElements';
import { animateScroll as scroll } from 'react-scroll';

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop()
    }

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            {/* <FooterLinkTitle>About us</FooterLinkTitle> */}
                            <ServicesIcon src={Icon1} />
                            <FooterP>We give students an education and experiences that set them up for success in a career and become successfull.</FooterP>

                            {/* <FooterLink to="/signin">Testimonials</FooterLink>
                                <FooterLink to="/signin">Careers</FooterLink>
                                <FooterLink to="/signin">Investors</FooterLink>
                                <FooterLink to="/signin">Term of services</FooterLink> */}
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                            <FooterLink to="/#">Principal:</FooterLink>
                            <FooterLink to="/#">
                                <i class="fas fa-phone me-1"></i>
                                +8801711787063/
                                <br /><i class="fas fa-phone me-1"></i>
                                +8801913084709
                            </FooterLink>
                            <FooterLink to="/#">Email:</FooterLink>
                            <FooterLink to="/#">
                                {/* <i class="far fa-envelope me-1 text-center"></i> <br /> */}
                                collegetilakpur@gmail.com
                            </FooterLink>
                            <FooterLink to="/#">Clerk:</FooterLink>
                            <FooterLink to="/#">
                                <i class="fas fa-phone me-1"></i>
                                +8801745-365514
                            </FooterLink>
                            {/* <FooterLink to="/#">SponsorShip</FooterLink> */}
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Links</FooterLinkTitle>
                            <FooterLink to="/">Home</FooterLink>
                            <FooterLink to="/aboutUs">About us</FooterLink>
                            <FooterLink to="/contactUs">Contact us</FooterLink>
                            <FooterLink to="/dashboard">Dashboard</FooterLink>
                            <FooterLink to="/blogs">Blogs/news</FooterLink>
                            <FooterLink to="/signInPage">Sing In/ Sign up</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Syllabus</FooterLinkTitle>
                            <FooterLink to="/">English</FooterLink>
                            <FooterLink to="/signin">Bengali</FooterLink>
                            <FooterLink to="/signin">ICT</FooterLink>
                            <FooterLink to="/signin">Humanity/ arts</FooterLink>
                            <FooterLink to="/signin">Science</FooterLink>
                            <FooterLink to="/signin">Commerce</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/" onClick={toggleHome}>
                            tCollege
                        </SocialLogo>
                        <WebsiteRights>Tilakpur Degree College &copy; {new Date().getFullYear()}  All rights reserved</WebsiteRights>
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
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    );
};

export default Footer;