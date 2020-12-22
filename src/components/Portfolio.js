import { Component } from 'react'

export class Portfolio extends Component {
    render() {
        return (
            /* Portfolio */
            <section id="portfolio" className="text-center container-fluid">
                <div className="row">
                    <h1>Here are some of my software projects</h1>
                    <div class="album py-5 bg-light">
                        <div class="container">
                            <div class="row row-cols-2 row-cols-sm-3 row-cols-md-4 g-3">
                                <div class="col">
                                    <div class="card shadow-sm">
                                        <a href="https://github.com/codecypher/Yahboom_Tank_Code">
                                            <img
                                                alt=""
                                                src="images/portfolio/coffee.jpg"
                                                class="bd-placeholder-img card-img-top"
                                                width="100%"
                                                height="300"
                                                xmlns="http://www.w3.org/2000/svg"
                                                role="img"
                                                aria-label="Placeholder: Thumbnail"
                                                preserveAspectRatio="xMidYMid slice"
                                                focusable="false"
                                            ></img>{' '}
                                        </a>

                                        <div class="card-body">
                                            <p class="card-text">
                                                This is a wider card with
                                                supporting text below as a
                                                natural lead-in to additional
                                                content. This content is a
                                                little bit longer.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card shadow-sm">
                                        <img
                                            alt=""
                                            src="images/portfolio/console.jpg"
                                            class="bd-placeholder-img card-img-top"
                                            width="100%"
                                            height="300"
                                            xmlns="http://www.w3.org/2000/svg"
                                            role="img"
                                            aria-label="Placeholder: Thumbnail"
                                            preserveAspectRatio="xMidYMid slice"
                                            focusable="false"
                                        ></img>
                                        <div class="card-body">
                                            <p class="card-text">
                                                This is a wider card with
                                                supporting text below as a
                                                natural lead-in to additional
                                                content. This content is a
                                                little bit longer.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card shadow-sm">
                                        <img
                                            alt=""
                                            src="images/portfolio/origami.jpg"
                                            class="bd-placeholder-img card-img-top"
                                            width="100%"
                                            height="300"
                                            xmlns="http://www.w3.org/2000/svg"
                                            role="img"
                                            aria-label="Placeholder: Thumbnail"
                                            preserveAspectRatio="xMidYMid slice"
                                            focusable="false"
                                        ></img>
                                        <div class="card-body">
                                            <p class="card-text">
                                                This is a wider card with
                                                supporting text below as a
                                                natural lead-in to additional
                                                content. This content is a
                                                little bit longer.
                                            </p>
                                        </div>
                                    </div>
                                </div>{' '}
                                <div class="col">
                                    <div class="card shadow-sm">
                                        <img
                                            alt=""
                                            src="images/portfolio/retrocam.jpg"
                                            class="bd-placeholder-img card-img-top"
                                            width="100%"
                                            height="300"
                                            xmlns="http://www.w3.org/2000/svg"
                                            role="img"
                                            aria-label="Placeholder: Thumbnail"
                                            preserveAspectRatio="xMidYMid slice"
                                            focusable="false"
                                        ></img>
                                        <div class="card-body">
                                            <p class="card-text">
                                                This is a wider card with
                                                supporting text below as a
                                                natural lead-in to additional
                                                content. This content is a
                                                little bit longer.
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
