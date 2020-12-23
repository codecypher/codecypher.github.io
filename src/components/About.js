import { Component, Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
                                src="images/profilepic.jpg"
                                alt=""
                            />
                        </div>
                        <div className="col-6">
                            <h2 className="mb-3">About Me</h2>
                            <h3 className="rolecontent">
                                I am an{' '}
                                <span className="rolename">
                                    {resumeData.role}{' '}
                                </span>
                                {resumeData.roleDescription}.
                            </h3>
                            <hr />
                            <div className="row">
                                <div className="col-5">
                                    <h3>Contact Details</h3>
                                    <p className="address">
                                        <span>{resumeData.name}</span>
                                        <br />
                                        {/*
                                        <span>
                                            {resumeData.address}
                                            <br />
                                            {resumeData.city},{' '}
                                            {resumeData.state} {resumeData.zip}{' '}
                                            US
                                        </span>
                                        <br />
                                        */}
                                        <span>{resumeData.email}</span>
                                    </p>
                                </div>
                                <div className="col pt-5 download">
                                    <p>
                                        <a href="#" className="button">
                                            <FontAwesomeIcon icon="download" className="fa-lg pr-1" />Download Resume
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
