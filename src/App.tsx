import React, { useState, Suspense, lazy } from "react";
import styled from "styled-components/macro";
import { Switch, Route, Redirect } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Home } from "./home";
import { Contact } from "./contact";
import { Experience } from "./experience";
import { Stocks } from "./stocks";
import { Resume } from "./resume";
import { homeURL, contactURL, experienceURL } from "./config";
import Particles from "./components/Particles/Particles";

const NavigationBar = lazy(
  () => import("./components/NavigationBar/NavigationBar")
);

const Main = styled.section<any>`
  height: 100%;
  display: block;
  color: #ffffff;
`;

const App = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
    return null;
  };

  return (
    <Suspense fallback={<></>}>
      <Main role="main">
        <Particles />

        <NavigationBar />
        <Route component={scrollToTop} />
        <Switch>
          <Route path={homeURL} component={() => <Home />} />
          <Route path={experienceURL} component={() => <Experience />} />
          {/* Maybe get creative, and remove contact, have one pager, but with mobile navigation that only show contacts/social media links? */}
          <Route path={contactURL} component={() => <Contact />} />
          <Route exact path="*" component={() => <Redirect to={homeURL} />} />
          {/* <Route exact path="/stocks" component={() => <Stocks />} /> */}
          {/* <Route exact path="/resume" component={() => <Resume />} /> */}
        </Switch>
        <Footer />
      </Main>
    </Suspense>
  );
};

export default App;
