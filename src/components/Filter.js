import React from 'react';

const Filter = (props) => {
    return ( 
    <div>
    <label htmlFor="filter" className="font-weight-bold mt-5 mr-2">Filter by Department:</label>

    <select name="filter" id="department" className="btn btn-dark" onChange={props.onChange}>
      <option value="all">All</option>
      <option value="dev">Developers</option>
      <option value="it">IT</option>
      <option value="hr">HR</option>
      <option value="legal">Legal</option>
    </select>
    </div> 
    );
}
   
export default Filter;