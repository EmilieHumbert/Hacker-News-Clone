import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import List from "../List/index";
import { colorsDark } from "../../styles/palette";

import { Wrapper, Title } from "./styles";

class App extends Component {
  componentDidMount() {
    this.props.fetchStoriesFirstPage();
  }

  render() {
    const { stories } = this.props;
    return (
      <ThemeProvider theme={colorsDark}>
        <div>
          <Wrapper>
            <Title>Hacker News Reader</Title>
            <List stories={stories} />
          </Wrapper>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;