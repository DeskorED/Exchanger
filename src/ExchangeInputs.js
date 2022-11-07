import Input from "./Input";
import {useState} from "react";

function ExchangeInputs(props) {

    const [value, setValue] = useState(1);

    function onChange(state, value) {
        setValue(value / props.response['conversion_rates'][state]);
    }

    return <>
        <Input onChange={onChange} value={value} response={props.response}/>
        <Input onChange={onChange} value={value} response={props.response}/>
    </>
}

export default ExchangeInputs