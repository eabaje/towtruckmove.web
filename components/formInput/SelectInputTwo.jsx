import Form from 'react-bootstrap/Form';
import React from 'react'
import { UseControllerProps, useController } from 'react-hook-form'
//import { IOption } from '@/types';



export default function SelectInputTwo(props) {
    const {fieldState, field} = useController({...props, defaultValue: ''})

    return (
        <>
       
       <div className={props.classHeadName?props.classHeadName:"col-xs-12 col-md-6 form-builder-item"}>
           
              <div className="field-select select-styled">
              {props.showLabel && (
                    <label
                        className="form-label visually-hidden"
                        htmlFor={field.name} 
                    >
                    {props.label}
                    </label>
              )}
                <select
                      className="form-control"
                      {...props}
                      {...field}
                    >
                    
                   {props.option.map(({ value, text }) => {
                    return  <option value={value}>{text}</option>;
                    })} 
                      
                     </select>
               
                
             </div>
     </div>      

</>
    )
}
