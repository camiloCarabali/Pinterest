import React from "react";


const PinterestHeaderResponsive = () => {
    return (
        <div style={_stylesHeader.pin_header}>
            <div style={_stylesHeader.header}>
                <div style={_stylesHeader.header_home}>
                <h3>Home</h3>
                </div>
                <h3>Following</h3>
            </div>
        </div>    
    );
};
    
    
    const _stylesHeader = {
        pin_header: {
        backgroundColor: '#fff',
        },
        header:{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'left',
            padding: '8px',
            marginRight: '5px',
        },
        header_home:{
            width: '50px',
            height: '50px',
            backgroundColor: '#333333',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderTopRightRadius:'20px',
            borderBottomRightRadius:'20px',
            borderTopLeftRadius:'20px',
            borderBottomLeftRadius:'20px',
            color: 'white',
            marginRight: '10px',
            marginLeft: '10px',
            padding: '0 8px',
        }
    }


export default PinterestHeaderResponsive;