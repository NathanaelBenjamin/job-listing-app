import React, { useState } from 'react';
import "./styles.scss";
import ProfessionalRole from './Components/ProfessionalRole';
import data from "./Assets/data.json";
import SearchBar from "./Components/SearchBar";
import { SelectedItemsContext } from "./Contexts/SelectedItemsContext";


const App = () => {

  //GETTING INPUT FROM THE SEARCHBAR.
  const [searchValue, setSearchValue] = useState();

  const filterKey = (value) =>  {
    setSelectedOptions([]);
    setSearchValue(value.toLowerCase());
  }

  //FOR THE TICKBOXES.
  const [ selectedOptions, setSelectedOptions ] = useState([]);

  const handleSelect = (input) => {
      if(!selectedOptions.includes(input)){
          setSelectedOptions((previousValue) => {
              return [...previousValue, input];
          });
      }
  }

  const handleDelete = ( input ) => {
      setSelectedOptions(() => {
          let filtered = selectedOptions.filter((item) => {
              return item !== input;
          });
          
          return filtered;
      })
  }

  const ProgrammingItem = ({item}) => {
    return <div className="programming-item"
    onClick={(event) => {
        handleSelect(event.target.innerText);
    }}
    >
        {item}
    </div>
  }
  

  //JOB FILTER
  let filteredData = data.filter(job => {

    //CHECKING SELECTED VALUES.
    function checkSelectedValues(){
      //ARRAYS TO STRINGS

      let jobsArray = [job.role, job.level, ...job.languages, ...job.tools];
      
      function checkJobs(){
        let check = selectedOptions.every(option => {
          return jobsArray.includes(option);
        });

        if(check){
          return job;
        }
        
      }
      return checkJobs();
    }

    //CHECKING SEARCHED VALUES.
    let programmingLanguages = job.languages.map(language => {
      return language.toLowerCase();
    });

    let tools = job.tools.map(tool => {
      return tool.toLowerCase();
    });
    function checkSearchedValues(input){
      if(input && (job.role.toLowerCase().includes(input) || job.position.toLowerCase().includes(input) || job.level.toLowerCase().includes(input) ||programmingLanguages.toString().includes(input) || tools.toString().includes(input))){
        return job;
      }
    }

    function result(){
      if(searchValue){
        return checkSearchedValues(searchValue) && checkSelectedValues();
      }

      else{
        return checkSelectedValues();
      }
    }

    //FINAL RETURN STATEMENT FOR THE FILTER FUNCTION.
    return result();
  });

  return (
    <div className='container'>

      <header></header>

      <SelectedItemsContext.Provider value={ { ProgrammingItem, selectedOptions, setSelectedOptions, handleSelect, handleDelete }} >

        <SearchBar 
          getValue = {filterKey}
        />

        <div className="list">
          {
            searchValue ? filteredData.map(job => {
                return <ProfessionalRole 
                key={job.id}
                position={job.position}
                role={job.role}
                contract={job.contract}
                languages={job.languages}
                postedAt={job.postedAt}
                level={job.level}
                tools={job.tools}
                location={job.location}
                company={job.company}
                logo={job.logo}
                isNew={job.new}
                isFeatured={job.featured}
              />  
            }) : filteredData.map(job => {
                return <ProfessionalRole 
                position={job.position}
                role={job.role}
                contract={job.contract}
                languages={job.languages}
                postedAt={job.postedAt}
                level={job.level}
                tools={job.tools}
                location={job.location}
                company={job.company}
                logo={job.logo}
                isNew={job.new}
                isFeatured={job.featured}
              />  
            })
          }
        </div>

      </SelectedItemsContext.Provider>
    </div>
  )
}

export default App;

