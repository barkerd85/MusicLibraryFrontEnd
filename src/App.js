import axios from "axios";
import React, { Component } from "react";
import SongTable from "./Components/MusicTable/SongTable";
import SearchBar from "./Components/SearchBar/SearchBar";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      table: [],
    };
  }

  componentDidMount() {
    this.getTable();
  }

  async getTable() {
    try {
      let responseTable = await axios.get("http://www.devcodecampmusiclibrary.com/api/music");
      this.setState({
        table: responseTable.data,
      });
      console.log(responseTable);
    } catch (ex) {
      console.log("Error in API call!");
    }
  }

   

  render() {
    return (
      <div>
        <SearchBar />
        <SongTable table={this.state.table} />
       </div>
    );
  }
}

export default App; 
      