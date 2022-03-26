import React from "react";
class Cow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      description: this.props.description,
      editing: false
    }
    this.edit = this.edit.bind(this);
    this.enterName = this.enterName.bind(this);
    this.enterDescri = this.enterDescri.bind(this);
    this.save = this.save.bind(this);
  }
  edit() {
    this.setState({editing: true});
  }
  enterName(e) {
    this.setState({name: e.target.value});
  }
  enterDescri(e) {
    this.setState({description: e.target.value});
  }
  save() {
    this.setState({editing: false});
    this.props.handleEdit({"id":this.props.id, "name": this.state.name, "description": this.state.description})
  }
  render() {
    if(!this.state.editing) {
      return (
        <li>
          <p onClick={()=>{this.props.handleClick(this.props.id)}}>{this.state.name}</p>
          <button onClick={this.edit}>Edit</button>
          <button onClick={()=>{this.props.handleDelete(this.props.id)}}>Delete</button>
        </li>
      )
    } else {
      return(
        <li>
          <input type="text" value={this.state.name} onChange={this.enterName}></input>
          <input type="text" value={this.state.description} onChange={this.enterDescri}></input>
          <button onClick={this.save}>Save</button>
          <button onClick={()=>{this.props.handleDelete(this.props.id)}}>Delete</button>
        </li>
      )
    }
  }
}

export default Cow;