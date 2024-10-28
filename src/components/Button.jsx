import React from 'react'

const Button = ({
    label,
    iconUrl,
    backgroundColor,
    textColor,
    borderColor,
    fullWidth
})=>{
    return(
        <>
            <button
            className={`flex justify-center items-center gap-2 px-5 border 
            font-montserrat text-lg leading-none pt-3 pb-3
            ${
                backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}`
                : 'bg-coral-blue hover:bg-[#CCF7EF] text-white hover:text-coral-blue border-coral-blue'
            } 
            rounded-full ${fullWidth && "w-full"}
            `}>
                {label}
                {
                    iconUrl && <img src={iconUrl} alt='icon'
                    className='ml-2 rounded-full w-5 h-5'/>
                }

            </button>
        </>
    )
}

export default Button