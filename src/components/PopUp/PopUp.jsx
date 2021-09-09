import React, {useEffect} from 'react'
import $ from 'jquery'

function PopUp() {

    useEffect(() => {
        //popup
        $('.popup-close,.popup-overlay').on("click", function(){
            $('#popup').hide();
        });
        $("#popup").delay(2000).fadeIn();
    }, [])

    return (
        <div id="popup" className="popup" style={{ display: 'none' }}>
            <div className="popup-overlay"></div>
            <div className="popup-wrapper">
                <div className="popupbox">
                    <a href="abc.html"><img src="/images/popup.png" alt="popup"/></a>
                    <button className="popup-close"><img src="/images/popup-close.png" alt="popup-close"/></button>
                </div>
            </div>
        </div>
    )
}

export default PopUp
