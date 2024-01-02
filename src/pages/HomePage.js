import { SpecialItems } from "../components/SpecialItems"
import promotionImg from "../images/Mario and Adrian A.jpg"
import greekSalad from "../images/greek salad.svg"
import lemonDesert from "../images/lemon dessert.svg"
import restaurantFood from "../images/restaurantfood.svg"

export const HomePage = (props) => {
    const handleOnClick = (e) => {
        e.preventDefault()
        window.location.href = "/reservations"
    }
    const specialItems = [{
        img: greekSalad,
        name: "Greek Salad",
        price: "12.99",
        description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
        orderDelivery: true
    }, {
        img: lemonDesert,
        name: "Lemon Cake",
        price: "12.99",
        description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
        orderDelivery: false
    }, {
        img: restaurantFood,
        name: "Bruschetta",
        price: "12.99",
        description: "Our Bruschetta is made from homemade grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Topped with fresh vegetables.",
        orderDelivery: true
    }]

    return <div className="home">
        <section className="promotion">
            <div className="container">
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
        </section>
        <section className="specials container">
            <h1>Specials</h1>
            <button>Online Menu</button>
        </section>
        <section className="specials-content container">
            <SpecialItems specialItems={specialItems}/>
        </section>
    </div>
}