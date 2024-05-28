function RadioButton(props) {
    const name= props.name;
    const items = props.items;
    const onChange= props.onChange;
    const value = props.value;
    return (
      <>
       {items.map (item => (
        <div key={item.value}>
          <input 
          name = {name}
          type="radio"
          value={item.value}
          id= {name + item.value}
          checked={value === item.value}
          onChange = {e=> onChange(e.target.value)}
          />
          <label htmlFor={name + item.value}>{item.value}</label>

        </div>
       ))}
      </>

      

    );
  }
  
  export default RadioButton;
  