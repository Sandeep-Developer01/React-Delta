import "./Product.css";
import Price from "./Price.jsx";

function Product({ title, idx }) {
    let oldPrices = ["12,899", "11,900", "1,300", "599"];
    let newPrices =["8,999", "9,199", "899", "250"];
    let description = [["8000 DPI", "5 Programmable buttons"], ["Intuitive Surface", "8000 DPI"], ["Designed for iPad Pro", "Wireless"], ["Intuitive Surface", "5 Programmable buttons"]];
    return(
        <div className="Product">
        <h4>{title}</h4>
        <p>{description[idx][0]}</p>
        <p>{description[idx][1]}</p>
        <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
        </div>
    )
}

export default Product;