import React from "react";
import NavBar from "./Navbar";
import Footer from "./Footer";
import "../designs/Services.css"

function Services() {

    return (
        <div className="services">
            <NavBar />
            <div className="wpb_wrapper">
                <div className="scope-of-work">
                    <div className="scope">
                        <h1 className="srv">
                            <strong>Scope of work:</strong>
                        </h1>
                   
                        <ul>
                            <li>
                                <h3>~Interior finishes</h3>
                            </li>
                            <li>
                                <h3>~Bespoke Furniture</h3>
                            </li>
                            <li>
                                <h3>~Wall Panelling</h3>
                            </li>
                            <li>
                                <h3>~House Renovations</h3>
                            </li>
                            <li>
                                <h3>~Luxury Tv Unit</h3>
                            </li>
                            <li>
                                <h3>~Slats Panels</h3>
                            </li>
                            <li>
                                <h3>~Electrical and lighting Layout</h3>
                            </li>
                            <li>
                                <h3>~Estimate and cost</h3>
                            </li>
                            <li>
                                <h3>
                                    ~e-Design (is a convenient and affordable alternative to traditional
                                    design services)
                                </h3>
                            </li>
                        </ul>
             
                        <h4>
                            It's perfect if you want the expertise, creative vision, and direction
                            for your space but you prefer to complete the transformation at your
                            own pace & are happy to project manage yourself.
                        </h4>
                        <h4>
                            And what's more appealing is that the process is super simple! You
                            provide information about your space and what you envision, and we
                            create a bespoke design plan that's easy to follow, meets your needs
                            and is bang on budget.
                        </h4>
                        <h4></h4>
                        <div className="design-phases">
                
                        <h1 className="srv">
                            <strong>Design Phases:</strong>
                        </h1>
                        <h2>
                            <strong>Phase 1: Consultation</strong>
                        </h2>
                        <h4>
                            We begin each project with a design consultation. This meeting is where
                            we get to learn more about you and your project, so that we can curate a
                            personalized design just for you. We ask lots of questions so that we
                            can get to know your lifestyle, your needs, and how you'd like to better
                            utilize your space. We also gather information about your personal style
                            and design preferences, to get a better grasp on your aesthetic.
                        </h4>
                        <h2>
                            <strong>Phase 2: Planning</strong>
                        </h2>
                        <h4>
                            Once you've signed on the dotted line, we get to work! We start by
                            collecting some critical information (including measurements &amp;
                            dimensions, photos, and inspo), then we begin to make our selections to
                            create your curated design! Once the design is complete, we meet to
                            present our ideas and get your feedback. Once the design is finalized
                            and approved, it's time to move onto to the next phase.
                        </h4>
                        <h2>
                            <strong>Phase 3: The Design Beyond</strong>
                        </h2>
                        <h4>
                            Once your design is complete, we offer additional design support and
                            project management services to execute your project to the highest
                            level. Whether you'd like for us to manage your project and coordinate
                            contractors and tradespeople, or you'd like for us to follow up with
                            additional lighting and placement guides, we can help you in any way you
                            need. Not sure what all of this will look like? Check out our website to
                            browse samples of our work. Ready to get started already? Reach out to
                            us so we can schedule your consultation ASAP!
                        </h4>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>

        </div>
    );
}

export default Services;
