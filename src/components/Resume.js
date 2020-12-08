import { Component, Fragment } from 'react'

export class Resume extends Component {
    render() {
        let resumeData = this.props.resumeData
        return (
            <Fragment>
                {/* Resume */}
                <section id="resume" className="py-5 text-center container">
                    <div className="row py-lg-5">
                        <div className="col-lg-6 col-md-8 mx-auto">
                            <h1 className="fw-light">About Me</h1>
                            <p className="lead">
                                I am an{' '}
                                <span className="">{resumeData.role} </span>
                                {resumeData.roleDescription}.
                            </p>
                            <p>
                                <a href="#" className="btn btn-primary my-2">
                                    Main call to action
                                </a>
                                &nbsp;&nbsp;
                                <a href="#" className="btn btn-secondary my-2">
                                    Secondary action
                                </a>
                            </p>
                        </div>
                    </div>
                </section>{' '}
                {/* Resume End*/}
            </Fragment>
        )
    }
}
