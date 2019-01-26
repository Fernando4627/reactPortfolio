import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView, MDBIcon, MDBRow, MDBCol } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import Portfolio from "./content/portfolio"
//import ScrollTo from "react-scroll-to";

class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  render() {
    return (
      <div>
        <header>
          <Router>
            <MDBNavbar color="elegant-color-dark" fixed="top" dark expand="md" scrolling transparent>
              <MDBNavbarBrand href="/" >
                <strong>Fernando Aguilar</strong>
              </MDBNavbarBrand>
              {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
              <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBNavbarNav left>
                  <MDBNavItem active>
                    <MDBNavLink to="#!">
                      <a>Home</a>
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#!">
                      <a>About Me</a>
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#!">
                      <a>Portfolio</a>
                    </MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
                <MDBNavbarNav right>
                  <MDBNavItem>
                    <a href="https://www.linkedin.com/in/fernando4627/" className="li-ic mr-3" target="_blank" rel="noopener noreferrer">
                      <MDBIcon icon="linkedin" />
                    </a>
                  </MDBNavItem>
                  <MDBNavItem>
                    <a href="https://github.com/Fernando4627" className="git-ic mr-3" target="_blank" rel="noopener noreferrer">
                      <MDBIcon icon="github" />
                    </a>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          </Router>

          <MDBView src="https://i.pinimg.com/originals/06/26/3c/06263ca04f5ca649867d699304493a44.jpg">
            <MDBMask overlay="black-light" className="flex-center flex-column text-white text-center" >
              <h4 className="w-75">
                Web developer focused on improving client’s user experience and increasing functionality for developers. By having a strong work ethic, I strive on improving and perfect every challenge I come across. Passionate on learning any new languages and skilled at problem solving, Javascript, CSS,  HTML, and Node.js, experience in working in teams able to pick up the slack in any position that is falling behind but also work on my own.
              </h4>
            </MDBMask>
          </MDBView>
        </header>

        <main>
          <MDBContainer className="text-center my-5" >
            <h2 className="text-white text-center">About Me</h2>
            <MDBRow>
              <img src="/assets/images/me.jpg" className="col-md-3 h-25" alt="me" />
              <MDBCol size="9">
                <p className="text-white text-center">
                  I am a dedicated worker, I strive to do my best in all situations. When there is an answer I do not
                      know
                      I try to find the answer for both others and myself. I first dipped my hand into coding in high
                      school,
                      and enjoyed it! I enjoy seeing the results of the hard work I put in and also like to support
                      others
                      with the knowledge I have or can do the work to find a way to be helpful. I am a quick learner and
                      adaptive
                    to all situations.
                    </p>
                <br />
                <p className="text-white text-center">
                  I am married to my beautiful and intelligent wife Tammy, I have been working as a Pharmacy
                      Technician since 2014 and now
                      I am taking a new turn towards a creative and advancing field that will be more necessary for the
                      future
                      of my life and career. I hope to be ready for all the challenges that lay ahead but only time will
                    tell.</p><br />
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </main>
        <div>
          <MDBContainer>
            <Portfolio  />
          </MDBContainer>
        </div>
      </div>
    );
  }
}

export default MainContainer;