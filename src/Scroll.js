import React from 'react';

const Scroll = (props) => {
    return(
        <div style={{overflowY: 'scroll', border: '3px solid #FF6300', height:'500px'}}>
            {props.children}
        </div>
    );
}

export default Scroll;