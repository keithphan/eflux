import React, {useEffect} from 'react'
import { useLocation } from 'react-router';
import $ from 'jquery';

function ContentArea(props) {
    const location = useLocation();
    useEffect(() => {
    $('.zoomContainer').remove();
      window.scrollTo(0, 0);
    }, [location]);

    return (
        <div className="main-content-area">
            {props.children}
        </div>
    )
}

export default ContentArea
