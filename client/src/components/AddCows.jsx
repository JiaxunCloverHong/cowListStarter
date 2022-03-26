import React from "react";

class AddCows extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: ''
    }
    this.enterName = this.enterName.bind(this);
    this.enterDescri = this.enterDescri.bind(this);
  }
  enterName(e) {
    this.setState({name: e.target.value});
  }
  enterDescri(e) {
    this.setState({description: e.target.value});
  }
  render() {
    return(
      <div>
        <label>Name:
          <input type="text" value={this.state.name} placeholder="Enter a name" onChange={this.enterName}></input>
        </label>
        <label>Description:
          <input type="text" value={this.state.description} placeholder="Enter a description" onChange={this.enterDescri}></input>
        </label>
        <button onClick={()=>{this.props.addCow({"name": this.state.name, "description": this.state.description})}}>Add!</button>
      </div>
    )
  }
}

export default AddCows;