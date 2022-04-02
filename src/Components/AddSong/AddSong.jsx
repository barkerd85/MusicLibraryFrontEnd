const AddSong = (props) => {
  return (
    <div>
      <form onSubmit = {props.handleSubmit}>
        
        <input
          type="text"
          value={props.title}
          placeholder="Title"
          onChange={(e) => props.setTitle(e.target.value)}
        />
        <input
          type="text"
          value={props.album}
          placeholder="Album"
          onChange={(e) => props.setAlbum(e.target.value)}
        />
        <input
          type="text"
          value={props.artist}
          placeholder="Artist"
          onChange={(e) => props.setArtist(e.target.value)}
        />
        <input
          type="text"
          value={props.genre}
          placeholder="Genre"
          onChange={(e) => props.setGenre(e.target.value)}
        />
        <input
          type="date"
          value={props.releaseDate}
          
          onChange={(e) => props.setReleaseDate(e.target.value)}
        />

        <button type="submit" value="Sumbit">Add Song</button>

       
  

       
         
        
      </form>
    </div>
  );
};



export default AddSong;