import { About } from "../components/About"
import { Promotion } from "../components/Promotion"
import { SpecialItems } from "../components/SpecialItems"
import { Testimonials } from "../components/Testimonials"
import greekSalad from "../images/greek salad.svg"
import lemonDesert from "../images/lemon dessert.svg"
import restaurantFood from "../images/restaurantfood.svg"

export const HomePage = (props) => {
   
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
            <Promotion/>
        </section>
        <section className="specials container">
            <h1>Specials</h1>
            <button>Online Menu</button>
        </section>
        <section className="specials-content container">
            <SpecialItems specialItems={specialItems}/>
        </section>
        <section className="testimonials">
            <Testimonials/>
        </section>
        <section className="about">
            <About/>
        </section>
    </div>
}