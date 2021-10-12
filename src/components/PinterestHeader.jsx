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
                <div class = "logo-icon" >
                    <IoLogoPinterest 
                    style={_stylesHeader.left_header_img}
                    />
                </div>

                    <h3 style={_stylesHeader.header_home}>Home</h3>
                <div class = "icons-left" >
                    <h3>Today</h3>
                </div>
                <div class = "icons-left-following" >
                    <h3>Following</h3>
                </div>
            </div>
            <div  class="header_middle" style={_stylesHeader.middle_header}>
                <BiSearchAlt2  style={_stylesHeader.right_header_icons} />
                <input class="header_middle" type="text" style={_stylesHeader.middle_header_search} placeholder="Buscar..."/>
            </div>
            <div style={_stylesHeader.right_header}>
            <div class = "logo-icon" >
                <HiBell style={_stylesHeader.right_header_icons}/>
            </div>
            <div class = "logo-icon" >
                <AiFillMessage style={_stylesHeader.right_header_icons} />
            </div>
            <div class = "logo-icon" >
                <CgProfile style={_stylesHeader.right_header_icons} />
            </div>
            
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
        '&:hover': {
            color: 'red !important',
            width: '45px',
        height: '45px',
        },
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
    },
}

export default PinterestHeader;