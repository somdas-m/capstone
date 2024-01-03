export const SpecialItems = (props) => {
    const { specialItems } = props
    return specialItems.map((item, index) => {
        const { img, name, price, description, orderDelivery } = item
        return <article className={`width-30 item-${index}`} key={name}>
            <img src={img} width={"100%"} />
            <div className="special-container">
                <h2>{name}</h2>
                <h2 className="price">${price}</h2>
                <p>{description}</p>
                <button disabled={!orderDelivery}>{orderDelivery ? "Order Delivery" : "Sold Out"}</button>
            </div>
        </article>
    })
}