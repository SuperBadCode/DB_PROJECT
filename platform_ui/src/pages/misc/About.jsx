var React = require('react');

var About = React.createClass({
    render: function(){
        return(
            <div className="container">
				<div className="row">
					<div className="col-md-12">
						<h1 className="text-center"><strong>About The Project</strong></h1>
					</div>
				</div>
				
				<div className="row">
					<div className="col-md-offset-3 col-md-6">
						<p className="text-center">
							This application was developed for a final project in Principles of Information & Data Management at Rutgers.
							The end goal for this project was to learn how to create a backend framework using noSQL directional 
							graph database neo4j and using a structered query langauge mySQL. Also learning how to create frontend 
							user interfaces with React, Node.js, Bootstrap, and many other tools. All data presented in this
							application is complete bullshit and do not interpret it as a real product. Do not sue me. 
						</p>
					</div>
				</div>
		<div className="row">
			<div className="col-md-12">
				<h1 className="text-center"><strong>The Professor</strong></h1>
			</div>
		</div>
		<div className="row">
			<div className="col-md-3">
				<h3 className="text-left"><strong>Pf. Tomasz Imielinski</strong></h3>
				<img src="res?img=Tomasz_Imielinski.jpg" className="img-responsive" alt="Tomasz Imielinski"/>
			</div>
			<div className="col-md-9">
				<p>Graduated and received a B.E. and M.E. degree in Electrical Engineering from Politechnika Gdanska</p>
				<p>Received a doctorate in Computer Science from the Polish Academy of Sciences</p>
				<p>Is currently a professor at Rutgers University in New Jersey, United States.</p>
				<p>Co-founded Connotate Technologies in 2000, a web data extraction company and held multiple positions
					at Ask.com from Vice President of Data Solutions to Executive Vice President of Global Search and
					Answers
				</p>
				<p>Also receiving prestigious awards such as the 'SIGMOD Test of Time Award' and the '10 Year VLDB Best Paper Award' for published joint papers.</p>
				<h3 className="text-center"><strong>Interesting Links:</strong></h3>
				<ul>
					<li><a className="external" href="https://www.cs.rutgers.edu/~imielins/">Pf. Tomasz Imielinski</a></li>
					<li><a className="external" href="http://scholar.google.com/citations?user=fEYp6hEAAAAJ&hl=en">Google Scholar</a></li>
					<li><a className="external" href="http://academic.research.microsoft.com/Author/3690317/tomasz-imielinski">Microsoft Academic Search</a></li>
					<li><a className="external" href="http://www.sigmod.org/sigmodinfo/awards/time/2003-Agrawal-et-al.html">10 Year Test of Time SIGMOD Award</a></li>
					<li><a className="external" href="http://www.vldb.org/archives/public/10year/10year.html">10 Year VLDB Best Paper Award</a></li>
					<li><a className="external" href="http://www.connotate.com/">Connotate Technologies</a></li>
					<li><a className="external" href="http://www.system-crash.com/">System Crash</a></li>
				</ul>
			</div>
		</div>
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="text-center"><strong>About The Developers</strong></h1>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-3">
                        <h3 className="text-left"><strong>Nicole Yson</strong></h3>
                        <img src="res?img=Nicole.jpg" className="img-responsive" alt="Nicole Yson"/>
                    </div>

                    <div className="col-md-9">
                        <ul className="list-inline">
                            <li><h4><strong>Majors:</strong></h4></li>
                            <li><p>Computer Science B.S. and Psychology B.S.</p></li>
                        </ul>
                        <span>
                            <h4><strong>Internships:</strong></h4>
                            <ul>
                                <li>PM2NET</li>
                                <li>Affective and Biological Underpinnings of Substance Use and Anxiety Lab</li>
                                <li>Migration Demography Research</li>
                                <li>UT MD Anderson Cancer Center</li>
                            </ul>
                        </span>
						<ul className="list-inline">
							<li><h4><strong>Born: </strong></h4></li>
							<li><p>California, United States</p></li>
						</ul>
						<span>
							<h4><strong>Quote: </strong></h4>
							<p>Say Stuff</p>
						</span>
                        <ul className="list-inline">
                            <li><h4><strong>GitHub:</strong></h4></li>
                            <li><a className="external" href="https://github.com/NicoleYson">Nicole Yson</a></li>
                        </ul>
                    </div>
                </div>
		<br/>
                <div className="row">
                    <div className="col-md-3">
                        <h3 className="text-left"><strong>Damian Debkowski</strong></h3>
                        <img src="res?img=Damian.jpg" className="img-responsive" alt="Damian Debkowski"/>
                    </div>

                    <div className="col-md-9">
                        <ul className="list-inline">
							<li><h4><strong>Major:</strong></h4></li>
                            <li><p>Computer Science B.S.</p></li>
                        </ul>
                        <span>
                            <h4><strong>Internships:</strong></h4>
                            <ul>
                                <li>Unified Social</li>
                            </ul>
                        </span>
						<ul className="list-inline">
							<li><h4><strong>Born: </strong></h4></li>
							<li><p>Prostyn, Poland</p></li>
						</ul>
						<span>
							<h4><strong>Quote: </strong></h4>
							<p>Say Stuff</p>
						</span>
                        <ul className="list-inline">
                            <li><h4><strong>GitHub:</strong></h4></li>
                            <li><a className="external" href="https://www.github.com/Damian3395/DB_PROJECT">Damian Debkowski</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = About;
