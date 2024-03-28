import React from "react";
import './ProductDate.css';

const ProductDate = (props) => {
    const month = props.date.toLocaleString('en-Us',{month:'long'});
    const day = props.date.toLocaleString('en-US',{day:'2-digit'});
    const year = props.date.getFullYear();

    return(
        <div className="product-date">
            <div className="product-date-month">{month}</div>
            <div className="product-date-year">{year}</div>
            <div className="product-date-day">{day}</div>
        </div>
    );
}

export default ProductDate;