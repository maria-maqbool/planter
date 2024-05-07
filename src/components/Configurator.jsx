import React, { useState } from 'react'
import { MdDeleteOutline } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";
import GardenProperties from './GardenProperties';
import { IoIosAddCircle } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
import GardenSize from './GardenSize';
import PlanterQuantity from './PlanterQuantity';
import PlanterColor from './PlanterColor';
import PlanterSize from './PlanterSize';
import Inclusion from './Inclusion';


const Properties = [
    {
        id: 1,
        property: 'Garden Size',
        acordianItem: <GardenSize />
    },
    {
        id: 2,
        property: 'Number of quantity of planter',
        acordianItem: <PlanterQuantity />
    },
    {
        id: 3,
        property: 'Planter color',
        acordianItem: <PlanterColor />
    },
    {
        id: 4,
        property: 'Planter size',
        acordianItem: <PlanterSize />
    },
    {
        id: 5,
        property: 'Inclusion',
        acordianItem: <Inclusion />
    }
]

const Configurator = () => {

    // const [isOpen, setIsOpen] = useState(false);

    // const toggleAccordion = () => {
    //     setIsOpen(!isOpen);
    // };


    return (
        <div className='configurator'>
            <div className='configurator-header'>
                <p>Garden Size</p>
                <div><MdDeleteOutline /> <IoIosArrowDown /></div>
            </div>
            <div className="configurator-container">
                <div className='contaier-items'>
                    <div className="title">
                        <div className='title-text'>
                            <p>Title</p>
                            <span>Planter 1</span>
                        </div>

                        <div><FaRegEdit /></div>
                    </div>
                    {
                        Properties.map((item) => (

                            <GardenProperties key={item.id} title={item.property} acordianItem={item.acordianItem} />
                        ))
                    }




                    {/* <div>
                        <div className="garden-properties" onClick={toggleAccordion}>
                            <p>Garden Size</p>
                            <MdKeyboardArrowRight />
                        </div>
                        {isOpen && <div className="accordion-content">content</div>}
                    </div>

                    <div>
                        <div className="garden-properties" onClick={toggleAccordion}>
                            <p>Number of quantity of planter</p>
                            <MdKeyboardArrowRight />
                        </div>
                        {isOpen && <div className="accordion-content">content</div>}
                    </div>

                    <div>
                        <div className="garden-properties" onClick={toggleAccordion}>
                            <p>Planter color</p>
                            <MdKeyboardArrowRight />
                        </div>
                        {isOpen && <div className="accordion-content">content</div>}
                    </div>

                    <div>
                        <div className="garden-properties" onClick={toggleAccordion}>
                            <p>Planter size</p>
                            <MdKeyboardArrowRight />
                        </div>
                        {isOpen && <div className="accordion-content">content</div>}

                    </div>

                    <div>
                        <div className="garden-properties" onClick={toggleAccordion}>
                            <p>Inclusion</p>
                            <MdKeyboardArrowRight />
                        </div>
                        {isOpen && <div className="accordion-content">content</div>}

                    </div> */}

                </div>


                <button className='add-btn'>
                    Add Planter <span><IoIosAddCircle /></span>
                </button>
            </div>

            <div className="configurator-footer">
                <button>See Overview </button>
            </div>

        </div>
    )
}

export default Configurator