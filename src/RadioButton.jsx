function RadioButton(props) {
    const options = props.options;
    const onSelect = props.onSelect;
    const placeholder = props.placeholder;
  
    return (
      <>
       <select onChange={onSelect}>
        <option value="">{placeholder}</option>
  
        {options.map((optionName)=>{
          return(
            <option key={optionName} value={optionName}>
              {optionName}
            </option>
          );
  
        })}
       </select>
      </>
    );
  }
  
  export default RadioButton;
  