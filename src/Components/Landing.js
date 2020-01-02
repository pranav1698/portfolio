import React, { Component } from 'react';
import linkedin from '../Assets/logos/linkedin.svg';
import github from '../Assets/logos/github.svg';
import twitter from '../Assets/logos/twitter.svg';
import facebook from '../Assets/logos/facebook.svg';
import instagram from '../Assets/logos/instagram.svg';
import skype from '../Assets/logos/skype.svg';
import profile from '../Assets/img/profile.jpeg';

class Landing extends Component {
    constructor(props) {
        super(props);
        this.landingData = props.landingData;
    }

    render(){
        return(
                <section id="introduction" className="py-lg-3">
                    <div className="card introduction-card mt-5">
                        <div className="card-body row introduction-card-body">
                            <div className="col-sm-4 d-flex justify-content-center introduction-card-body-image">
                                <div className="avatar-holder">
                                    <span className="skeleton-circle skeleton-pulse">
                                        <span id="profile-image" className="lazy-load-image-background blur lazy-load-image-loaded" >
                                            <img className="avatar img-fluid" alt="Pranav Kulshrestha" src={profile}></img>
                                        </span>
                                    </span>
                                </div>
                            </div>
                            <div className="col-sm-4">
                            <div className="introduction-card-body-content-wrapper cursor-context">Hello<span>,</span><h4><small>I<span>'</span>m</small> Pranav Kulshrestha<span>.</span></h4>I<span>'</span>m a <h6>Software Developer</h6></div>
                                <div className="text-left h-100">
                                  <ul className="list-inline social-list">
                                    <li className="list-inline-item">
                                      <a target="blank" href="https://www.linkedin.com/in/pranav-kulshrestha-a7ba47145/" >
                                        <img className="social-icon smooth-transition" src={linkedin} alt="linkedin"></img>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a target="blank" href="https://github.com/pranav1698">
                                        <img className="social-icon smooth-transition" src={github} alt="github"></img>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a target="blank" href="https://twitter.com/PranavKulshres3">
                                        <img className="social-icon smooth-transition" src={twitter}  alt="twitter"></img>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a target="blank" href="https://www.facebook.com/pranav.kulshrestha.73"> 
                                        <img className="social-icon smooth-transition" src={facebook} alt="facebook"></img>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a target="blank" href="https://www.instagram.com/pranav_kulshrestha/">
                                        <img className="social-icon smooth-transition" src={instagram} alt="instagram"></img>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a target="blank" href="https://join.skype.com/invite/o76SeVUxiuga">
                                        <img className="social-icon smooth-transition" src={skype} alt="skype"></img>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                            </div>
                            <div className="col-sm-4">
                              <div className="introduction-card-body-extras">
                                <div className="extra mt-2 cursor-context">
                                  <div className="extra-title text-muted text-monospace">education</div>
                                  <div className="extra-text font-weight-bolder">MNIT Jaipur</div>
                                </div>
                                <div className="extra mt-2 cursor-context">
                                  <div className="extra-title text-muted text-monospace">work</div>
                                  <div className="extra-text font-weight-bolder">Developer and GCI Mentor</div>
                                </div>
                                <div className="extra mt-2 cursor-context"><div className="extra-title text-muted text-monospace">hobbies</div><div className="extra-text font-weight-bolder"><ul className="list-inline"><li className="list-inline-item badge badge-dark p-1">Coding</li><li className="list-inline-item badge badge-dark p-1">Reading</li><li className="list-inline-item badge badge-dark p-1">Cricket</li><li className="list-inline-item badge badge-dark p-1">Music</li></ul></div></div>
                              </div>
                            </div>
                        </div>
                    </div>
                </section>
        );
    }
}

export default Landing;