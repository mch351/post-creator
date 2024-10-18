import SpinnerGif from "../assets/Spinner_GIF.gif";
import "./Spinner.css"

const Spinner =()=>{
    return (
        <>
            {/*<img src={SpinnerGif} alt="loading_spinner"/>*/}
            <div className="spinner-container">
                <div className="lds-roller">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </>
    )
}

export default Spinner;