import React, { SelectHTMLAttributes  } from "react";

import "./style.css";

interface selectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label?: string;
  options:Array<{
    value:string,label:string
  }>
};
const  select:React.FC<selectProps> = (props)=>{
    return (
      <div className="select-block">
        <label htmlFor={props.name}>{props.label}</label>
        <select value="Selecione uma Opção" id={props.name} {...props}>
          <option disabled hidden value="">Selecione uma Opção
          </option>
          {props.options.map((option) => {
            return (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            );
          })}
        </select>
      </div>
    );
}
export default select;
