import React, { useContext } from 'react'
import { GardenSizeContext } from '../App'

const GardenSize = () => {

    const {gardenWidth, gardenHeight, setGardenWidth, setGardenHeight} = useContext(GardenSizeContext)


    const handleChangeWidth = (event) => {
        setGardenWidth(event.target.value);
    };
    const handleChangeHeight = (event) => {
        setGardenHeight(event.target.value);
    };

   
    return (
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <div className="width">
                <p>Width</p>
                <input
                    type="range"
                    min="0"
                    max="20"
                    value={gardenWidth}
                    onChange={handleChangeWidth}
                />
                <p> {gardenWidth} Feet</p>
            </div>

            <div className="width">
                <p>Height</p>
                <input
                    type="range"
                    min="0"
                    max="20"
                    value={gardenHeight}
                    onChange={handleChangeHeight}
                />
                <p>{gardenHeight} Feet</p>
                
            </div>
        </div>
    )
}

export default GardenSize