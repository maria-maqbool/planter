import React, { useContext } from 'react'
import { MdDeleteOutline } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";
import GardenProperties from './GardenProperties';
import { IoIosAddCircle } from "react-icons/io";
import GardenSize from './GardenSize';
import PlanterQuantity from './PlanterQuantity';
import PlanterColor from './PlanterColor';
import PlanterSize from './PlanterSize';
import Inclusion from './Inclusion';
import { GardenSizeContext } from '../App'

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

    const { plantPositions, setPlantPositions } = useContext(GardenSizeContext) 
  const addPlant = () => {
    // Calculate the position for the new plant based on the position of the last plant
    const lastPosition = plantPositions[plantPositions.length - 1];
    const newPosition = lastPosition
      ? [lastPosition[0] + 1, lastPosition[1], lastPosition[2]]
      : [1, 0, 0.147];

    // Add the new plant position to the array
    setPlantPositions(prevPositions => [...prevPositions, newPosition]);
  };
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

                </div>

                <button className='add-btn'  onClick={addPlant}>
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