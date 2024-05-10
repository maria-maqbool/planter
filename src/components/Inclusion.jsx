import React, { useContext } from "react";
import { GardenSizeContext } from '../App'


const Inclusion = () => {

  const { wheels, setWheels } = useContext(GardenSizeContext)

  return (
    <div style={{color: 'rgba(115, 115, 115, 1)'}}>
        <p onClick={() => setWheels(true)}>With Trolley</p>
        <p onClick={() => setWheels(false)}>Without Trolley</p>
        <p>Planter + Trolley + Hydroponic  Grow Pack</p>
        <p>Planter + Set</p>
        <p>Planter + Trolley Set</p>
        <p>Planter + Trolley Set + Hydroponic Grow Pack</p>   
    </div>
  )
}

export default Inclusion