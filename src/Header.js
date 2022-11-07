
function Header(props) {

    const response = props.response;


    if (response) {
        return<>
            <label>Конвертер Валют</label>
            <div>
                <label>USD</label>
                <label>{response['conversion_rates']['USD']}</label>
            </div>
            <div>
                <label>EUR</label>
                <label>{response['conversion_rates']['EUR']}</label>
            </div>
            <div>
                <label>GBP</label>
                <label>{response['conversion_rates']['GBP']}</label>
            </div>
        </>
    }
    else return <></>

}

export default Header