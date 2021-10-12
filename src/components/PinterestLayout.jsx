import React from "react";
import PinCard from "./PinCard";
import PinterestFooter from "./PinterestFooter";


const PinterestLayout = () => {
    if(window.innerWidth > 375){

        return (

            <div style={_stylesLayout.pin_container}>
                <PinCard size="small" image="https://picsum.photos/230/230"/>
                <PinCard size="medium" image="https://picsum.photos/230/300"/>
                <PinCard size="large" image="https://picsum.photos/230/420" />
                <PinCard size="small" image="https://picsum.photos/230/230"/>
                <PinCard size="medium" image="https://picsum.photos/230/300"/>
                <PinCard size="large" image="https://picsum.photos/230/420" />
                <PinCard size="small" image="https://picsum.photos/230/230"/>
                <PinCard size="medium" image="https://picsum.photos/230/300"/>
                <PinCard size="large" image="https://picsum.photos/230/420" />
                <PinCard size="small" image="https://picsum.photos/230/230"/>
                <PinCard size="medium" image="https://picsum.photos/230/300"/>
                <PinCard size="large" image="https://picsum.photos/230/420" />
                <PinCard size="small" image="https://picsum.photos/230/230"/>
                <PinCard size="medium" image="https://picsum.photos/230/300"/>
                <PinCard size="large" image="https://picsum.photos/230/420" />
                <PinCard size="small" image="https://picsum.photos/230/230"/>
                <PinCard size="small" image="https://picsum.photos/230/230"/>
                <div style={_stylesLayout.pin_opacity}>
                <PinterestFooter />
                </div>
            </div>
            
        );
    }else{
        return (
            <div style={_stylesLayout.pin_container_responsive}>
                <PinterestFooter />
                <PinCard size="small" image="https://picsum.photos/230/230"/>
                <PinCard size="medium" image="https://picsum.photos/230/300"/>
                <PinCard size="large" image="https://picsum.photos/230/420" />
                <PinCard size="small" image="https://picsum.photos/230/230"/>
                <PinCard size="medium" image="https://picsum.photos/230/300"/>
                <PinCard size="large" image="https://picsum.photos/230/420" />
                <PinCard size="small" image="https://picsum.photos/230/230"/>
                <PinCard size="medium" image="https://picsum.photos/230/300"/>
                <PinCard size="large" image="https://picsum.photos/230/420" />
                <PinCard size="small" image="https://picsum.photos/230/230"/>
                <PinCard size="medium" image="https://picsum.photos/230/300"/>
                <PinCard size="large" image="https://picsum.photos/230/420" />
                <PinCard size="small" image="https://picsum.photos/230/230"/>
                <PinCard size="medium" image="https://picsum.photos/230/300"/>
                <PinCard size="large" image="https://picsum.photos/230/420" />
                <PinCard size="small" image="https://picsum.photos/230/230"/>
                <PinCard size="small" image="https://picsum.photos/230/230"/>

            </div>
        );
    }
    
};
const _stylesLayout = {
    pin_container: {
        margin: 0,
        padding: 0,
        width: '95vw',
        backgroundColor: 'white',
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, 250px)',
        gridAutoRows: '10px',
        justifyContent: 'center',
    },
    pin_container_responsive: {
        margin: 0,
        padding: 0,
        width: '95vw',
        backgroundColor: 'white',
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, 250px)',
        gridAutoRows: '10px',
        justifyContent: 'center',
    },
    pin_opacity:{
        backgroundColor:'#fff',
        marginLeft: '990px',
        opacity:1,
    }

}
export default PinterestLayout;