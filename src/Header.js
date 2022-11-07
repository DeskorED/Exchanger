
function Header(props) {

    const response = props.response;
    const conversionRates = props.response.conversion_rates;

    if (response) {
        return<>
            <label>Конвертер Валют</label>
            <div>
                <label>USD</label>
                <label>{conversionRates.USD}</label>
            </div>
            <div>
                <label>EUR</label>
                <label>{conversionRates.EUR}</label>
            </div>
            <div>
                <label>GBP</label>
                <label>{conversionRates.GBP}</label>
            </div>
        </>
    }
    else return <></>

}

export default Header