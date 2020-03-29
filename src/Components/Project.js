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
                        <p></p>
                        <h6 className="card-subtitle small mb-2 text-muted border-bottom">Flask CMS</h6>
                        <div className="card-text mt-2 custom-scrollbar">
                          <p>
                            This is a Content Management System used to create and modify blogs. 
                            The theme, I have choosen for this blog is Global Warming because 
                            it requires attention due to climate change of the whole world and 
                            it is a great concern of the future.
                          </p>
                          <h6>Tech Stack- HTML, CSS, Bootstrap, Python, Flask Framework</h6>
                        </div>
                        <div className="card-footer project-card-footer-custom">
                          <p></p>
                          <a className="card-link smooth-transition" href="https://github.com/pranav1698/Flask-CMS" target="blank">Code</a>
                        </div>
                    </div>
                  </div>
                  <div className="card project-card">
                    <div className="card-body">
                        <h5 className="card-title">DocScanner</h5>
                        <p></p>
                        <h6 className="card-subtitle small mb-2 text-muted border-bottom">Document Scanner and Text Extractor</h6>
                        <div className="card-text mt-2 custom-scrollbar">
                          <p>
                            A document scanner used to scan local images using OpenCV, it then 
                            generates a PDF which gets saved on the local filesystem. We then extract 
                            text from the pdf which is useful in ATS systems for extraction of 
                            information.
                          </p>
                          <h6>Tech Stack- Python and OpenCV</h6>
                        </div>
                        <div className="card-footer project-card-footer-custom">
                          <p></p>
                          <a className="card-link smooth-transition" href="https://github.com/pranav1698/Document-Scanner-Extractor" target="blank">Code</a>
                        </div>
                    </div>
                  </div>
                  <div className="card project-card">
                    <div className="card-body">
                        <h5 className="card-title">Youtube Clock</h5>
                        <p></p>
                        <h6 className="card-subtitle small mb-2 text-muted border-bottom">The Alarm Clock to your favorite Youtube Videos</h6>
                        <div className="card-text mt-2 custom-scrollbar">
                          <p>
                            Want to see your favourite youtube videos but have work to do? Use this
                            simple shell script, to set an alarm or timer to your favourite youtube 
                            videos. The link of these youtube videos is saved in a text file and then imported to open them on your web browser.
                          </p>
                          <h6>Tech Stack- Shell Scripting</h6>
                        </div>
                        <div className="card-footer project-card-footer-custom">
                          <p></p>
                          <a className="card-link smooth-transition" href="https://github.com/pranav1698/Youtube-AlarmClock" target="blank">Code</a>
                        </div>
                    </div>
                  </div>
                  <div className="card project-card">
                    <div className="card-body">
                        <h5 className="card-title">Custom Ubuntu Image Generator</h5>
                        <p></p>
                        <h6 className="card-subtitle small mb-2 text-muted border-bottom">Ubuntu System Builder</h6>
                        <div className="card-text mt-2 custom-scrollbar">
                          <p>
                            This project contains a simple shell script that can be possibly edited
                            and extended for creating a pre-configured custom Linux. The output ISO
                            is based on Ubuntu/Debian architecture. It uses LXQt as standard
                            desktop environment.
                          </p>
                          <h6>Tech Stack- Shell Scripting</h6>
                        </div>
                        <div className="card-footer project-card-footer-custom">
                          <p></p>
                          <a className="card-link smooth-transition" href="https://github.com/pranav1698/Custom-LiveISO-Generator" target="blank">Code</a>
                        </div>
                    </div>
                  </div>
                </div>             
                <div className="col-sm-6">
                  <div className="card project-card">
                    <div className="card-body">
                        <h5 className="card-title">Tweet Summarization</h5>
                        <h6 className="card-subtitle small mb-2 text-muted border-bottom"></h6>
                        <div className="card-text mt-2 custom-scrollbar">
                          <p>
                            The great demonstrable strength of Twitter is a crisis-detector network
                            and enabling a crowd-sourcing process for the whole world. This project 
                            aims to provide help to relief groups by summarization of tweets during
                            disasters and emergency conditions, which will help them on the ground.
                          </p>
                          <h6>Tech Stack- Jupyter Notebook, NLP, Python</h6>
                        </div>
                        <div className="card-footer project-card-footer-custom">
                          <p></p>
                          <a className="card-link smooth-transition" href="https://www.slideshare.net/slideshow/embed_code/key/xICCxheT19WcZR" target="blank">Code</a>
                        </div>
                    </div>
                  </div>
                  <div className="card project-card">
                    <div className="card-body">
                        <h5 className="card-title">Firebase User Authentication</h5>
                        <p></p>
                        <h6 className="card-subtitle small mb-2 text-muted border-bottom"></h6>
                        <div className="card-text mt-2 custom-scrollbar">
                          <p>
                            Ionic project that uses firebase authentication to authenticate the user
                            and then uses firebase cloud functions to store data in the database
                            provided by firebase. 
                          </p>
                          <h6>Tech Stack- Javascript, NodeJS, Ionic</h6>
                        </div>
                        <div className="card-footer project-card-footer-custom">
                          
                          <a className="card-link smooth-transition" href="https://github.com/pranav1698/firebase_authentication" target="blank">Code</a>
                        </div>
                    </div>
                  </div>
                  <div className="card project-card">
                    <div className="card-body">
                        <h5 className="card-title">Zine Official Website</h5>
                        <p></p>
                        <h6 className="card-subtitle small mb-2 text-muted border-bottom"></h6>
                        <div className="card-text mt-2 custom-scrollbar">
                          <p>
                            Official Website of Zine Research and Robotics Society.
                          </p>
                          <h6>HTML, CSS, Bootstrap, Javascript, PHP, MySQL</h6>
                        </div>
                        <div className="card-footer project-card-footer-custom">
                          <p></p>
                          <a className="card-link smooth-transition" href="http://zine.co.in/" target="blank">View</a>
                        </div>
                    </div>
                  </div>
                  <div className="card project-card">
                    <div className="card-body">
                        <h5 className="card-title">Chatterbot</h5>
                        <p></p>
                        <h6 className="card-subtitle small mb-2 text-muted border-bottom">Natural Language Processing</h6>
                        <div className="card-text mt-2 custom-scrollbar">
                          <p>
                            Research on chatbots using tools of Natural Language Processing.
                          </p>
                          <h6>Tech Stack- Python</h6>
                        </div>
                        <div className="card-footer project-card-footer-custom">
                          <p></p>
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