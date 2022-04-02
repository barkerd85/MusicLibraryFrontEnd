const MusicTable = (props) => {

  

  return (
    

   
    
      <table className="table table-bordered table-dark">
        <thead >
          <tr>
          <th scope="col">Title</th>
          <th scope="col">Artist</th>
          <th scope="col">Album</th>
          <th scope="col">Genre</th>
          <th scope="col">Release Date</th>
          </tr>
        </thead>
        <tbody>
          {props.musicList.map((e, i) => (
            <tr key={i}>
              <td  >{e.title}</td>
              <td  >{e.artist}</td>
              <td  >{e.album}</td>
              <td  >{e.genre}</td>
              <td  >{e.releaseDate}</td>
              <td><button onClick={()=>{props.deleteSong(e.id)}}>Delete Song</button></td>
              </tr>
          ))}
        </tbody>
      </table>
    
  );
};

export default MusicTable; 
              
            
              





          

            
          
              
              
              
              
             
              