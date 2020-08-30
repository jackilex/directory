import React from 'react';

const Sort = (props) => {
    return ( 
        <div>
        <label htmlFor="sort" className="font-weight-bold mt-5 mr-2 ml-3">Sort by:</label>
    
        <select name="sort" id="sort" className="btn btn-dark" onChange={props.onChange}>
          <option value="az">A-Z</option>
          <option value="za">Z-A</option>
          <option value="rank">Rank</option>
          <option value="id">ID</option>
        </select>
        </div>
     );
}
 
export default Sort;