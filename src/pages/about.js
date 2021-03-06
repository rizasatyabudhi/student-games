import React from "react";
import Navigation from "../components/navigation";
import me from "../images/me.jpg";

const about = () => (
  <main>
    <section className="section-book">
      <Navigation />
      <div className="row">
        <div className="book animate">
          <div className="book__form">
            <form action="#" className="form">
              <img
                className=""
                src={me}
                alt=""
                style={{
                  width: "256px",
                  borderRadius: "50%",
                  margin: "30px auto",
                  display: "block"
                }}
              />
              <div className="u-margin-bottom-medium u-center-text ">
                <h2 className="heading-secondary">About Me</h2>
              </div>
              <div className="u-center-text">
                <p className="paragraph">
                  I am a computer science student who passionate in the software
                  development. I started my software development learning journey
                  from front-end web development. Started from the most basic
                  front-end aspects, until utilizing the most popular front-end
                  framework named React JS, which is used by big companies like
                  Facebook,Instagram,Traveloka,Tokopedia, and many more. I then
                  continue to learn GraphQL, a query language for API, which may
                  be replacing REST API in the future. I then continue to learn
                  back-end as well, which is with node JS with express & mongoDB
                  to create a web server API.
                </p>

                <p className="paragraph">
                  My software development journey doesn't end here, i am know branching my development path to become mobile developer, which is iOS Developer. This is the software development path i chose from here now on, to become iOS Developer
                </p>

                <p className="paragraph">
                  I believe the growth mindset. I see challenges as a way to improve myself. I have committed myself to never stop learning, because I
                  believe that development is always advancing. If I stop
                  learning, that means I will be left behind with the
                  awesomeness of technologies advancement.
                </p>
              </div>

              <div className="u-center-text u-margin-top-big ">
                <div className="row">
                  <h3 className="heading-tertiary u-margin-bottom-small">
                    Education
                  </h3>
                  <p className="paragraph">
                    <strong> Computer Science Undergraduate</strong>
                    <br />Universitas Gadjah Mada
                    <br /> 2015 - Present
                  </p>
                </div>
              </div>
              <div className="u-center-text u-margin-top-big ">
                <div className="row">
                  <h3 className="heading-tertiary u-margin-bottom-small">
                    Experience
                  </h3>
                  <p className="paragraph">
                    <strong>
                      1. INTERNAL & EXTERNAL OF HIMPUNAN MAHASISWA ILMU KOMPUTER
                      UGM
                    </strong>
                    <br /> Oct 2015 – Sept 2016
                    <br /> I learned many soft skills after I joined this
                    division of Himpunan Mahasiswa Ilmu Komputer UGM, such as
                    time management skill, communication skill, organizational
                    skill, many more.
                  </p>
                  <p className="paragraph">
                    <strong>
                      2. INFORMATION SYSTEM DIVISION OF ORGANISASI MAHASISWA
                      AHLI TEKNOLOGI INFORMASI
                    </strong>
                    <br /> Sept 2016 – Sept 2017
                    <br /> My passion in web development started when I join the
                    information system division of this organization. I learned
                    many basic web development skill here, as we conducted
                    tutorial session three times a week.
                  </p>
                  <p className="paragraph">
                    <strong>
                      3. FRONT END DEVELOPER, PT SIGMA CIPTA CARAKA (TELKOMSIGMA)
                    </strong>
                    <br /> July 2017 – Oct 2017
                    <br />
                    Developed and implemented the PRouds software as a front end developer using Node.js, REACT.js and Express JS. PRouds is a human resource management system that will be used for the staff at TelkomSigma and Telkom to help maintain their progress, work and schedules.
                  </p>
                  <p className="paragraph">
                    <strong>4. DATTABOT WEB DEVELOER INTERNSHIP</strong>
                    <br /> Sept 2017 – Dec 2017
                    <br /> I was the front-end web developer for Dattabot, which
                    responsible for creating web application prototype using
                    Next JS, a server-side rendering framework for React JS. The
                    prototype also use GraphQL for the backend, which requires
                    me to connect the GraphQL backend server with the front- end
                    using Apollo library. I learned many new cutting edge
                    technologies such as NextJS and GraphQL from this project.
                  </p>
                  <p className="paragraph">
                    <strong>5. JOGJA INFORMATION TECHNOLOGY SESSION WEB DEVELOPER</strong>
                    <br /> Dec 2017 – Jan 2018
                    <br /> I was in charged of making the website for Himakom’s (Himpunan Mahasiswa Ilmu Komputer Gadjah Mada) biggest technology event, the website was beautifully made following current design trends.
                  </p>
                  <p className="paragraph">
                    <strong>6. QISCUS STUDENT AMBASSADOR</strong>
                    <br /> Feb 2018 – Apr 2018
                    <br /> A mentorship program from Qiscus (Singapore Based Startup) to develop my professional skills, leadership, partnerships. I got benefits such as hands- on experience in strategic projects, mentoring with Qiscus’ Management and others, including their COO.
                  </p>
                  <p className="paragraph">
                    <strong>7. BINAR ACADEMY iOS DEVELOPER</strong>
                    <br /> Feb 2018 – Mar 2018
                    <br /> 2 months intensive program to develop student’s software development skills. I got mentors from ex – GOJEK iOS engineer.
                  </p>
                </div>
              </div>


            </form>
          </div>
        </div>
      </div>
    </section>
  </main>
);

export default about;
