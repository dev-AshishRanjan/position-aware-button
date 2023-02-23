// export * from './PosAwButton';

import React, { useEffect } from 'react'
import './style.css';

export const PosAwButton = (props) => {
    // props= background,themeColor,height,width, children
    // max-width is set to 250px you can change it by passing max-width in props
    let spanTheme = {};
    useEffect(() => {
        // setTimeout(()=>{},1000)
        const buttons = document.querySelectorAll(".posAwBtn");
        console.log(buttons, buttons[0].innerHTML);
        // buttons.innerHTML

        buttons.forEach(button => {
            ["mouseenter", "mouseout"].forEach(evt => {
                button.addEventListener(evt, e => {
                    let parentOffset = button.getBoundingClientRect(),
                        relX = e.pageX - parentOffset.left,
                        relY = e.pageY - parentOffset.top;

                    const span = button.querySelector(".span");
                    console.log(span);
                    span.style.top = relY + "px";
                    span.style.left = relX + "px";
                });
            });
        });
    });
    if (props.themeColor != undefined) {
        props = { ...props, color: props.themeColor };
        spanTheme = { ...spanTheme, background: props.themeColor };
    }
    return (
        <button className='posAwBtn' style={props}><p className='p'>{props.children ? props.children : 'Hover'}</p><span className='span' style={spanTheme}></span></button>
    )
}
