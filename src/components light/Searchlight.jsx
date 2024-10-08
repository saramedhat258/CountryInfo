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
                        className=" mr-sm-2 col-3 search"
                        onChange={(e)=>setsearch(e.target.value)}
                    />
                </Form>
            </div>
            <div className='drop col-3'>
                <Dropdown className=' dropmenu ms-3' >
                    <Dropdown.Toggle id="dropdown-basic" className='text-black bg-light border-secondary'>
                        {selectedregion}
                    </Dropdown.Toggle>
                    <Dropdown.Menu className='bg-white'>
                        <Dropdown.Item href="#" onClick={() => handleregion('Asia')}>Asia</Dropdown.Item>
                        <Dropdown.Item href="#" onClick={() => handleregion('Africa')}>Africa</Dropdown.Item>
                        <Dropdown.Item href="#" onClick={() => handleregion('america')}>America</Dropdown.Item>
                        <Dropdown.Item href="#" onClick={() => handleregion('Europe')}>Europe</Dropdown.Item>
                        <Dropdown.Item href="#" onClick={() => handleregion('Oceania')}>Oceania</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            
        </>
    )

}

export default Search