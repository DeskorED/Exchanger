import {useState} from "react";
import Header from "./Header";
import ExchangeInputs from "./ExchangeInputs";

const URL = "https://v6.exchangerate-api.com/v6/b134acd26381dc39a5619dc2/latest/UAH";

function Exchanger(){

    const [response, setResponse] = useState(null)

    fetch(URL).then(
        value => {
            setResponse(value)
        }
    );

    return <>
        <Header response={response}/>
    `   <ExchangeInputs response={response}/>
    </>
}
export default Exchanger