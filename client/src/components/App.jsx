import React from "react";
import axios from "axios";
import Cow from "./Cow.jsx";
import AddCows from "./AddCows.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cows: [],
      clicked: 0,
      showing: -1
    };
    this.fetch = this.fetch.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.addCow = this.addCow.bind(this);
  }
  handleEdit(input) {
    axios.put("/api/cows", input)
    .then((res) => {
      console.log(res.data);
      this.fetch();
    })
    .catch(console.log)
  }
  handleDelete(id) {
    if(id === this.state.clicked) {
      this.setState({clicked: 0, showing: -1});
    }
    axios.delete(`/api/cows/?id=${id}`)
    .then((res) => {
      console.log(res.data);
      this.fetch();
    })
    .catch(console.log);
  }
  handleClick(id) {
    var index = -1;
    for(var i = 0; i < this.state.cows.length; i ++) {
      if(this.state.cows[i]._id === id){
        index = i;
        break;
      }
    }
    if(id !== this.state.clicked){
      this.setState({clicked: id, showing: index});
    } else{
      this.setState({clicked: 0, showing: -1});
    }
  }
  addCow(input) {
    axios.post("/api/cows", input)
    .then((res)=>{
      console.log(res.data);
      this.fetch();
    })
    .catch(console.log);
  }
  fetch() {
    axios.get("/api/cows")
    .then((res) => {
      console.log(res.data);
      this.setState({cows: res.data});
    })
    .catch(console.log);
  }
  componentDidMount() {
    this.fetch();
  }
  render() {
    return(
      <div>
        <h1>Cow List</h1>
       {this.state.clicked && this.state.cows[this.state.showing] ? <p>{this.state.cows[this.state.showing].cow_description}</p> : ''}
        <AddCows addCow={this.addCow}/>
        <div>
          {this.state.cows.map((cow) =>
          <Cow
            key={cow._id}
            id={cow._id}
            name={cow.cow_name}
            description={cow.cow_description}
            handleEdit={this.handleEdit}
            handleDelete={this.handleDelete}
            handleClick={this.handleClick}
          />
          )}
        </div>
      </div>
    )
  }
}


export default App;