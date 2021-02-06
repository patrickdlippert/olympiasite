import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row"> 
                <div className="col-4 col-sm-3 text-center">
                        <img className="img-fluid footer-image" src="./assets/images/olympia-map.png" />
                    </div>           
                    <div className="col-4 col-sm-2">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to='/home'>Home</Link></li>
                            <li><Link to='/attractions'>Attractions</Link></li>
                            <li><Link to='/restaurants'>Restaurants</Link></li>
                            <li><Link to='/events'>Events</Link></li>
                        </ul>
                    </div>
                    <div className="col col-sm-3 text-center">
                        <h5>Social</h5>
                        <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram" /></a>{' '}
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/"><i className="fa fa-facebook" /></a>{' '}
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter" /></a>{' '}
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube" /></a> 
                    </div>

                    <div className="col-sm-3 text-center">
                        <img className="img-fluid footer-image" src="./assets/images/OlympiaTopTen.png" />
                        <a role="button" className="btn btn-link" href="mailto:olympiatopten@gmail.com"><i className="fa fa-envelope-o" />olympiatopten@gmail.com</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;