import Product from  "./Product.jsx";

function ProductTab() {
    let options = ["hi-tech", "durable", "fast"];
    // let options2 = { a: "hi-tech", b: "durable", c: "fast" };
    return(
        <>
        <Product title="Phone" price={30000} features={["hi-tech", "slow"]}/>
        <Product title="Laptop" price={40000}/>
        </>
    );
}

export default ProductTab;