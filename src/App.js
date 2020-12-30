/*
  App.js
  This is the main react component for the applcation.

  GitHub React Porfolio
  https://codecypher.github.io/

  Create a developer portfolio using react.js
  https://medium.com/technoetics/create-a-developer-portfolio-using-reactjs-d34ea1bfb18e

  How to CSS Style in React
  https://www.robinwieruch.de/react-css-styling#css-in-css-css-modules-in-react

  Prettier
  yarn prettier --check .
  yarn prettier --write .
*/
import './App.css'
// import logo from 'images/logo192.png'

import React, { Component } from 'react'

// import { Tooltip, Toast, Popover } from 'bootstrap';

import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

import { Header } from './components/Header'
import { About } from './components/About'
import { Resume } from './components/Resume'
import { Portfolio } from './components/Portfolio'
// import { Testimonials } from "./components/Testimonials";
// import { ContactMe } from './components/ContactMe'
// import { Footer } from './components/Footer'

import resumeData from './js/resumeData'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header resumeData={resumeData} />
                <About resumeData={resumeData} />
                <Resume resumeData={resumeData} />
                <Portfolio />
                {/*<ContactMe resumeData={resumeData} />*/}
                {/*<Footer />*/}
            </div>
        )
    }
}

library.add(fab, fas)

export default App
