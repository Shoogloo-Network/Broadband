import {
    BsCurrencyRupee,
    BsCurrencyEuro,
    BsCurrencyDollar 
  } from 'react-icons/bs';


const CurrencyDisplay = ({currency}:any)=>{

    const getCurrencySymbol = (currencyValue: string) => {
        if(currencyValue == "inr") {
            return <BsCurrencyRupee />;
        } else if(currencyValue == "eur") {
            return <BsCurrencyEuro />;
        } else if(currencyValue == "usd") {
            return <BsCurrencyDollar />;
        } else if(currencyValue == "sar") {
            return (<span className="pr7">SAR</span>);
        } else if(currencyValue == "qr") {
            return (<span className="pr7">QR</span>);
        } else if(currencyValue == "aed") {
            return (<span className="pr7">AED</span>);
        } else if(currencyValue == "bd") {
            return (<span className="pr7">BD</span>);
        } else if(currencyValue == "kd") {
            return (<span className="pr7">KD</span>);
        } else {
            return <BsCurrencyRupee />;
        }
    }

    const currencyValue = currency || ''
    return (
        <>
        {
            getCurrencySymbol(currencyValue)
        }
        </>
    )
}

export default CurrencyDisplay;