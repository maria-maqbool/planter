import React, { useContext } from 'react'
import { GardenSizeContext } from '../App'

const PlanterSize = () => {

  const { plantSize, setPlantSize } = useContext(GardenSizeContext)

  return (
    <div style={{color: 'rgba(115, 115, 115, 1)'}}>
        <p onClick={() =>  setPlantSize("2")}>Small ( 22cm width )</p>
        <p onClick={() =>  setPlantSize("4")}>Medium ( 34cm width )</p>
        <p onClick={() =>  setPlantSize("6")}>Large ( 45cm width )</p>
       
    </div>
  )
}

export default PlanterSize