import React from 'react'


const PlanterQuantity = ({ onAddPlants }) => {
  const handleAddPlants = (count) => {
    onAddPlants(count);
  };

  return (
    <div>
      <p>Choose an Option</p>
      <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
        <p onClick={() => handleAddPlants(2)}>2</p>
        <p onClick={() => handleAddPlants(4)}>4</p>
        <p onClick={() => handleAddPlants(6)}>6</p>
        <p onClick={() => handleAddPlants(12)}>12</p>
      </div>

    </div>
  )
}

export default PlanterQuantity