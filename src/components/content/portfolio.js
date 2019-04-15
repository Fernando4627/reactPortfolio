import React from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";

const Portfolio = () => {
  return (
    <MDBContainer>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <h2 className="text-white text-center">Portfolio</h2>
      <MDBCarousel activeItem={1} length={6} showControls={true} showIndicators={true} className="z-depth-1">
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img className="d-block w-100" src="/assets/images/giphy.jpg" alt="First slide" />
              <MDBMask overlay="black-light" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive">AJAX_Giphy</h3>
              <p><a href="https://github.com/Fernando4627/AJAX_Giphy">Repository</a>
              </p>
              <p><a href="https://fernando4627.github.io/AJAX_Giphy/">Giphy</a>
              </p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img className="d-block w-100" src="/assets/images/Trains.jpg" alt="Second slide" />
              <MDBMask overlay="black-strong" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive">Firebase Trains</h3>
              <p><a href="https://github.com/Fernando4627/Firebase_Train">Repository</a>
              </p>
              <p><a href="https://fernando4627.github.io/Firebase_Train/">Firebase Trains</a>
              </p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img className="d-block w-100" src="/assets/images/Project1.jpg" alt="Third slide" />
              <MDBMask overlay="black-slight" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive">Game Search</h3>
              <p><a href="https://github.com/GeoQer/GroupProject1">Repository</a>
              </p>
              <p><a href="https://geoqer.github.io/GroupProject1/">Game Search</a>
              </p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="4">
            <MDBView>
              <img className="d-block w-100" src="/assets/images/Unit4.jpg" alt="Mattonit's item" />
              <MDBMask overlay="black-light" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive">Gem Game</h3>
              <p><a href="https://github.com/Fernando4627/unit-4-game">Repository</a>
              </p>
              <p><a href="https://fernando4627.github.io/unit-4-game/">Gem Game</a>
              </p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="5">
            <MDBView>
              <img className="d-block w-100" src="/assets/images/ckbk.jpg" alt="First slide" />
              <MDBMask overlay="black-light" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive">CKBK</h3>
              <p><a href="https://github.com/andresjgonzalez6/Platform-9-and-3-4">Repository</a></p>
              <p><a href="https://guarded-springs-86797.herokuapp.com/">CKBK</a>
              </p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="6">
            <MDBView>
              <img className="d-block w-100" src="/assets/images/giphy.jpg" alt="First slide" />
              <MDBMask overlay="black-light" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive">LFJ Looking For Job</h3>
              <p><a href="https://github.com/Fernando4627/LFJ-Looking-for-Job">Repository</a>
              </p>
              <p><a href="https://fernando4627.github.io/AJAX_Giphy/">LFJ</a>
              </p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
}

export default Portfolio;