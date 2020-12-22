/* eslint-disable no-use-before-define */
import React,{useState,useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import { useHistory } from "react-router-dom";
import Autocomplete from '@material-ui/lab/Autocomplete';
import axios from 'axios';
export default function Search() {
    
  const history = useHistory();

    const [data,setdata]=useState([]);
    function onChange(e,s){
        // window.open('/'+s.char_id,'_blank');
        if(s==null){
            history.push('/');
        }else{
        history.push('/'+s.char_id);
        }
    }
    useEffect(()=>{
        axios.get('https://www.breakingbadapi.com/api/characters/').then((res)=>{
            setdata(res.data);
    
    });
    },[]);
  return (
      <div className='search'> 
    <Autocomplete
      id="combo-box-demo"
      options={data}
      getOptionLabel={(option) => option.name}
      style={{ width: 300 }}
      color="secondary"
      onChange={onChange}
      renderInput={(params) => <TextField {...params} label="Search Characters" variant="outlined" color="secondary" />}
    />
    </div>
  );
}

