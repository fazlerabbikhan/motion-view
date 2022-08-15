import React from 'react';
import footer from '../../images/footer.png'
import logo from '../../images/logo.png'

const Footer = () => {
    return (
        <footer style={{
            background: `url(${footer})`,
            backgroundSize: 'cover'
        }} className="pl-10 mt-20">
            <div className='footer grid grid-cols-3'>
                <div>
                    <img src={logo} alt="" />
                    <h1 className>
                        Motion View is the largest Eco Product importer
                        and Distributor in Bangladesh and now holds
                        the leading br position in the ecosystem industry.
                    </h1>
                </div>
                <div>
                    <span className="footer-title">COMPANY</span>
                    <a className="link link-hover">Support Center</a>
                    <a className="link link-hover">Service Center</a>
                    <a className="link link-hover">Contact Us</a>
                    <a className="link link-hover">EMI Policy</a>
                    <a className="link link-hover">Warranty Policy</a>
                </div>
                <div>
                    <span className="footer-title">Address</span>
                    <a className="link link-hover">10/25 (9th Commercial Floor), Eastern Plaza,
                        70 Bir Uttam C.R Datta Road, Hatirpool,
                        Dhaka-1205</a>
                    <a className="link link-hover">01925-460460</a>
                    <a className="link link-hover">motionview22@gmail.com</a>
                </div>
            </div>
            <div className='my-10 text-center'>
                <p>Copyright © 2022 - All right reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;