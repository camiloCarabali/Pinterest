import React from "react";
import {IoLogoPinterest} from "react-icons/io";
import {AiFillMessage} from "react-icons/ai";
import {HiBell} from "react-icons/hi";
import {CgProfile} from "react-icons/cg";
import {BiSearchAlt2} from "react-icons/bi";

const PinterestHeader = () => {
    return (
    <div style={_stylesHeader.pin_header}>
        <div style={_stylesHeader.header}>
            <div style={_stylesHeader.left_header}>
                <IoLogoPinterest 
                    className = "logo-icon" style={_stylesHeader.left_header_img}
                />
                <h3>Home</h3>
                <h3>Today</h3>
                <h3>Following</h3>
            </div>
            <div style={_stylesHeader.middle_header}>
            <BiSearchAlt2 style={_stylesHeader.right_header_icons} />
            <input type="text" style={_stylesHeader.middle_header_search} placeholder="Buscar..."/>
            </div>
            <div style={_stylesHeader.right_header}>
            <HiBell style={_stylesHeader.right_header_icons}/>
            <AiFillMessage style={_stylesHeader.right_header_icons} />
            <CgProfile style={_stylesHeader.right_header_icons} />
            </div>
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
        justifyContent: 'space-between',
        padding: '8px',
    },
    left_header:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '20%',
    },
    left_header_img:{
        flexDirection: 'row',
        width: '35px',
        height: '35px',
        borderRadius: '33px',
        color: 'red',
        cursor: 'pointer',
    },
    middle_header:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '60%',
        backgroundColor: '#efefef',
        borderRadius: '33px',
        padding: '0 10px',
    },
    middle_header_search:{
        color: '#767676',
        fontWeight: 'normal',
        backgroundColor: '#efefef',
        border: '#efefef',
        width: '100%',
        padding: '15px 5px',
        borderRadius: '33px',
        outline: 'none',

    },
    right_header:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '10%',
    },
    right_header_icons:{
        width: '25px',
        height: '25px',
        borderRadius: '33px',
        cursor: 'pointer',
        color: '#767676',
    },
}
export default PinterestHeader;