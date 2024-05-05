import Form from 'react-bootstrap/Form';
import React from 'react'
import { UseControllerProps, useController } from 'react-hook-form'



export default function LookUpHdInput({ fieldName, register, errors,value }) {
  //  const {fieldState, field} = useController({...props, defaultValue: ''})



    return (
        <>
       
          
    <input 
    type='hidden'
    value={value}
    className="form-control input-box form-voyage-control"
     {...register(fieldName
    
    )} 
    /> 
    
     );
          
       
    
  
  
        
</>
    )
}

