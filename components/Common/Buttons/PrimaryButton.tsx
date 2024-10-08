import React from "react";

const PrimaryButton = ({ widths , styles , darkText , handleClick , text , green=true , fontSize='text-sm' } : {styles?: string , widths?:string , text:string , handleClick?:any , darkText?:boolean , disabled?:any , green?: boolean , fontSize?: string }) => {
    return (
        <button 
            className={`h-11 ${widths} flex flex-col items-center ${fontSize} justify-center ${green ? 'bg-yofrag-deepGreen' : 'bg-yofrag-white' } ${darkText ? 'text-yofrag-black' : 'text-yofrag-white'} rounded-[22px] transition-all hover:rounded-[4px] duration-150 ${styles}`} 
            onClick={() => {handleClick()}}
        >
            {text}
        </button>
    )
};

export default PrimaryButton