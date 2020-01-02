import React, { Component } from 'react';


class Project extends Component {
    constructor(props) {
        super(props);
        this.projectData = props.landingData;
    }
    
    render(){
        return (
            <section id="project" className="py-lg-3">
            <div className="project-container">
              <h5 className="text-center mt-5 mb-2">Projects</h5>
              <div className="row project-row custom-scrollbar">
                <div className="col-sm-6">
                  <div className="card project-card">
                    <div className="card-body">
                        <h5 className="card-title">Global Warming Blog</h5>
                        <h6 className="card-subtitle small mb-2 text-muted border-bottom">Flask Content Management System</h6>
                        <p className="card-text mt-2 custom-scrollbar">
                          This is a Content Management System used to create and modify blogs. The theme, I have choosen for this blog is Global Warming because it requires attention due to climate change of the whole world and it is a great concern of the future.
                        </p>
                        <div className="card-footer project-card-footer-custom">
                          <a className="card-link smooth-transition" href="https://github.com/pranav1698/Flask-CMS" target="blank">Code</a>
                        </div>
                    </div>
                  </div>
                  <div className="card project-card">
                    <div className="card-body">
                        <h5 className="card-title">DocScanner</h5>
                        <h6 className="card-subtitle small mb-2 text-muted border-bottom">Document Scanner and Text Extractor</h6>
                        <p className="card-text mt-2 custom-scrollbar">A document scanner used to scan images from your file directory using OpenCV and then uses a scikit-image for giving a black and white touch to the file. The text extraction is very helpful if you want to take out essential information from images.
                        </p>
                        <div className="card-footer project-card-footer-custom">
                          <a className="card-link smooth-transition" href="https://github.com/pranav1698/Document-Scanner-Extractor" target="blank">Code</a>
                        </div>
                    </div>
                  </div>
                  <div className="card project-card">
                    <div className="card-body">
                        <h5 className="card-title">Youtube Clock</h5>
                        <h6 className="card-subtitle small mb-2 text-muted border-bottom">The Alarm Clock to your favorite Youtube Videos</h6>
                        <p className="card-text mt-2 custom-scrollbar">
                        Want to see your favorite youtube videos but have work to do ? Use this simple script, to set a alarm or timer to your favorite youtube videos.
                        </p>
                        <div className="card-footer project-card-footer-custom">
                          <a className="card-link smooth-transition" href="https://github.com/pranav1698/Youtube-AlarmClock" target="blank">Code</a>
                        </div>
                    </div>
                  </div>
                  <div className="card project-card">
                    <div className="card-body">
                        <h5 className="card-title">Custom Generator</h5>
                        <h6 className="card-subtitle small mb-2 text-muted border-bottom">Debian System Builder</h6>
                        <p className="card-text mt-2 custom-scrollbar">
                        This project contains of a simple shell script that can be possibly edited and extended for creating a pre-configured custom Linux.The output ISO is based on Ubuntu/Debian architecture. It uses LXQt as standard desktop environment.</p>
                        <div className="card-footer project-card-footer-custom">
                          <a className="card-link smooth-transition" href="https://github.com/pranav1698/Custom-LiveISO-Generator" target="blank">Code</a>
                        </div>
                    </div>
                  </div>
                </div>             
                <div className="col-sm-6">
                  <div className="card project-card">
                    <div className="card-body">
                        <h5 className="card-title">Data-Mining</h5>
                        <h6 className="card-subtitle small mb-2 text-muted border-bottom">Data Tokenization using data-mining tools</h6>
                        <p className="card-text mt-2 custom-scrollbar">
                        The great demonstrable strength of Twitter is a crisis-detector network and enabling a crowd-sourcing process for the whole world. This projects aims to provide help to relief groups by providing a detailed summary of the tweets.
                        </p>
                        <div className="card-footer project-card-footer-custom">
                          <a className="card-link smooth-transition" href="https://www.slideshare.net/slideshow/embed_code/key/xICCxheT19WcZR" target="blank">Code</a>
                        </div>
                    </div>
                  </div>
                  <div className="card project-card">
                    <div className="card-body">
                        <h5 className="card-title">SecureBase</h5>
                        <h6 className="card-subtitle small mb-2 text-muted border-bottom">Firebase SignIn and Cloud function</h6>
                        <p className="card-text mt-2 custom-scrollbar">
                          Its a project that uses firebase-signin methods to authenticate user and then uses firebase trigger and cloud function to store data in the firebase provided database We can use firebase sign-in methods that are provided by firebase authentication to provide login service in our app.
                        </p>
                        <div className="card-footer project-card-footer-custom">
                          <a className="card-link smooth-transition" href="https://github.com/pranav1698/firebase_authentication" target="blank">Code</a>
                        </div>
                    </div>
                  </div>
                  <div className="card project-card">
                    <div className="card-body">
                        <h5 className="card-title">Zine Official Website</h5>
                        <h6 className="card-subtitle small mb-2 text-muted border-bottom">PHP application with MySQL support</h6>
                        <p className="card-text mt-2 custom-scrollbar">
                          Official Website of Zine Research and Robotics Society.
                        </p>
                        <div className="card-footer project-card-footer-custom">
                          <a className="card-link smooth-transition" href="http://zine.co.in/" target="blank">View</a>
                        </div>
                    </div>
                  </div>
                  <div className="card project-card">
                    <div className="card-body">
                        <h5 className="card-title">Chatterbot</h5>
                        <h6 className="card-subtitle small mb-2 text-muted border-bottom">Natural Language Processing</h6>
                        <p className="card-text mt-2 custom-scrollbar">
                          Research on chatbots using Natural Language Processing
                        </p>
                        <div className="card-footer project-card-footer-custom">
                          <a className="card-link smooth-transition" href="https://github.com/zine-robotics/Chatter-Bot" target="blank">Code</a>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
    }
}

export default Project;