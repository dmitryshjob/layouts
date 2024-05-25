import './ShopCard.css'

const ShopCard = ({ cards }) => {
    return (
        <div className='container'>
            {
                cards.map((el) => (
                    <article className="card" >
                        <div className="card_title">{el.name}</div>
                        <div className="card_color">{el.color}</div>
                        <img className="card_image" src={el.img} alt={el.name}></img>
                        <footer className='card_footer'>
                            <span className="card_price">{el.price}$</span>
                            <button className="card_button">ADD TO CART</button>
                        </footer>
                    </article>
                ))
            }
        </div >
    )
}

export default ShopCard