/*
  Resume.js
  This react component displays the resume.
 */
import { Component, Fragment } from 'react'

export class Resume extends Component {
    render() {
        let resumeData = this.props.resumeData
        return (
            <Fragment>
                {/* Resume */}
                <section id="resume" className="text-center container-fluid">
                    {/* Education */}
                    <div className="row education">
                        <div className="col-3 header-col">
                            <h1>
                                <span>Education</span>
                            </h1>
                        </div>
                        <div className="col-9 main-col">
                            <div className="row item">
                                <div className="col-12">
                                    <h3>Lewis University</h3>
                                    <p className="info">
                                        M.S. in Computer Science <span>•</span>{' '}
                                        <em className="date">August 2021</em>{' '}
                                        <br />
                                        <span>
                                            <a href="http://lewisu.smartcatalogiq.com/Graduate-2019-2020/Graduate-Catalog/NEW-College-of-Aviation-Science-and-Technology/Department-of-Mathematics-and-Computer-Sciences/Computer-Science-MS">
                                                Artifical Intelligence
                                            </a>{' '}
                                        </span>
                                        <br />
                                        <span>GPA: 3.96/4.0</span>
                                    </p>
                                    <p>
                                        I am able to apply artificial
                                        intelligence (AI), machine learning, robotics,
                                        and software engineering techniques and
                                        methodology to improve the performance
                                        of computer-based systems and create
                                        experience-based models for solving
                                        problems. I can also build systems that
                                        collect, communicate, and respond to
                                        sensor measurements or environmental
                                        signals.
                                    </p>
                                    <p>Related Courses:</p>
                                    <div className="row career-list text-start">
                                        <div className="col-sm-6 col-lg-4">
                                            <ul>
                                                <li>Artificial Intelligence 1/2</li>
                                                <li>Machine Learning</li>
                                                <li>Robotics</li>
                                            </ul>
                                        </div>
                                        <div className="col-sm-6 col-lg-8">
                                            <ul>
                                                <li>Natural Language Processing</li>
                                                <li>
                                                    Distributed Computing Systems
                                                </li>
                                                <li>
                                                    Statistical Programming (Python)
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row item">
                                <div className="col-12">
                                    <h3>University of Tennessee</h3>
                                    <p className="info">
                                        M.S. in Mathematics <span>•</span>{' '}
                                        <em className="date">August 1992</em>{' '}
                                        <br />
                                        <span>Applied Mathematics</span>
                                        <br />
                                        <span>GPA: 3.93/4.0</span>
                                    </p>
                                    <p>
                                        I have knowledge and experience in
                                        applying mathematical models and
                                        techniques in applied mathematics
                                        including linear algebra, numerical
                                        analysis, probability and statistics,
                                        advanced calculus, linear/nonlinear
                                        programming, and ordinary/partial
                                        differential equations.
                                    </p>
                                </div>
                            </div>
                            <div className="row item">
                                <div className="col-12">
                                    <h3>Carson-Newman College</h3>
                                    <p className="info">
                                        B.A. in Mathematics <span>•</span>{' '}
                                        <em className="date">May 1990</em>{' '}
                                        <br />
                                        <span>GPA: 4.0</span>
                                    </p>
                                    <p>
                                        I obtained key knowledge in mathematics
                                        including calculus, linear algebra,
                                        abstract algebra, probability and
                                        statistics, and ordinary differential
                                        equations.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row work">
                        <div className="col-3 header-col">
                            <h1>
                                <span>Skills</span>
                            </h1>
                        </div>
                        <div className="col-9 main-col">
                            <div className="row item">
                                <div className="col-6 ">
                                    <p className="skill">Languages</p>
                                    <p>
                                        C#, Python, Java/JEE, C/C++, Perl, and
                                        PHP
                                    </p>
                                    <p className="skill">
                                        AI Tools
                                    </p>
                                    <p>
                                        Anaconda, Python, SciPy, Plotly, scikit-learn,
                                        Tensorflow, Keras, OpenAI, OpenCV, OpenCL,
                                        NLTK, and more
                                    </p>
                                    <p className="skill">HTML/CSS</p>
                                    <p>HTML5/CSS3/LESS/SASS, Bootstrap</p>
                                    <p className="skill">
                                        Web/Mobile Technologies
                                    </p>
                                    <p>
                                        ASP.Net Core MVC, ASP.Net Core Razor
                                        Pages, Xamarin Forms, ASP.NET Core
                                        Identity, REST
                                    </p>
                                    <p className="skill">JavaScript</p>
                                    <p>
                                        NodeJS, React/Redux, Angular, Vue, and
                                        TypeScript; AJAX, JSON; Chart JS,
                                        jQuery, and jQuery DataTables
                                    </p>
                                    <p className="skill">
                                        Desktop Technologies
                                    </p>
                                    <p>WPF/XAML, Windows Forms, Java Swing</p>
                                </div>
                                <div className="col-6 ">
                                    <p className="skill">Development Tools</p>
                                    <p>
                                        Visual Studio, JetBrains (PyCharm,
                                        Rider, IntelliJ IDEA), Eclipse, LAMP,
                                        Git, Azure DevOps, Docker
                                    </p>
                                    <p className="skill">Application Servers</p>
                                    <p>
                                        IIS, Apache, Identity Server, Glassfish,
                                        Docker, and Websphere
                                    </p>
                                    <p className="skill">
                                        Software Engineering
                                    </p>
                                    <p>
                                        Agile, Scrum, Object-Oriented
                                        Programming, Design Patterns
                                    </p>
                                    <p className="skill">Databases</p>
                                    <p>
                                        SQL Server, MySQL, Oracle, SQLite, and
                                        DB2
                                    </p>
                                    <p className="skill">Operating Systems</p>
                                    <p>
                                        Windows 7/10, Windows Server
                                        2008/2012/2016, Linux, macOS, iOS, and
                                        UNIX
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row work">
                        <div className="col-3 header-col">
                            <h1>
                                <span>Work</span>
                            </h1>
                        </div>
                        <div className="col-9 main-col">
                            <div className="row item">
                                <div className="col-12">
                                    <h3>Consultant</h3>
                                    <p className="info">
                                        Lead Software Engineer <span>•</span>{' '}
                                        <em className="date">
                                            November 2019 - Present
                                        </em>
                                        <br />
                                        Knoxville, Tennessee
                                    </p>
                                    <p>
                                        <ul>
                                            <li>
                                                Design and development of mobile
                                                stock analysis application.
                                            </li>
                                            <li>
                                                Designed and developed web
                                                application using ASP.NET Core,
                                                React/Redux, Typescript, NodeJS,
                                                REST, Bootstrap, Serilog, Entity
                                                Framework, MongoDB, xUnit,
                                                Docker, ASP.NET Core Identity.
                                            </li>
                                            <li>
                                                Designed and developed mobile
                                                application for iOS and Android
                                                using Visual Studio, ASP.NET
                                                Core, Xamarin Forms, FreshMVVM,
                                                REST, .NET Standard, ASP.NET
                                                Core Identity.
                                            </li>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                            <div className="row item">
                                <div className="col-12">
                                    <h3>FOTO Inc.</h3>
                                    <p className="info">
                                        Senior Web Developer <span>•</span>{' '}
                                        <em className="date">
                                            November 2017 - November 2019
                                        </em>
                                        <br />
                                        Knoxville, Tennessee
                                    </p>
                                    <p>
                                        <ul>
                                            <li>
                                                Designed and developed mobile
                                                patient portal application for
                                                iOS and Android using Visual
                                                Studio, ASP.NET Core, Xamarin
                                                Forms, FreshMVVM, REST, .NET
                                                Standard, and Identity Server.
                                            </li>
                                            <li>
                                                Designed and developed customer
                                                portal system using ASP.NET
                                                Core, React/Redux, Typescript,
                                                NodeJS, REST, Bootstrap,
                                                Serilog, Entity Framework, SQL
                                                Server, xUnit, Docker, ASP.NET
                                                Core Identity.
                                            </li>
                                            <li>
                                                Designed and developed
                                                BackOffice billing system using
                                                ASP.NET Core, Razor Pages, REST,
                                                JavaScript, Bootstrap, JWT,
                                                AutoMapper, Entity Framework,
                                                SQL Server, xUnit, Git, Docker.
                                            </li>
                                            <li>
                                                Designed and developed
                                                enhancements and bug fixes for
                                                complex patient CAT survey and
                                                measurement system using ASP.NET
                                                Core MVC, HTML, CSS, JavaScript,
                                                jQuery, AJAX, JSON, Bootstrap,
                                                jQuery DataTables, ChartJS,
                                                FooTable, OpenXml, IronPdf, SQL
                                                Server, Git, and Azure AD, Azure
                                                DevOps, CI/CD, Docker.
                                            </li>
                                            <li>
                                                Designed and developed
                                                authentication and single
                                                sign-on system using ASP.NET
                                                Core MVC, ASP.Net Identity,
                                                Identity Server, AutoMapper,
                                                Serilog, Docker, Linux, Windows
                                                Server, SQL Server, and Git,
                                                Azure, continuous integration,
                                                Docker.
                                            </li>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                            <div className="row item">
                                <div className="col-12">
                                    <h3>Consultant</h3>
                                    <p className="info">
                                        <em className="date">
                                            August 2006 - November 2017
                                        </em>
                                        <br />
                                        Knoxville, Tennessee
                                    </p>
                                    <p>
                                        <ul>
                                            <li>
                                                Designed and developed catalyst
                                                tracking and document storage
                                                system using ASP.NET Core MVC on
                                                Linux, Entity Framework, ASP.NET
                                                Identity, HTML, CSS, Bootstrap,
                                                jQuery, AJAX, JSON, AutoMapper,
                                                Serilog, ChartJS, OpenXml,
                                                iTextSharp, IronPdf, jQuery
                                                DataTables, SQL Server, UML,
                                                Git, Azure, CI/CD, Docker.
                                            </li>
                                            <li>
                                                Designed and developed data
                                                acquisition and log file
                                                processing application program
                                                using C#.NET, WPF, Entity
                                                Framework, National Instruments
                                                DAQmx, XML, and SQLite.
                                            </li>
                                            <li>
                                                Developed website and
                                                application used by researchers
                                                at ORNL for modeling proteins
                                                and mass spectronomy using C++,
                                                PHP, HTML, CSS, Smarty,
                                                JavaScript, and MySQL.
                                            </li>
                                            <li>
                                                Developed prototype design of
                                                website for Blount County Public
                                                Library.
                                            </li>
                                            <li>
                                                Developed PowerShell scripts and
                                                other scripts for configuring
                                                computers at Blount County
                                                Public Library.
                                            </li>
                                            <li>
                                                Developed websites for{' '}
                                                <a href="etahmp.org">ETAHMP</a>{' '}
                                                using Joomla, Wordpress, HTML,
                                                CSS, PHP, and jQuery.
                                            </li>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>{' '}
                {/* Resume End*/}
            </Fragment>
        )
    }
}
