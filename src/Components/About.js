import React, { Component } from 'react';

class About extends Component {
    constructor(props){
        super(props);
        this.aboutData = props.aboutData;
    }

    render(){
        return(
            <section className="py-lg-3">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="card about-card">
                            <div className="card-body">
                                <h5 className="card-title">About Me</h5>
                                <div className="card-subtitle mb-2 text-muted">
                                    <p className="card-text mt-2">
                                        Hi Everybody,<br></br>
                                        Software developer working on and taking up new challenges. 
                                        Working on myself daily and learning new skills that have helped me to do my work efficiently.<br></br>
                                        I have worked in the corporate sector, open-source, it is a great experience working on 
                                        new projects incorporating several technologies. I think it is the best way to learn new things.<br></br>
                                        Presently, I am the technical lead of the research and robotics society  of my college,
                                        motivating my juniors to contribute to open-source, work on projects and learn new technologies.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card about-card">
                            <div className="card-body custom-scrollbar">
                                <h5 className="card-title">Blogs</h5>
                                <div className="card-subtitle mb-2 text-muted">
                                    Working on this section!! Will update it soon 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
          </section>
        );
    }
}

export default About;