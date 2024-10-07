import React, { useState } from 'react'
import Search from './Search'
import Countries from './Countries'
import NavBar from './NavBar'
function MainPage({toggle,settoggle}) {
    const [region, setregion] = useState('')
    const [searchRes ,setsearch]=useState('')
    return (
        <div className='mainpage'>
            <div className='navbar'>
                <NavBar settoggle={settoggle} toggle={toggle}/>
            </div>
            <div className='mainbody mt-4'>
                <div className='row pt-5 mb-5 justify-content-between'>
                    <Search setregion={setregion} setsearch={setsearch}/>
                </div>
                <div className='contries row justify-content-evenly m-auto '>
                    <Countries region={region} searchRes={searchRes} />
                </div>
            </div>

        </div>
    )
}

export default MainPage