import './SearchBar.css'


export default function SearchBar (props){
    
    return (
      <div className="searchBar" >
        <input placeholder="Search..." value={props.query} onChange={(e) => props.setQuery(e.target.value)} />
      
      </div>)
   }
  