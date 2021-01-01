// import React, { Component } from "react";
// import { DataContext } from "../../Context/DataContextProvider";
// import { FoodCard } from "./FoodCard";

// class Food extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: [],
//     };
//   }
//   componentDidMount() {
//     const { projects } = this.context;
//     const updateState = projects.filter(
//       (item) => item.category === "Food&Craft"
//     );
//     console.log(updateState);
//     this.setState({
//       data: updateState,
//     });
//   }
//   render() {
//     return (
//       <div style={{margin:"5px 5%"}}>
//         <h3>Food & Craft</h3>
//         <div>
//           Join forces with the intrepid Foodmakers and festival creators
//           changing the way stories get told on screen.
//         </div>
//         <div>FEATURED PROJECT</div>
//         <br />
//         <div>
//           {this.state.data?.map((item) => (
//             <FoodCard key={item.id} item={item} />
//           ))}
//         </div>
//       </div>
//     );
//   }
// }
// Food.contextType = DataContext;
// export { Food };


import React, { Component } from "react";
import { DataContext } from "../../Context/DataContextProvider";
import Recommended from "../Recommended";
import { FoodCard } from "./FoodCard";
class Food extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    const { projects } = this.context;
    const updateState = projects.filter(
      (item) => item.category === "Food&Craft"
    );
    console.log(updateState);
    this.setState({
      data: updateState,
    });
  }
  render() {
    return (
      <div
        style={{
<<<<<<< HEAD
          display: "flex",margin:"5px 5%"
        }}
      >
        <div>
          <h3>Food & Craft</h3>
=======
          display: "flex",
        }}
      >
        <div>
          <h3>Food&Craft</h3>
>>>>>>> df323192d1688bb90b2c75dea0aadd58a94efed2
          <div>
            Join forces with the intrepid Foodmakers and festival creators
            changing the way stories get told on screen.
          </div>
          <div>FEATURED PROJECT</div>
          <br />
          <div>
            {this.state.data?.map((item) => (
              <FoodCard key={item.id} item={item} />
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
Food.contextType = DataContext;
export { Food };