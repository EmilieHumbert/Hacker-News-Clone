import React, { Component, useState } from "react";
import { ThemeProvider } from "styled-components";
import InfiniteScroll from "react-infinite-scroll-component";
import List from "../List/index";
import Loader from "../Loader";
import {Button} from "../Button/styles"
import { colorsDark, colorsLight } from "../../styles/palette";
import GlobalStyles from "../../styles/globals";

import { Wrapper, Title } from "./styles";

class App extends Component {
  constructor() {
    super();
    this.state = {
      theme: "light",
    };
    this.toggleTheme = this.toggleTheme.bind(this);
  }

  toggleTheme() {
    this.setState((prevState) => {
      return {
        theme: prevState.theme === "light" ? "dark" : "light",
      };
    });
  }
  componentDidMount() {
    this.props.fetchStoriesFirstPage();
  }

  fetchStories = () => {
    const { storyIds, page, fetchStories, isFetching } = this.props;
    if (!isFetching) {
      fetchStories({ storyIds, page });
    }
  };

  render() {
    const { stories, hasMoreStories } = this.props;
    return (
      <ThemeProvider
        theme={this.state.theme === "light" ? colorsLight : colorsDark}
      >
        <div>
          <GlobalStyles />
          <Wrapper>
            <Title>Hacker News Reader</Title>
            <Button onClick={this.toggleTheme}>Change theme</Button>
            <InfiniteScroll
              dataLength={stories.length}
              next={this.fetchStories}
              hasMore={hasMoreStories}
              loader={<Loader />}
              style={{
                height: "100%",
                overflow: "visible",
              }}
            >
              <List stories={stories} />
            </InfiniteScroll>
          </Wrapper>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
