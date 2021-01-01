import React, { Component } from "react";
import { DataContext } from "../../Context/DataContextProvider";
import Recommended from "../Recommended";
import { FilmCard } from "./FilmCard";

class Film extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    const { projects } = this.context;
    const updateState = projects.filter((item) => item.category === "Film");
    console.log(updateState);
    this.setState({
      data: updateState,
    });
  }
  render() {
    return (
      <div
        style={{
          display: "flex",
        }}
      >
        <div>
          <h3>Film</h3>
          <div>
            Join forces with the intrepid filmmakers and festival creators
            changing the way stories get told on screen.
          </div>
          <div>FEATURED PROJECT</div>
          <br />
          <div>
            {this.state.data?.map((item) => (
              <FilmCard key={item.id} item={item} />
            ))}
          </div>
        </div>
        <div
          style={{
            // display: "flex",
            maxWidth: "480px",
            margin: "30px 0 0 0px",
            // border: "1px solid black",
          }}
        >
          <Recommended />
        </div>
      </div>
    );
  }
}
Film.contextType = DataContext;
export { Film };
