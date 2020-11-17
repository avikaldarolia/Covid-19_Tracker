import React,{useState,useEffect} from 'react';
import {NativeSelect, FormControl} from '@material-ui/core'
import styles from './CountryPicker.module.css'
import {fetchCountries} from '../../api/index.js' 


 
const CountryPicker = ({handleCountryChange}) =>{

    const [fetchedCountries,setFetchedCountries] = useState([]);

    useEffect(()=>{
        const fetchAPI = async()=>{
            setFetchedCountries(await fetchCountries());
        }
        fetchAPI();
    },[setFetchedCountries]); 
//    setfetchedcountries as a second parameter ????-> will only change when there's a change in the list 
    return(
      <FormControl className={styles.formControl}>
          <NativeSelect defaultValue="" onChange= {(e)=>{handleCountryChange(e.target.value)}} >
              <option value="">Global</option>
                {fetchedCountries.map((country,i)=><option key={i}>{country}</option>)}
          </NativeSelect>
      </FormControl>
    )
}
export default CountryPicker