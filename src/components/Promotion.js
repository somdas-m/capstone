import promotionImg from "../images/Mario and Adrian A.jpg"

export const Promotion = (props) => {
    const handleOnClick = (e) => {
        e.preventDefault()
        window.location.href = "/reservations"
    }
    return <div className="container">
        <div className="promotion-text">
            <h1 className="title">Little Lemon</h1>
            <h2 className="location text-light">Chicago</h2>
            <p className="description text-light">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <button className="reserve" onClick={handleOnClick}>Reserve a table</button>
        </div>
        <div className="promotion-img">
            <img src={promotionImg} width={"50%"} className="promotion-image" />
        </div>
    </div>
}