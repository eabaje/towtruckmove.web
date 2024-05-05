import { Autocomplete, Container, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";

import React from 'react'


function filterArray(array, filters) {
  const filterKeys = Object.keys(filters);
  return array.filter(item => {
    // validates all filter criteria
    return filterKeys.every(key => {
      // ignores non-function predicates
      if (typeof filters[key] !== 'function') return true;
      return filters[key](item[key]);
    });
  });
}


function LookUpSelectInput({sourceData,primaryData,filters,labelParent,labelChild,idParent,idChild}) {

    const [data, setData] = useState([]);
    const [getCounty, setCounty] = useState([]);
    const [getState, setState] = useState([]);
    useEffect(() => {
      axios
        .get(
          sourceData
        )
        .then((response) => {
          // console.log(response);
          setData(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);
  
 //   const country = [...new Set(data.map((item) => item.country))];
    // console.log(country);
  
     console.log(data);
  
    const handleChild = (event, value) => {

      axios
      .get(
        "https://car-data.p.rapidapi.com/cars"
      )
      .then((response) => {
        // console.log(response);
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
      const filtered = filterArray(sourceData,filters);
     
  
      setData(filtered);
    };
  
  return (
    <>
    
   
 
    <Container>
      <Typography>{labelParent}</Typography>
      <Autocomplete
        onChange={(event, value) => handleChild(event, value)}
        id={idParent}
        // getOptionLabel={(country) => `${country}`}
        options={data}
        // isOptionEqualToValue={(option, value) => option.name === value.name}
       
        renderInput={(params) => (
            <TextField
              {...params}
              label={labelParent}
              placeholder={labelParent}
            />
          )}
      />
      <Autocomplete
        id={idChild}
      //  getOptionLabel={(getState) => `${getState}`}
        options={data}
       
        renderOption={(props, data) => (
          <Box component="li" {...props} key={data}>
            {data}
          </Box>
        )}
        renderInput={(params) => <TextField {...params} label="labelChild" />}
      />
      {/* <Autocomplete /> */}
    </Container>
  


    
    
    
    
    
    </>
  )
}

export default LookUpSelectInput
