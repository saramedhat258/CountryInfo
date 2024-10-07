import React, { useState, useEffect } from 'react'
import NavBar from './NavBarlight'
import { Link, useParams } from 'react-router-dom'
import style from '../light mode style/countryDetailli.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function CountryDetail({settoggle,toggle}) {
    const param = useParams()
    const [country, setcountry] = useState({})
    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/name/${param.country}`)
            .then(res => res.json())
            .then(data => setcountry(data))
    }, [param.country])
    const nativeNameKey = Object.keys(country[0]?.name?.nativeName??{})[0];
    const nativeName = country[0]?.name?.nativeName[nativeNameKey]?.common;
    return (
        <>
            <NavBar settoggle={settoggle} toggle={toggle}/>
            <div className={`row ${style.country} mt-5 justify-content-evenly`}>
                <div className={`col-lg-5 col-md-8 col-sm-8 mt-5 ${style.imgdet}`} >
                    <Link to='/countryinfo' className={`w-75 text-black border border-0 px-4 py-2 rounded ${style.back} text-decoration-none`}> <FontAwesomeIcon icon={faArrowLeft} className='me-2' /> back</Link>
                    <img src={country[0]?.flags?.svg} style={{ marginTop: 4.5 + 'rem' }} alt="" />
                </div>
                <div className='col-lg-5 col-md-8 col-sm-8 mt-5' >
                    <div className='row mt-5 mb-2'>
                        {/* first details */}
                        <div className={`col-10 col-lg-6 col-md-6 col-sm-10  ${style.det} ${style.light}`}>
                            <h3 className='mb-5'>{country[0]?.name?.common}</h3>
                            <p className='p-0'><span className='fw-bold'>Native Name: </span>{nativeName}</p>
                            <p className='p-0'><span className='fw-bold'>Population: </span>{country[0]?.population}</p>
                            <p className='p-0'><span className='fw-bold'>Region: </span>{country[0]?.region}</p>
                            <p className='p-0'><span className='fw-bold'>Sub Region: </span>{country[0]?.subregion}</p>
                            <p className='p-0'><span className='fw-bold'>Capital: </span>{country[0]?.capital[0]}</p>
                        </div>
                        {/* second details */}
                        <div className={`col-10 col-lg-6 col-md-6 col-sm-10  ${style.det2}`} >
                            <div>
                                <p className='p-0 mt-5'><span className='fw-bold'>Top level domain: </span>{country[0]?.tld[0]}</p>
                                {Object.keys(country[0]?.currencies ?? {}).map((c) =>
                                    <p className='p-0' key={c}><span className='fw-bold'>Currencies: </span>{country[0].currencies[c].name}</p>
                                )}
                                <p className='p-0'><span className='fw-bold'>Languages:</span>
                                    {Object.keys(country[0]?.languages ?? {}).map(lang => `${country[0].languages[lang]}, `)}
                                </p>
                                
                            </div>
                        </div>
                    </div>
                    {country[0]?.borders ?
                        <p className={`p-0 mt-5 ${style.borders}`}>
                            <span className='fw-bold'>Border Countries: </span>
                            {country[0]?.borders?.map((border, index) => (
                                <Link key={index} className={`text-black p-1 ms-2 border border-0 mt-1 text-decoration-none ${style.btn}`} to={`/name/${country?.name?.common}/${border}`}>
                                    {border}
                                </Link>
                            ))}
                        </p> : ''
                    }
                </div>
            </div>
        </>
    )
}

export default CountryDetail