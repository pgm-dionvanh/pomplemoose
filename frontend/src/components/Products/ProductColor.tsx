import { useState } from 'react'
import { Link } from 'react-router-dom'

export interface ProductColor {
colorCode: string
onClick: (e: React.MouseEvent<HTMLInputElement>) => void;
}

export default function ProductColorInput({ colorCode, onClick }:ProductColor) {

return (
<label htmlFor={ colorCode + "-product-color"} className="mt-2 flex items-center w-[43px] h-[43px] mr-[13px]">
    <input className="hidden" onClick={onClick} data-name="Black" name="product-color" type="radio" id={ colorCode + "-product-color"}
        value={colorCode} />
    <span className="flex justify-center cursor-pointer items-center relative border w-full h-full p-full">
        <span style={{background: colorCode}} className={`absolute w-[24px] h-[24px]`}></span>
    </span>
</label>
)}