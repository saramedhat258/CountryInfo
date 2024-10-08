import React, { useState } from 'react'
import { Form, Dropdown } from 'react-bootstrap'
function Search({setregion,setsearch}) {
    const [selectedregion,setselectedregion]=useState('Filter By Region')
    const handleregion =(region)=>{
        setselectedregion(region)
        setregion(region)
    }
    return (
        <>
        
            <div className='se col-3'>
                <Form >
                    <Form.Control
                        type="text"
                        placeholder="Search for a country..."
                        className=" mr-sm-2 col-3 searchdark"
                        onChange={(e)=>setsearch(e.target.value)}
                    />
                </Form>
            </div>
            <div className='drop col-3'>
                <Dropdown className=' dropmenu ms-3' >
                    <Dropdown.Toggle id="dropdown-basic" className='dropdown-basic border-0' >
                        {selectedregion}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#" className='dropitem' onClick={() => handleregion('Asia')}>Asia</Dropdown.Item>
                        <Dropdown.Item href="#" className='dropitem' onClick={() => handleregion('Africa')}>Africa</Dropdown.Item>
                        <Dropdown.Item href="#" className='dropitem' onClick={() => handleregion('America')}>America</Dropdown.Item>
                        <Dropdown.Item href="#" className='dropitem' onClick={() => handleregion('Europe')}>Europe</Dropdown.Item>
                        <Dropdown.Item href="#" className='dropitem' onClick={() => handleregion('Oceania')}>Oceania</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            
        </>
    )

}

export default Search
