import { useState } from 'react'
import products from '../Products/Products'
import './Store.css'
import IconSwitch from '../IconSwitch/IconSwitch'
import ShopCard from '../ShopCard/ShopCard'
import ShopItem from '../ShopItem/ShopItem'


const Store = () => {
    const [list, setIcon] = useState('view_list');
    const module = list === 'view_module'
    

    return (
        <div className='store'>
            <IconSwitch list={list} onSwitch={()=> setIcon(module ? 'view_list' : 'view_module')} />
            {module ? <ShopCard cards={products} /> : <ShopItem cards={products} />}       
        </div>)
}

export default Store

