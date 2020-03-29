import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Landing from '../Components/Landing';
import Project from '../Components/Project';
import Skills from '../Components/Skills';
import Footer from '../Components/Footer';
import Education from '../Components/Education';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Navbar />
            <main id="home" className="container">
                <Switch>
                    <Route path="/portfolio/" exact={true} component={Landing}/>
                    <Route path="/projects" component={Project} />
                    <Route path="/skills" component={Skills} />
                    <Route path="/education" component={Education} />
                </Switch>
                <Footer />
            </main>
        </div>
    </BrowserRouter>
);

export default AppRouter;