import React, { useState, useEffect} from "react";
import SearchBar from "./Components/SearchBar/SearchBar";
import TitleBar from "./Components/TitleBar/TitleBar";
import AddSong from "./Components/AddSong/AddSong";
import MusicTable from "./Components/MusicTable/MusicTable";
import axios from "axios";




function App() {
   const [musicList,setMusicList] = useState([]);
   const [query, setQuery] = useState("");
   const [title, setTitle] = useState("");
   const [album, setAlbum] = useState("");
   const [artist, setArtist] = useState("");
   const [genre, setGenre] = useState("");
   const [releaseDate, setReleaseDate] = useState("");
   




  async function getTable() {
   try{
    let response = await axios.get("http://localhost:5000/api/songs");
      
     setMusicList(response.data); 
      
   }catch (ex) {
      console.log("API call failed");
    }
  }
  
  let handleSubmit = async (e) => {
    e.preventDefault();
    const addedSong = { 
      title:title,
      album:album,
      artist:artist,
      genre:genre,
      releaseDate:releaseDate }

    fetch("http://localhost:5000/api/songs", {
      method:'POST',
      headers:{ "Content-Type": "application/json"},
      body: JSON.stringify(addedSong)
  }).then((res) => {
    if (res.status == 201) {alert('song added')}
  }).then(()=>{
    getTable()
  })
};

 useEffect(()=>{
   getTable();
 },[]);

 function search(rows) {
   const columns = rows[0] && Object.keys(rows[0]);
   return rows.filter((row) =>
     columns.some(
       (column) =>
         row[column].toString().toLowerCase().indexOf(query.toLowerCase()) > -1
     )
   );
 }

const deleteSong =(id) => {
  fetch(`http://localhost:5000/api/songs/${id}`, {
      method:'DELETE',
      headers:{ "Content-Type": "application/json"},
      body:""
  })
  .then((res) => {
    if (res.status == 201) {alert('song deleted')}
  }).then(()=>{
    getTable()
  })
};



   
   return (
      <div>
        
         <TitleBar/>
         <AddSong
          title={title}
          album={album}
          artist={artist}
          genre={genre}
          releaseDate={releaseDate}
          setTitle={setTitle}
          setAlbum={setAlbum}
          setArtist={setArtist}
          setGenre={setGenre}
          setReleaseDate={setReleaseDate}
          handleSubmit={handleSubmit}/>
        <SearchBar query={query} setQuery={setQuery} />
        <MusicTable deleteSong={deleteSong}  musicList={search(musicList)} />       
        </div> 
      );
}
   
export default App;   
        
       
     
                
              
  



      
        