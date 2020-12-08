import { Component, Fragment } from 'react'

export class About extends Component {
    render() {
        let resumeData = this.props.resumeData
        return (
            <Fragment>
                {/* About */}
                <section id="about">
                    <div className="row">
                        <div className="three columns">
                            <img
                                className="profile-pic"
                                src="images/profilepic.jpg"
                                alt=""
                            />
                        </div>
                        <div className="nine columns main-col">
                            <h2>About Me</h2>
                            <h3 className="rolecontent">
                                I am an{' '}
                                <span className="rolename">
                                    {resumeData.role}{' '}
                                </span>
                                {resumeData.roleDescription}.
                            </h3>
                            <hr />
                            <div className="row">
                                <div className="columns contact-details">
                                    <h2>Contact Details</h2>
                                    <p className="address">
                                        <span>{resumeData.name}</span>
                                        <br />
                                        <span>
                                            {resumeData.address}
                                            <br />
                                            {resumeData.city},{' '}
                                            {resumeData.state} {resumeData.zip}{' '}
                                            US
                                        </span>
                                        <br />
                                        <span>{resumeData.email}</span>
                                    </p>
                                </div>
                                <div className="columns download">
                                    <p>
                                        <a href="#" className="button">
                                            <i className="fa fa-download" />
                                            Download Resume
                                        </a>
                                    </p>
                                </div>
                            </div>{' '}
                            {/* end row */}
                        </div>{' '}
                        {/* end .main-col */}
                    </div>
                </section>{' '}
                {/* About End*/}
            </Fragment>
        )
    }
}
