import Form from 'react-bootstrap/Form';
import React from 'react'
import { UseControllerProps, useController } from 'react-hook-form'




export default function SelectInput(props) {
    console.log('check',props.option)
    const {fieldState, field} = useController({...props, defaultValue: ''})

    return (
        <>
       
        <div className={props.classHeadName?props.classHeadName:"col-sm-12 col-md-12 col-xl-12"}>   
           
              <div className="input-group-icon">
              {props.showLabel && (
                    <label
                        className="form-label visually-hidden"
                        htmlFor={field.name} 
                    >
                    {props.label}
                    </label>
              )}
                <select
                      className="form-select form-voyage-select input-box"
                      {...props}
                      {...field}
                    >
                    
                   {props.option &&(
                   
                   props.option?.map(({ value, text }) => {
                    return  <option value={value}>{text}</option>;
                    }))} 

                     {props.option2 &&(
                     
                     props.option2?.map((item, i) => {
                    return  <option key={i} value={item.name}>{item.name}</option>;
                    }))}   
                     </select>
               
                <span className="nav-link-icon text-800 fs--1 input-box-icon">
                    <i className={props.icon}> </i>
                </span>
             </div>
     </div>      

</>
    )
}
