import React from 'react'
import ItemsForm from './ItemsForm'

const NewItems = (props) => {
  const saveItemsDataHandler = (inputItemsData)=>{
    const itemsData = {
      ...inputItemsData,
      id: Math.random().toString(),
    }
    props.onAddItems(itemsData)
  }

  return (
  <>
    <div className='new-item'>
      <ItemsForm onSaveItemsData={saveItemsDataHandler}/>
    </div>
  </>

    )
}

export default NewItems