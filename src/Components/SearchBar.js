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
          
          <input type="search" name="search" id={searchId}

            placeholder="Search by role, tools or languages."

            onChange={(event) => {
              props.getValue(event.target.value);
            }}

            onPaste={(event) => {
              props.getValue(event.target.value);
            }}
          />
        </form>

        <div className="selected">
            {
                selectedOptions && selectedOptions.map(item => {
                    return <div className='selected_items'
                    onClick={ (event) => {
                        handleDelete(event.target.innerText);
                    } } 
                    >{ item }</div>
                })
            }
        </div>
    </div>
  )
}

export default SearchBar;