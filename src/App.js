import React from "react";
import "./App.scss";
import { Layout, Navigation, Drawer, Content, Header } from "react-mdl";
import Main from "./components/Main";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header className="header-color" title="Portofolio" scroll>
          <Navigation>
            <Link to="/portofolio/">Home Page</Link>
            <Link to="/project">Projects</Link>
            <Link to="/contact">Contact</Link>
          </Navigation>
        </Header>
        <Drawer title="Portofolio">
          <Navigation>
            <Link to="/project">Projects</Link>
            <Link to="/contact">Contact</Link>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Main />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
