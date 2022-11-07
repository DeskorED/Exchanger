import {useState} from "react";

function Input(props) {
    const conversionRates = props.response.conversion_rates;
    const [state, setState] = useState("USD");
    const value = props.value * conversionRates[state];

    const optionArray = []

    for (let key of Object.keys(conversionRates)) {
        optionArray.push(<option key={key} value={key}>
                {key.toString()}
            </option>
        )
    }

    return (
        <div>
            <select value={state}
                    onChange={(event) => {
                        setState(event.target.value)
                    }}>
                {optionArray}
            </select>
            <input type="text"  pattern="^\$\d{1,3}(,\d{3})*(\.\d+)?$"  onChange={(event) => {
                props.onChange(state, event.target.value)
            }} value={value}/>
        </div>
    )

}

export default Input