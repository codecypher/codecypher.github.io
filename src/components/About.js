import { Component, Fragment } from 'react'

export class About extends Component {
    render() {
        let resumeData = this.props.resumeData
        return (
            <Fragment>
                {/* About */}
                <section id="about" className="py-5 text-center container">
                    <div className="row py-lg-5">
                        <div className="col-lg-6 col-md-8 mx-auto">
                            <h1 className="fw-light">About Me</h1>
                            <p className="lead">
                                Hello, I am an{' '}
                                <span className="rolename">
                                    {resumeData.role}{' '}
                                </span>
                                {resumeData.roleDescription}.
                            </p>
                            <p>
                                <a href="#" className="btn btn-secondary my-2">
                                    <i className="fa fa-download" /> Download
                                    Resume
                                </a>
                            </p>
                        </div>
                    </div>
                </section>{' '}
                {/* About End*/}
            </Fragment>
        )
    }
}
