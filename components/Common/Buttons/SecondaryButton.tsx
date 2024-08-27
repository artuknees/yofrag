import React from "react";

const SecondaryButton = ({ widths , styles , darkText , handleClick , text  , fontSize='14' } : {styles?: string , widths?:string , text:string , handleClick?:any , darkText?:boolean , disabled?:any , fontSize?: string }) => {
    return (
        <button 
            className={`h-11 ${widths} flex flex-col items-center justify-center border border-yofrag-black bg-transparent ${darkText ? 'text-yofrag-black' : 'text-yofrag-white'} rounded-[22px] transition-all hover:rounded-[4px] duration-150 ${styles}`} 
            style={{fontSize: `${fontSize}px`}}
            onClick={() => {handleClick()}}
        >
            {text}
        </button>
    )
};

export default SecondaryButton