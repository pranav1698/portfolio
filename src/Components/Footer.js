import React, { Component } from 'react';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.navbarData = props.landingData;
    }

    render(){
        return(
            <footer id="contact" className="text-center">
            <div className="divider"></div>
            <div className="container">
                  <h5 className="card-title text-center">Contact</h5>
                    <div className="row">
                      <div className="col-sm-4">
                      <div className="mt-2">
                              <div>
                                <svg width="25" height="25" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M1152 640q0-106-75-181t-181-75-181 75-75 181 75 181 181 75 181-75 75-181zm256 0q0 109-33 179l-364 774q-16 33-47.5 52t-67.5 19-67.5-19-46.5-52l-365-774q-33-70-33-179 0-212 150-362t362-150 362 150 150 362z"></path></svg>
                              </div>
                              <a href="https://goo.gl/maps/ZYJZafnqkHHcxgtC7">Jaipur, India</a>
                            </div>
                      </div>
                      <div className="col-sm-4">
                      <div className="mt-2">
                              <div>
                              <svg width="32" height="32" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M976 1408q0-33-23.5-56.5t-56.5-23.5-56.5 23.5-23.5 56.5 23.5 56.5 56.5 23.5 56.5-23.5 23.5-56.5zm208-160v-704q0-13-9.5-22.5t-22.5-9.5h-512q-13 0-22.5 9.5t-9.5 22.5v704q0 13 9.5 22.5t22.5 9.5h512q13 0 22.5-9.5t9.5-22.5zm-192-848q0-16-16-16h-160q-16 0-16 16t16 16h160q16 0 16-16zm288-16v1024q0 52-38 90t-90 38h-512q-52 0-90-38t-38-90v-1024q0-52 38-90t90-38h512q52 0 90 38t38 90z"></path></svg>
                              </div>
                              <a href="tel:9079650989">9079650989</a>
                            </div>
                      </div>
                    
                      <div className="col-sm-4">
                      <div className="mt-2">
                              <div>
                              <svg width="25" height="25" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M1100 775q0-108-53.5-169t-147.5-61q-63 0-124 30.5t-110 84.5-79.5 137-30.5 180q0 112 53.5 173t150.5 61q96 0 176-66.5t122.5-166 42.5-203.5zm564 121q0 111-37 197t-98.5 135-131.5 74.5-145 27.5q-6 0-15.5.5t-16.5.5q-95 0-142-53-28-33-33-83-52 66-131.5 110t-173.5 44q-161 0-249.5-95.5t-88.5-269.5q0-157 66-290t179-210.5 246-77.5q87 0 155 35.5t106 99.5l2-19 11-56q1-6 5.5-12t9.5-6h118q5 0 13 11 5 5 3 16l-120 614q-5 24-5 48 0 39 12.5 52t44.5 13q28-1 57-5.5t73-24 77-50 57-89.5 24-137q0-292-174-466t-466-174q-130 0-248.5 51t-204 136.5-136.5 204-51 248.5 51 248.5 136.5 204 204 136.5 248.5 51q228 0 405-144 11-9 24-8t21 12l41 49q8 12 7 24-2 13-12 22-102 83-227.5 128t-258.5 45q-156 0-298-61t-245-164-164-245-61-298 61-298 164-245 245-164 298-61q344 0 556 212t212 556z"></path></svg></div>
                              <a href="mailto:pranav16kulshrestha@gmail.com">Mail</a>
                            </div>
                          
                      </div>
                  </div>        
                  
              <a className="btn btn-link back-to-top-btn" title="Back to top" href="https://pranav1698.github.io/portfolio/#navbar">▲</a>
            </div>
          </footer>
        );
    }
}

export default Footer;