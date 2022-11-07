import {useState} from "react";

function Input(props) {
    const [state, setState] = useState("USD");
    const value = props.value * props.response['conversion_rates'][state];

    const optionArray = []

    for (let key of props.response['conversion_rates'].keys()) {
        optionArray.push(<option key={key} value={key}>
                {key}
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
            <input onChange={(event) => {
                props.onChange(state, event.target.value)
            }}>{value}</input>
        </div>
    )

}

export default Input