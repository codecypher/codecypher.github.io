import { Component, Fragment } from 'react'

export class Header extends Component {
    render() {
        let resumeData = this.props.resumeData
        return (
            <Fragment>
                {/* Header */}
                <div className="header-banner">
                    <div className="row banner">
                        <div className="banner-text">
                            <h1 id="headline" className="responsive-headline">
                                Hello, I am {resumeData.name}
                            </h1>
                            <hr />
                            <ul className="social">
                                <li>
                                    <a href="#">
                                        <i className="fa fa-facebook" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-twitter" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-google-plus" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-linkedin" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-instagram" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-dribbble" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-skype" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <p className="scrolldown">
                        <a className="smoothscroll" href="#about">
                            <i className="icon-down-circle" />
                        </a>
                    </p>
                </div>
                {/* Header End */}
            </Fragment>
        )
    }
}
