import React from "react";
<div className="table-bordered"></div>


const SongTable = (props) => {
  return (
    <div>
      <table className="table table-bordered table-dark">
        <thead>
          <tr>
          
          <th scope="col">Title</th>
          <th scope="col">Artist</th>
          <th scope="col">Album</th>
          <th scope="col">Genre</th>
          <th scope="col">Release Date</th>

            
          </tr>
        </thead>
        <tbody>
          {props.table.map((e, i) => (
            <tr key={i}>
              <th scope="row">{e.title}</th>
              <th scope="row">{e.artist}</th>
              <th scope="row">{e.album}</th>
              <th scope="row">{e.genre}</th>
              <th scope="row">{e.releaseDate}</th>
              <td>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SongTable; 
              
              
              
              
             
              