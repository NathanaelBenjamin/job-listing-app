import React, { useContext } from 'react';
import { SelectedItemsContext } from "../Contexts/SelectedItemsContext";

const ProfessionalRole = ({key, position, role, contract, level, languages, postedAt, tools, isNew, isFeatured, location,company, logo}) => {
    
    const { ProgrammingItem, handleSelect } = useContext(SelectedItemsContext);
    
  return (
    <div className='list_job'>

            <div className="list_job_details" key={key}>
                <div className="list_job_details_image" key={key}>
                    <img src={logo} alt="" />
                </div>

                <div className='company'>
                    <div className="company-details flex-row-normal">
                        <div className="company-details_name" key={key}>
                            {company}
                        </div>

                        {isNew && <div className="company-details_new" key={key}>
                            NEW!
                        </div>}

                        {isFeatured && <div className="company-details_featured" key={key}>
                            FEATURED
                        </div>}
                    </div>

                    <div className="company_position" key={key}>
                        {position}
                    </div>

                    <div className="company_timeline flex-row-normal">
                        <div className="company_timeline_postedAt" key={key}>
                            {postedAt}
                        </div>

                        <div className="company_timeline_contract" key={key}>
                            {contract}
                        </div>

                        <div className="company_timeline_location" key={key}>
                            {location}
                        </div>
                    </div>
                </div>
            </div>

            <div className="list_job_levels flex-row-normal">
                <div className="role"
                onClick={(event) => {
                    handleSelect(event.target.innerText);
                }}
                key={key} >
                    {role}
                </div>

                <div className="level"
                onClick={(event) => {
                    handleSelect(event.target.innerText);
                }} key={key}
                >
                    {level}
                </div>

                {
                    languages.map(language => {
                        return <ProgrammingItem item = {language} />
                    })
                }
                
                {
                    tools && tools.map(tool => {
                        return <ProgrammingItem item={tool} key={key} />
                    })
                }
            </div>
    </div>
  )
}

export default ProfessionalRole;