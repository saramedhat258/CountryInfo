import axios from 'axios'
import React, { useState, useEffect } from 'react'
import style from "../light mode style/countriesl.module.css"
import { Link } from 'react-router-dom'
function All({ region, searchRes }) {
    const [countries, setcountries] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                if (searchRes !== '') {
                    const response = await axios.get(`https://restcountries.com/v3.1/name/${searchRes}`)
                    setcountries(response.data);
                    setLoading(false);
                }
                else {
                    const response = await axios.get('https://restcountries.com/v3.1/all');
                    setcountries(response.data);
                    setLoading(false);
                }
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };
        fetchCountries();
        
    }, [searchRes]);
    if (loading) return <p>Loading...</p>;
    if (error) return <h3 className='w-50 m-auto mt-5'>please enter correct country name</h3>;

    return (
        <>

            {countries.map(country => (
                region !== '' ?
                    country.region === region ?
                        <div className={`col-lg-3 col-md-4 col-sm-5 col-xs-12 ${style.countryinfo} rounded bg-white`} key={country.cca3} >
                            <Link to={`/name/${country.name.common}`}><img src={country.flags.png} className='rounded-top' alt="" /></Link>
                            <h3 className='py-3 text-black'>{country?.name.common ?? ''}</h3>
                            <p className='my-1'><span>Population: </span>{country?.population ?? ''}</p>
                            <p className='my-1'> <span>Region: </span>{country?.region ?? ''}</p>
                            <p><span>Capital: </span>{country?.capital ?? ''}</p>
                        </div > : ''
                    :
                    <div className={`col-lg-3 col-md-4 col-sm-5 col-xs-12 ${style.countryinfo} rounded bg-white`} key={country.cca3} >
                        <Link to={`/name/${country.name.common}`}><img src={country.flags.png} className='rounded-top' alt="" /></Link>
                        <h3 className='py-3'>{country?.name.common ?? ''}</h3>
                        <p className='my-1'><span>Population: </span>{country?.population ?? ''}</p>
                        <p className='my-1'> <span>Region: </span>{country?.region ?? ''}</p>
                        <p><span>Capital: </span>{country?.capital ?? ''}</p>
                    </div >
            ))
            }
        </>
    )
}

export default All