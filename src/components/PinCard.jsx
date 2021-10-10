import React from "react";

const PinCard = (props) => {
    return (
    <div 
        style={{..._stylesPinCard.pin_card, ..._stylesPinCard[props.size]}}>
        <img style=
        {_stylesPinCard.image} 
        src={props.image} 
        alt="No cargo imagen"/>
    </div>
    );
};

const _stylesPinCard = {
    pin_card:{
        margin: '15px 10px',
        padding: 0,
        borderRadius: '15px',
        cursor: 'pointer',
    },
    small:{
        gridRowEnd: 'span 26',
    },
    medium:{
        gridRowEnd: 'span 33',
    },
    large:{
        gridRowEnd: 'span 45',
    },
    image:{
        borderRadius: '15px ',
    },
}
export default PinCard;


//<img src="https://picsum.photos/300/150" />