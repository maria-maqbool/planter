import React, { useState } from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";



const GardenProperties = ({ title , acordianItem}) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };


    return (
        <div className="accordion-item">

            <div className="garden-properties"  onClick={toggleAccordion}>
                <p>{title}</p>
                {
                    isOpen ?   <IoIosArrowDown /> : <MdKeyboardArrowRight />
                } 
                {/* <MdKeyboardArrowRight /> */}
            </div>
            {isOpen && <div className="accordion-content">{acordianItem}</div>}
        </div>
    )
}

export default GardenProperties