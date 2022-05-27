import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

class TabsTwo extends Component {
  render() {
    let tab1 = "Main skills",
      tab2 = "Awards",
      tab3 = "Experience",
      tab4 = "Education & Certification";
    const { tabStyle } = this.props;
    return (
      <div>
        {/* Start Tabs Area */}
        <div className="tabs-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <Tabs>
                  <TabList className={`${tabStyle}`}>
                    <Tab>{tab1}</Tab>
                    <Tab>{tab2}</Tab>
                    <Tab>{tab3}</Tab>
                    <Tab>{tab4}</Tab>
                  </TabList>

                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <a>
                            Front-End <span> - Development</span>
                          </a>
                          HTML5, CSS3, Javascript, Razor, Bootstrap, React JS..
                        </li>
                        <li>
                          <a>
                            Back-End
                            <span> - Development</span>
                          </a>
                          C#, Node, SQL, Entity Framework, MongoDB...
                        </li>
                        <li>
                          <a>
                            Project <span> - Management</span>
                          </a>
                          Scrum, Agile, UML Diagrams, Prototyping...
                        </li>
                      </ul>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <a>
                            Durban University of Technology{" "}
                            <span>- Deans Merit Award</span>
                          </a>{" "}
                          2020 - 2021
                        </li>
                        <li>
                          <a>
                            Durban University of Technology{" "}
                            <span>- Cum Laude</span>
                          </a>{" "}
                          2018 - 2021
                        </li>
                        <li>
                          <a>
                            Durban University of Technology{" "}
                            <span>- Merit Award</span>
                          </a>{" "}
                          2018 - 2019
                        </li>
                        <li>
                          <a>
                            Scottburgh High School{" "}
                            <span>
                              - Top Achiever for Computer Application Technology{" "}
                            </span>
                          </a>{" "}
                          2014-2016
                        </li>
                      </ul>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <a>
                            Director<span> - iLULA Software Solutions</span>
                          </a>{" "}
                          2021 - Current
                        </li>
                        <li>
                          <a>
                            Developer<span> - DUT Housing Department</span>
                          </a>{" "}
                          2020
                        </li>
                        <li>
                          <a>
                            Developer
                            <span>
                              {" "}
                              - Hlunga Industrial Psychology Assessments{" "}
                            </span>
                          </a>{" "}
                          2019
                        </li>
                      </ul>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <a>
                            DIPLOMA IN ICT: APPLICATION DEVELOPMENT
                            <span> - Durban University of Technology</span>
                          </a>{" "}
                          2020
                        </li>

                        <li>
                          <a>
                            Introduction to IoT
                            <span> - Cisco</span>
                          </a>{" "}
                          2020
                        </li>
                        <li>
                          <a>
                            Introduction to Cybersecurity
                            <span> - Cisco</span>
                          </a>{" "}
                          2019
                        </li>
                        <li>
                          <a>
                            NDG Linux Unhatched
                            <span> - Cisco</span>
                          </a>{" "}
                          2019
                        </li>

                        <li>
                          <a>
                            Networking Essentials
                            <span> - Cisco</span>
                          </a>{" "}
                          2019
                        </li>
                        <li>
                          <a>
                            NATIONAL SENIOR CERTIFICATE
                            <span> - Scottburgh High School</span>
                          </a>{" "}
                          2016
                        </li>
                      </ul>
                    </div>
                  </TabPanel>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
        {/* End Tabs Area */}
      </div>
    );
  }
}

export default TabsTwo;
