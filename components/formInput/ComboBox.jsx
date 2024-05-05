import Form from 'react-bootstrap/Form';
import React from 'react'
import { UseControllerProps, useController } from 'react-hook-form'
import { IOption } from '@/types';
import "bootstrap/dist/css/bootstrap.min.css";

import { Select, Autocomplete } from "@fdefelici/react-bootstrap-combobox";


type Props = {
    label: string
    type?: string
    showLabel?: boolean
    option:IOption[]
   } & UseControllerProps

export default function ComboBox(props: Props) {
    const {fieldState, field} = useController({...props, defaultValue: ''})

    return (
        <>
       
            <div className="col-xs-12 col-md-6 form-builder-item">
                
                    <div className="field-select select-styled">
                    {props.showLabel && (
                          <label
                              className="form-label visually-hidden"
                              htmlFor={field.name} 
                          >
                          {props.label}
                          </label>
                    )}
                    <Select
                            id="12345"
                            isMultiSelect={true}
                            showButtons={false}
                            showSearch={false}
                            maxDropdownItems={4}
                            {...props}
                                
                            data={[
                              { label: "Apple", value: "apple", selected: true },
                              { label: "Banana", value: "banana" },
                              { label: "Citrus", value: "citrus", selected: true }
                            ]}
                            maxCaptionItems="5"
                            labels={{
                              "sel.empty": "Select an item",
                              "sel.singular": "One item selected",
                              "sel.plural": "{sel} of {size} items selected",
                              "btn.select.all": "Pick All",
                              "btn.unselect.all": "Release All"
                            }}
                            // onChange={selected => {
                            //   this.setState({ selectedCombobox4: selected });
                            // }}
                          ></Select>
                      {/* <select
                            className="form-control"
                            {...props}
                            {...field}
                          >
                          
                        {props.option.map(({ value, text }: IOption) => {
                          return  <option value={value}>{text}</option>;
                          })} 
                            
                          </select>
                    
                      */}
                  </div>
          </div>      

        </>
    )
}
