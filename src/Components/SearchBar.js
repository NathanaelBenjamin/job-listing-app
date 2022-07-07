import React, { useId, useContext } from 'react';
import { SelectedItemsContext } from '../Contexts/SelectedItemsContext';

const SearchBar = (props) => {
    
    const searchId = useId();
    const { handleDelete, selectedOptions } = useContext(SelectedItemsContext);

    //console.log(selectedItems, handleDelete);

  return (
    <div className="search">
        <form
        onSubmit={(event) => { event.preventDefault(); }}
        >
          <label htmlFor={searchId}>Search by role or languages</label>
          <input type="search" name="search" id={searchId} 
            onChange={(event) => {
              props.getValue(event.target.value);
            }}

            onPaste={(event) => {
              props.getValue(event.target.value);
            }}
          />
        </form>

        <div className="select">
            {
                selectedOptions && selectedOptions.map(item => {
                    return <li
                    onClick={ (event) => {
                        handleDelete(event.target.innerText);
                    } } 
                    >{ item }</li>
                })
            }
        </div>
    </div>
  )
}

export default SearchBar;