import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton,
} from "react-mdl";

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#000000",
                height: "176px",
                background:
                  "url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png) center/cover",
              }}
            >
              Expense Tracker
            </CardTitle>
            <CardText>
              Untuk melacak pemasukan dan pengeluaran
            </CardText>
            <CardActions border>
              <Button colored>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/raihanputraramd/Expense-tracker"
                >
                  Github
                </a>
                </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#000000",
                height: "176px",
                background:
                  "url(data:image/png;base64,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) center/cover",
              }}
            >
              Extra
            </CardTitle>
            <CardText>Web Untuk Mengatur Ekstrakulikuler Sekolah</CardText>
            <CardActions border>
              <Button colored>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/E-X-TRA/extra"
                >
                  Github
                </a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#000000",
                height: "176px",
                background:
                  "url(data:image/png;base64,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) center/cover",
              }}
            >
              Cyclyx
            </CardTitle>
            <CardText>
              Aplikasi yang menyediakan kebutuhan bersepeda anda
            </CardText>
            <CardActions border>
              <Button colored>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/E-X-TRA/Cyclyx"
                >
                  Github
                </a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#000000",
                height: "176px",
                background:
                  "url(data:image/png;base64,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) center/cover",
              }}
            >
              Auktion
            </CardTitle>
            <CardText>Aplikasi untuk melakukan Lelang</CardText>
            <CardActions border>
              <Button colored>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/raihanputraramd/Auktion"
                >
                  Github
                </a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React.js</Tab>
          <Tab>HTML/CSS</Tab>
          <Tab>Android</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Project;
