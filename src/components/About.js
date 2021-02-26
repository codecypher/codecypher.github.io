/*
  About.js
  This react component displays summary info about me.
 */
import { Component, Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import img from "../images/me.jpg"

export class About extends Component {
    render() {
        let resumeData = this.props.resumeData
        return (
            <Fragment>
                {/* About */}
                <section id="about" className="text-center container-fluid">
                    <div className="row">
                        <div className="col-2"></div>
                        <div className="col">
                            <img
                                className="profile-pic"
                                src={img}
                                alt="profile-pic"
                            />
                        </div>
                        <div className="col-6">
                            <h2 className="mb-3">About Me</h2>
                            <h3 className="rolecontent">
                                I am an{' '}
                                <span className="rolename">
                                    {resumeData.role}{' '}
                                </span>
                                {resumeData.roleDescription}
                            </h3>
                            <h3 className="rolecontent">
                                I have 25+ years of software engineering experience
                                developing a wide variety of applications using a
                                variety of software development languages and technologies.
                            </h3>
                            <h3 className="career-list text-start py-2">
                                I am interested in careers like the following:
                            </h3>
                            <div className="row career-list text-start">
                                <div className="col">
                                    <ul>
                                        <li>
                                            Artificial Intelligence Engineer
                                        </li>
                                        <li>Robotics Engineer</li>
                                        <li>Mobile Software Engineer</li>
                                    </ul>
                                </div>
                                <div className="col">
                                    <ul>
                                        <li>Lead Software Engineer</li>
                                        <li>Senior Research Scientist</li>
                                    </ul>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-5">
                                    <h3>Contact Details</h3>
                                    <p className="address">
                                        <span>{resumeData.name}</span>
                                        <br />
                                        <span>{resumeData.email}</span>
                                    </p>
                                </div>
                                <div className="col pt-5 download">
                                    <p>
                                        <a href="#" className="button">
                                            <FontAwesomeIcon icon={["fas", "download"]} className="fa-md fa-fw" />Download Resume
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>{' '}
                        <div className="col"></div>
                    </div>
                </section>{' '}
                {/* About End*/}
            </Fragment>
        )
    }
}
