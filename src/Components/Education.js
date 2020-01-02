import React, { Component } from 'react';

class Education extends Component {
    constructor(props) {
        super(props);
        this.navbarData = props.landingData;
    }

    render(){
        return(
            <section id="education" className="py-lg-3">
            <div className="row">
              <div className="col-sm-6">
                <div className="card about-card">
                  <div className="card-body">
                    <h5 className="card-title">Education</h5>
                    <div className="card-subtitle mb-2 text-muted">
                      <div className="item">
                        <h3 className="title">
                          B.tech Electrical Engineering
                        </h3>
                        <h4 className="university">Malaviya National Institute Of Technology
                          <span className="year"> (2017-2021)</span>
                        </h4>
                      </div>
                      <div className="item">
                        <h3 className="title">
                          12th Class 
                        </h3>
                        <h4 className="university">Ryan International School
                          <span className="year"> 91.2%</span>
                        </h4>
                      </div>
                      <div className="item">
                        <h3 className="title">
                          10th Class 
                        </h3>
                        <h4 className="university">Ryan International School
                          <span className="year"> 10 cgpa</span>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="card about-card">
                  <div className="card-body">
                    <h5 className="card-title">Conferences & Hackathons</h5>
                    <div className="card-subtitle mb-2 text-muted">
                      <div className="item">
                        <h3 className="title">FOSSASIA Open-Source Summit </h3>
                        <h4 className="university">Singapore 2019
                          <a target="blank" href="https://summit.fossasia.org/"><span className="year"> (link)</span></a>
                        </h4>
                      </div>
                      <div className="item">
                        <h3 className="title">Codeheat 2018/2019 </h3>
                        <h4 className="university"> Open Source Hackathon
                          <a target="blank" href="https://blog.fossasia.org/announcing-the-fossasia-codeheat-winners-2018-19/"><span className="year"> (link)</span></a>
                        </h4>
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

export default Education;