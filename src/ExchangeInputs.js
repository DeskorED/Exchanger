import Input from "./Input";
import {useState} from "react";

function ExchangeInputs(props) {
    const conversionRates = props.response.conversion_rates;
    const [value, setValue] = useState(1);

    function onChange(state, value) {
        if (isNaN(value))
            value = '';
        else value = (value / conversionRates[state]).toFixed(2);
        setValue(value);
    }

    return <>
        <Input onChange={onChange} value={value} response={props.response}/>
        <Input onChange={onChange} value={value} response={props.response}/>
    </>
}

export default ExchangeInputs