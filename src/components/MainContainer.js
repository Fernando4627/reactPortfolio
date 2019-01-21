import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView, MDBIcon } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import CarouselPage from "./content/quotes";

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
            <MDBNavbar color="bg-primary" fixed="top" dark expand="md" scrolling transparent>
              <MDBNavbarBrand href="/">
                <strong>Fernando Aguilar</strong>
              </MDBNavbarBrand>
              {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
              <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBNavbarNav left>
                  <MDBNavItem active>
                    <MDBNavLink to="#">Home</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#">Portfolio</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#">Contact</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
                <MDBNavbarNav right>
                  <MDBNavItem>
                    <a href="#!" className="li-ic mr-3">
                      <MDBIcon icon="linkedin" />
                    </a>
                  </MDBNavItem>
                  <MDBNavItem>
                    <a href="https://github.com/Fernando4627" target="_blank" className="git-ic mr-3">
                      <MDBIcon icon="github" />
                    </a>
                  </MDBNavItem>
                  <MDBNavItem>
                    <a href="#!" className="gplus-ic mr-3">
                      <MDBIcon icon="google-plus" />
                    </a>
                  </MDBNavItem>
                  <MDBNavItem>
                    <a href="#!" className="slack-ic mr-3">
                      <MDBIcon icon="slack" />
                    </a>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          </Router>

          <MDBView src="https://i.pinimg.com/originals/06/26/3c/06263ca04f5ca649867d699304493a44.jpg">
            <MDBMask overlay="blue-light" className="flex-center flex-column text-white text-center">
            <CarouselPage/>
            </MDBMask>
          </MDBView>
        </header>

        <main>
          <MDBContainer className="text-center my-5">
            <h2>About Me</h2>
            <p>I am a dedicated worker, I strive to do my best in all situations. When there is an answer I do not
                  know
                  I try to find the answer for both others and myself. I first dipped my hand into coding in high
                  school,
                  and enjoyed it! I enjoy seeing the results of the hard work I put in and also like to support
                  others
                  with the knowledge I have or can do the work to find a way to be helpful.I am a quick learner and
                  adaptive
                    to all situations.</p><br />
            <p>I am married to my beautiful and intelligent wife Tammy, I have been working as a Pharmacy
                  Technician since 2014 and now
                  I am taking a new turn towards a creative and advancing field that will be more necessary for the
                  future
                  of my life and career. I hope to be ready for all the challenges that lay ahead but only time will
                    tell.</p><br />
          </MDBContainer>
        </main>
      </div>
    );
  }
}

export default MainContainer;