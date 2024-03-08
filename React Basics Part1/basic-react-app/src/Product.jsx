import "./Product.css";

function Product({ title, price, features }) {
    // const list = features.map((feature) => <li>{feature}</li>);
    let styles = { backgroundColor: price > 30000 ? "blue" : "" };
    return (
      <div className="Product" style={styles}>
           <h3>{title}</h3>
           <h5>Price: {price}</h5>
           { price > 30000 ? <p>Discount of 5%</p> : null }
           <p>{features && features.map((feature) => (
           <li>{feature}</li>
           ))}</p>
      </div>
    );
}

export default Product;