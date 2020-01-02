import React, { Component } from 'react';


import Cplus from '../Assets/skills/c++.svg';
import Python from '../Assets/skills/python.svg';
import Java from '../Assets/skills/java.svg';
import Javascript from '../Assets/skills/javascript.svg';
import Csharp from '../Assets/skills/csharp.svg';
import C from '../Assets/skills/c.svg';
import Html from '../Assets/skills/html.svg';
import Css from '../Assets/skills/css.svg';
import Bootstrap from '../Assets/skills/bootstrap.svg'
import Php from '../Assets/skills/php.svg';
import Mysql from '../Assets/skills/mysql.svg';
import Ajax from '../Assets/skills/ajax.svg';
import React1 from '../Assets/skills/react.svg';
import Angular from '../Assets/skills/angular.svg';
import Flask from '../Assets/skills/flask.svg';
import Android from '../Assets/skills/android.svg';
import Ionic from '../Assets/skills/ionic.svg';
import Cordova from '../Assets/skills/cordova.svg';
import Git from '../Assets/skills/git.svg'



class Skills extends Component {
    constructor(props) {
        super(props);
        this.Skills = props.landingData;
    }

    render(){
        return (
            <section id="skills" className="py-lg-3">
            <div className="card mt-5 mb-5 skills-card">
              <div className="card-body">
                <h5 className="card-title text-center">Skills</h5>
                <div className="table-responsive custom-scrollbar"> 
                  <table className="table text-center">
                    <tbody>
                      <tr>
                        <td className="border skills-card-item smooth-transition">
                          <img className="skill-icon" alt="python" src={Python}></img>
                          <div><small>python</small></div>
                        </td>
                        <td className="border skills-card-item smooth-transition">
                          <img className="skill-icon" alt="javascript" src={Javascript}></img>
                          <div><small>javascript</small></div>
                        </td>
                        <td className="border skills-card-item smooth-transition">
                          <img className="skill-icon" alt="java" src={Java}></img>
                          <div><small>java</small></div>
                        </td>
                      </tr>
                      <tr>
                        <td className="border skills-card-item smooth-transition">
                          <img className="skill-icon" alt="c++" src={Cplus}></img>
                          <div><small>c++</small></div>
                        </td>
                        <td className="border skills-card-item smooth-transition">
                          <img className="skill-icon" alt="c#" src={Csharp}></img>
                          <div><small>c#</small></div>
                        </td>
                        <td className="border skills-card-item smooth-transition">
                          <img className="skill-icon" alt="c" src={C}></img>
                          <div><small>c</small></div>
                        </td>
                      </tr>
                      <tr>
                        <td className="border skills-card-item smooth-transition">
                          <img className="skill-icon" alt="html" src={Html}></img>
                          <div><small>html</small></div>
                        </td>
                        <td className="border skills-card-item smooth-transition">
                          <img className="skill-icon" alt="css" src={Css}></img>
                          <div><small>css</small></div>
                        </td>
                        <td className="border skills-card-item smooth-transition">
                          <img className="skill-icon" alt="bootstrap" src={Bootstrap}></img>
                          <div><small>bootstrap</small></div>
                        </td>
                      </tr>
                      <tr>
                        <td className="border skills-card-item smooth-transition">
                          <img className="skill-icon" alt="php" src={Php}></img>
                          <div><small>php</small></div>
                        </td>
                        <td className="border skills-card-item smooth-transition">
                          <img className="skill-icon" alt="mysql" src={Mysql}></img>
                          <div><small>mysql</small></div>
                        </td>
                        <td className="border skills-card-item smooth-transition">
                          <img className="skill-icon" alt="ajax" src={Ajax}></img>
                          <div><small>ajax</small></div>
                        </td>
                      </tr>
                      <tr>
                        <td className="border skills-card-item smooth-transition">
                          <img className="skill-icon" alt="angular" src={Angular}></img>
                          <div><small>angularjs</small></div>
                        </td>
                        <td className="border skills-card-item smooth-transition">
                          <img className="skill-icon" alt="react" src={React1}></img>
                          <div><small>reactjs</small></div>
                        </td>
                        <td className="border skills-card-item smooth-transition">
                          <img className="skill-icon" alt="flask" src={Flask}></img>
                          <div><small>flask</small></div>
                        </td>
                      </tr>
                      <tr>
                        <td className="border skills-card-item smooth-transition">
                          <img className="skill-icon" alt="android" src={Android}></img>
                          <div><small>android studio</small></div>
                        </td>
                        <td className="border skills-card-item smooth-transition">
                          <img className="skill-icon" alt="Ionic" src={Ionic}></img>
                          <div><small>ionic framework</small></div>
                        </td>
                        <td className="border skills-card-item smooth-transition">
                          <img className="skill-icon" alt="Cordova" src={Cordova}></img>
                          <div><small>cordova</small></div>
                        </td>
                      </tr>
                      <tr>
                        <td className="border skills-card-item smooth-transition">
                        <img className="skill-icon" alt="bash" src="https://img.icons8.com/color/48/000000/console.png"></img>
                          <div><small>shell programming</small></div>
                        </td>
                        <td className="border skills-card-item smooth-transition">
                          <img className="skill-icon" alt="Git" src={Git}></img>
                          <div><small>Git</small></div>
                        </td>
                        <td className="border skills-card-item smooth-transition">
                        <img className="skill-icon" alt="debian" src="https://img.icons8.com/color/48/000000/debian.png"></img>
                          <div><small>debian management</small></div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>           
        );       
    }
}

export default Skills;