import React from "react";

const PrimaryButton = ({ widths , styles , darkText , handleClick , text  } : {styles?: string , widths?:string , text:string , handleClick?:any , darkText?:boolean , disabled?:any }) => {
    return (
        <button 
            className={`h-11 ${widths} flex flex-col items-center justify-center text-sm bg-yofrag-deepGreen ${darkText ? 'text-yofrag-black' : 'text-yofrag-white'} rounded-[22px] transition-all hover:rounded-[4px] duration-150 ${styles}`} 
            onClick={() => {handleClick()} }>
            {text}
        </button>
    )
};

export default PrimaryButton