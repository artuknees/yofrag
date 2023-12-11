import React from "react";

const PrimaryButton = ({ widths , styles , darkText , handleClick , text , green=true , fontSize='14' } : {styles?: string , widths?:string , text:string , handleClick?:any , darkText?:boolean , disabled?:any , green?: boolean , fontSize?: string }) => {
    return (
        <button 
            className={`h-11 ${widths} flex flex-col items-center justify-center ${green ? 'bg-yofrag-deepGreen' : 'bg-yofrag-white' } ${darkText ? 'text-yofrag-black' : 'text-yofrag-white'} rounded-[4px] transition-all hover:rounded-[22px] duration-150 ${styles}`} 
            style={{fontSize: `${fontSize}px`}}
            onClick={() => {handleClick()}}
        >
            {text}
        </button>
    )
};

export default PrimaryButton