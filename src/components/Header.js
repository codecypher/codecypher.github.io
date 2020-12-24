/*
  Header.js
  This react component displays the main banner.
 */
import { Component, Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
                                        <FontAwesomeIcon icon={["fab", "facebook"]} />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <FontAwesomeIcon icon={["fab", "twitter"]} />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <FontAwesomeIcon icon={["fab", "google-plus"]} />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <FontAwesomeIcon icon={["fab", "linkedin"]} />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <FontAwesomeIcon icon={["fab", "instagram"]} />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <FontAwesomeIcon icon={["fab", "dribbble"]} />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <FontAwesomeIcon icon={["fab", "skype"]} />
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
