import React from 'react'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isColorSelected: " "
    };
  }





  render() {
    let red2 = " ";
    let orange2 = " ";
    let green2 = " ";

    if (this.state.isColorSelected === "red")
      red2 = "glow"
    if (this.state.isColorSelected === "orange")
      orange2 = "glow"
    if (this.state.isColorSelected === "green")
      green2 = "glow";


    return (
      <div className="container fondo">
        <div>

        </div>
        <div>
          <div onClick={() => this.setState({ isColorSelected: "red" })} className={'redlight ' + red2}>

          </div>
          <div onClick={()=>this.setState({ isColorSelected: "orange" })} className={'orangelight ' + orange2}>

          </div>
          <div onClick={()=>this.setState({ isColorSelected: "green" })} className={'greenlight ' + green2}>

          </div>
        </div>
      </div >
    )
  }
};

export default App;
