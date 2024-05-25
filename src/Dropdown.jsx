function DropDownList(props) {
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

export default DropDownList;

// To use dropdown list, add this to the page in the section before return and edit dropdown options in the array: 
// const [selectedCity, setSelectedCity] = useState("");

//   function onSelectCity(event) {
//     const value = event.target.value;
//     setSelectedCity(value);
//   }

//   const cities = [
//     "Birmingham",
//     "Edinburgh",
//     "Liverpool",
//     "London",
//     "Manchester",
//   ];

//Add this where you want the dropdown to appear in the return section: 
/* <DropDownList
  options={cities}
  selectedOptions={selectedCity}
  onSelect={onSelectCity}
  placeholder="Please select a city"
   /> */