import Form from 'react-bootstrap/Form';
import React from 'react'
import { UseControllerProps, useController } from 'react-hook-form'



export default function InputTwo(props) {
    const {fieldState, field} = useController({...props, defaultValue: ''})

    return (
        <>
        <div className={props.classHeadName?props.classHeadName:"col-xs-12 col-md-6 form-builder-item"}>

       {props.isHidden ? (
             
             
                <input
                    className="form-control input-box form-voyage-control"
                    {...props}
                    {...field}
                   type='hidden'
                                     
                />
               
          
       ):(


                    <div className='form-group has-placeholder' >
                    {props.showLabel && (
                    <label
                        
                        htmlFor={field.name} 
                    >
                    {props.label}
                    </label>
                    )}
                    
                    
                <input
                    className="form-control input-box form-voyage-control"
                    {...props}
                    {...field}
                    type={props.type || 'text'}
                    placeholder={props.label}
                    color={fieldState.error ? 'failure' : !fieldState.isDirty ? '' : 'success'}
                />
                <span className="nav-link-icon text-800 fs--1 input-box-icon">
                    <i className={props.icon}> </i>
                </span>
       </div>
   

       ) 
    }
  
   </div>      
        
</>
    )
}
