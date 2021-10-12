import React from "react";
import {IoLogoPinterest} from "react-icons/io";
import {HiBell} from "react-icons/hi";
import {BiSearchAlt2} from "react-icons/bi";
import {CgProfile} from "react-icons/cg";


window.onscroll = () => {
    const fakeF = document.querySelector('#footer');
      if (window.pageYOffset <= 150) {
        fakeF.style.top= '700px'
        fakeF.style.opacity = '1';
      } else {
        fakeF.style.top = '880px'
        fakeF.style.opacity = '0';
      }
  };


const PinterestFooter = () => {

    return (
        <div style={_stylesFooter.pin_footer} id="footer">
        <IoLogoPinterest style={_stylesFooter.icons_footer_p}/>
        <BiSearchAlt2 style={_stylesFooter.icons_footer}/>
        <HiBell style={_stylesFooter.icons_footer}/>
        <CgProfile style={_stylesFooter.icons_footer}/>
        </div>
    
    );
};

const _stylesFooter= {
    pin_footer: {
        height: '55px',
        zIndex: 1987,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: '90px',
        backgroundColor: '#fff',
        position: 'sticky',
        top: '700px',
        borderStyle: 'solid',
        borderWidth: '0.2px',
        borderColor: '#fff',
        boxShadow: '5px 5px 5px 5px rgba(235,235,235,1)',


    },
    icons_footer:{
        height: '35px',
        width: '35px',
        color: '#767676',
        cursor: 'pointer',
    },
    icons_footer_p:{
        height: '35px',
        width: '35px',
        color: 'red',
        cursor: 'pointer',
    },
}



export default PinterestFooter;