import rating5 from "../images/5star.png"
import rating4 from "../images/4star.png"
import rating3 from "../images/3star.png"
import userImg1 from "../images/userImg.avif"

export const Testimonials = (props) => {
    const userReviews = [{
        name: "User 1",
        desc: "Excellent",
        img: userImg1,
        rating: rating5
    },
    {
        name: "User 2",
        desc: "Nice",
        img: userImg1,
        rating: rating4
    },
    {
        name: "User 3",
        desc: "Good",
        img: userImg1,
        rating: rating3
    },
    {
        name: "User 4",
        desc: "Really awesome!",
        img: userImg1,
        rating: rating5
    }]
    return <div className="container testimonials-container">
        <h1 className="testimonials-h">Testimonials</h1>
        <div className="testimonials-content">
            {
                userReviews.map(review => {
                    const { name, desc, img, rating } = review
                    return <div class="review">
                        <img id="profile-img" src={img} alt="Customer Pic" style={{ borderRadius: "50%", marginTop: "1em" }} />
                        <h2>{name}</h2>
                        <img id="rating" src={rating} alt="ratings" />
                        <p>"{desc}"</p>
                    </div>
                })
            }
        </div>
    </div>
}