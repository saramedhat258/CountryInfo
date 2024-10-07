import React, { useState } from 'react'
import Search from './Searchlight'
import Countries from './Countrieslight'
import NavBar from './NavBarlight'
import style from '../light mode style/countriesl.module.css'
function MainPage({toggle,settoggle}) {
    const [region, setregion] = useState('')
    const [searchRes ,setsearch]=useState('')
    return (
        <div className={style.main}>
            <div className='navbar'>
                <NavBar settoggle={settoggle} toggle={toggle}/>
            </div>
            <div className=' mt-4 '>
                <div className='row pt-5 mb-5 justify-content-between'>
                    <Search setregion={setregion} setsearch={setsearch}/>
                </div>
                <div className='contries row justify-content-evenly m-auto'>
                    <Countries region={region} searchRes={searchRes} />
                </div>
            </div>

        </div>
    )
}

export default MainPage