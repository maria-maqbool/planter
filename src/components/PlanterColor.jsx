import React, { useContext, useState } from 'react'
import { GardenSizeContext } from '../App'
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/css";


import { IoIosAddCircle } from "react-icons/io";

const PlanterColor = () => {

  const { plantColor, setPlantColor} = useContext(GardenSizeContext)
  
  const [color, setColor] = useColor(plantColor);
  const [showColorPicker, setShowColorPicker] = useState(false);

  const handleColorChange = (newColor) => {
    setColor(newColor);
    setPlantColor(newColor.hex);
  };


  return (
    <div>
      {console.log("color: ", color, "setColor: ", setColor)}
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '20px'}}>
            <div><div onClick={() => setPlantColor("black")} style={{background: 'rgba(47, 50, 43, 1)', height: '40px', width: '40px', borderRadius: '50%'}}></div><p>Black</p></div>
            <div><div onClick={() => setPlantColor("Green")}   style={{background: 'rgba(113, 163, 47, 1)', height: '40px', width: '40px', borderRadius: '50%'}}></div><p>Terracotta</p></div>
            <div><div onClick={() => setPlantColor("grey")}   style={{background: 'rgba(168, 165, 161, 1)', height: '40px', width: '40px', borderRadius: '50%'}}></div><p>Stone</p></div>
            <div onClick={() => setShowColorPicker(!showColorPicker)}><IoIosAddCircle   style={{color: 'rgba(118, 118, 118, 1)', height: '30px', width: '30px'}} /><p>Other</p></div>     
        </div>
        {showColorPicker && <ColorPicker color={color} onChange={handleColorChange} />}
    </div>
  )
}

export default PlanterColor