/*
  Portfolio.js
  This react component displays a gallery of software projects.
*/
import { Component } from 'react'
import img1 from "../images/portfolio/G1-Tank.png"
import img2 from "../images/portfolio/neuron-network.jpg"
import img3 from "../images/portfolio/nlp.jpg"
import img4 from "../images/portfolio/xamarin.jpg"
import img5 from "../images/portfolio/react-redux.jpg"
import img6 from "../images/portfolio/swift.jpg"

export class Portfolio extends Component {
    render() {
        return (
            /* Portfolio */
            <section id="portfolio" className="text-center">
                <div className="row">
                    <h1>my software projects</h1>
                    <div class="album py-5 bg-light">
                        <div class="container">
                            <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-3">
                                <div class="col">
                                    <div class="card shadow-sm">
                                        <a href="https://github.com/codecypher/Yahboom_Tank_Code">
                                            <img
                                                alt=""
                                                src={img1}
                                                class="bd-placeholder-img card-img-top"
                                                width="100%"
                                                height="250"
                                                xmlns="http://www.w3.org/2000/svg"
                                                role="img"
                                                aria-label="Placeholder: Thumbnail"
                                                preserveAspectRatio="xMidYMid slice"
                                                focusable="false"
                                            ></img>{' '}
                                        </a>

                                        <div class="card-body">
                                            <p class="card-text">
                                                This <a href="https://github.com/codecypher/Yahboom_Tank_Code">repo</a>
                                                &nbsp;contains code for
                                                Robotics course project
                                                using Raspberry Pi 4 and Coral USB Accelerator.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card shadow-sm">
                                        <a href="https://github.com/codecypher/cifar">
                                            <img
                                                alt=""
                                                src={img2}
                                                class="bd-placeholder-img card-img-top"
                                                width="100%"
                                                height="250"
                                                xmlns="http://www.w3.org/2000/svg"
                                                role="img"
                                                aria-label="Placeholder: Thumbnail"
                                                preserveAspectRatio="xMidYMid slice"
                                                focusable="false"
                                            ></img>
                                        </a>
                                        <div class="card-body">
                                            <p class="card-text">
                                                This <a href="https://github.com/codecypher/cifar">repo</a>
                                                &nbsp;containes code for AI course project
                                                using the <a href="https://keras.io/">Keras</a> API
                                                to implement artificial neural
                                                networks (ANNs) for the &nbsp;
                                                <a href="https://www.cs.toronto.edu/~kriz/cifar.html">CIFAR-10</a> dataset.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card shadow-sm">
                                        <a href="https://github.com/codecypher/nlp-tagger-split">
                                            <img
                                                alt=""
                                                src={img3}
                                                class="bd-placeholder-img card-img-top"
                                                width="100%"
                                                height="250"
                                                xmlns="http://www.w3.org/2000/svg"
                                                role="img"
                                                aria-label="Placeholder: Thumbnail"
                                                preserveAspectRatio="xMidYMid slice"
                                                focusable="false"
                                            ></img>
                                        </a>
                                        <div class="card-body">
                                            <p class="card-text">
                                                This <a href="https://github.com/codecypher/nlp-tagger-split">repo</a>
                                                &nbsp;contains code for NLP course
                                                project on categorizing and tagging words
                                                using the Brown Corpus.
                                            </p>
                                        </div>
                                    </div>
                                </div>{' '}
                                <div class="col">
                                    <div class="card shadow-sm">
                                        <a href="https://github.com/codecypher/BookMobile">
                                            <img
                                                alt=""
                                                src={img4}
                                                class="bd-placeholder-img card-img-top"
                                                width="100%"
                                                height="250"
                                                xmlns="http://www.w3.org/2000/svg"
                                                role="img"
                                                aria-label="Placeholder: Thumbnail"
                                                preserveAspectRatio="xMidYMid slice"
                                                focusable="false"
                                            ></img>
                                        </a>
                                        <div class="card-body">
                                            <p class="card-text">
                                                This <a href="https://github.com/codecypher/BookMobile">repo</a>
                                                &nbsp;contains code for a proof of concept
                                                prototype mobile app for iOS and Android
                                                using JetBrains Rider and Xamarin Forms.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card shadow-sm">
                                        <a href="https://github.com/codecypher/react-todo">
                                            <img
                                                alt=""
                                                src={img5}
                                                class="bd-placeholder-img card-img-top"
                                                width="100%"
                                                height="250"
                                                xmlns="http://www.w3.org/2000/svg"
                                                role="img"
                                                aria-label="Placeholder: Thumbnail"
                                                preserveAspectRatio="xMidYMid slice"
                                                focusable="false"
                                            ></img>
                                        </a>
                                        <div class="card-body">
                                            <p class="card-text pb-4">
                                                This <a href="https://github.com/codecypher/react-todo">repo</a>
                                                &nbsp;contains code for a simple todo app
                                                using React-Redux and React Hooks.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card shadow-sm">
                                        <a href="https://github.com/codecypher/Landmarks">
                                            <img
                                                alt=""
                                                src={img6}
                                                class="bd-placeholder-img card-img-top"
                                                width="100%"
                                                height="250"
                                                xmlns="http://www.w3.org/2000/svg"
                                                role="img"
                                                aria-label="Placeholder: Thumbnail"
                                                preserveAspectRatio="xMidYMid slice"
                                                focusable="false"
                                            ></img>
                                        </a>
                                        <div class="card-body">
                                            <p class="card-text pb-4">
                                                This <a href="https://github.com/codecypher/Landmarks">repo</a>
                                                &nbsp;contains code based on the&nbsp;
                                                <a href="https://developer.apple.com/tutorials/swiftui/creating-and-combining-views">SwiftUI Tutorials</a>.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>{' '}
                {/* row End */}
            </section> /* Portfolio End*/
        )
    }
}
