import './ShopItem.css'

const ShopItem = ({ cards }) => {
    return (
        <div className='container_list'>
            <div className="cards_list">
                {
                    cards.map((el) => (
                        <article className="card_list" >
                            <img className='card_image_list' src={el.img}></img>
                            <div className='card_title_list'>{el.name}</div>
                            <div className='card_color_list'>{el.color}</div>
                            <span className='card_price_list'>{el.price}$</span>
                            <button className="card_button_list">ADD TO CART</button>
                        </article>
                    ))
                }
            </div>
        </div>
    )
}

export default ShopItem