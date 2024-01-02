import img1 from "../images/restaurant chef B.jpg"
import img2 from "../images/Mario and Adrian b.jpg"

export const About = (props) => {
    return <div className="container">
        <div className="promotion-text w-200">
            <h1 className="title">Little Lemon</h1>
            <h2 className="location">Chicago</h2>
            <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at ex leo. Maecenas enim sem, laoreet at nulla ac, luctus scelerisque massa. Praesent ut molestie nisi. Aliquam arcu lorem, auctor condimentum blandit id, lobortis in nisi. Ut diam justo, euismod in accumsan id, vehicula sit amet tellus. Pellentesque porttitor elit lacus, vitae lacinia magna ultricies quis. Etiam vitae tellus et mi hendrerit consequat. In dictum ligula in elit euismod malesuada. Curabitur varius augue id tempus ultricies. Mauris suscipit porta odio, et pretium nibh scelerisque ut.</p>
        </div>
        <div className="promotion-img">
            <img src={img2} width={"50%"} className="promotion-image p-img-1" style={{ width: "40%"}} />
            <img src={img1} width={"50%"} className="promotion-image p-img-2" style={{ width: "40%"}} />
        </div>
    </div>
}