import React, { useState, useEffect } from "react";
import "./index.css";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

let count = 0;

function Index({search}) {
  const [products, setProducts] = useState([]);

  const [cart, setCart] = useState([]);
  // const [search, setSearch] = useState('');

  const getProductsData = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const Data = await res.json();
    //  console.log(result);
    setProducts(Data);
    count++;
    

  };

  useEffect(() => {
    getProductsData();
  }, []);

  function btnclick() {
    alert("Product Added to cart");
  }
  function dataRead() {
    alert("Product Added to cart");
  }
 


function SerchEvent(val){
 console.log(val.target.value);

//  const imp=document.getElementById('InputeSerch').value;
 

}


  return (
    <>
     
     



      <Carousel className="Carousel">
        {products.filter((item)=> item.category.toLowerCase().includes(search)).map((e) => {

         
          return (
            <div className="cardbody">
              <header className="">
              
              <img src={e.image} alt="_blank" />
             
              <p className="legend">
                <p>{e.title}</p>
                <h1>{e.category}</h1>
                <p>{e.price}</p>
                <p>
                  {e.rate}
                  {e.count}
                </p>
                <button fdprocessedid="hmjw3t">Add Cart</button>
              </p>
              </header>
            </div>
          );
        })
}                               
        
      </Carousel>
      

      <section className="sec">
      {products.filter((item)=> item.category.toLowerCase().includes(search)).map((e) => {
          return (
            <div className="CardsBody">
              <div className="Card">
                <img src={e.image}  alt="_blank"/>
                <p>{e.title}</p>
                <h1>{e.category}</h1>
                <p>{e.price}</p>
                <p>
                  {e.rate}
                  {e.count}
                </p>
                <button onClick={dataRead}>Read More</button>
                <button onClick={btnclick}>Add to Cart</button>
              </div>
            </div>
          );
        })}
      </section>

      <div className="footer">
        <div className="inner_footer">
          <span className="span1">Get to Know Us</span>
          <br />
          About us <br />
          Careers <br /> Press Releases <br />
          Amazon Science
        </div>

        <div className="div3">
          <span className="span2">Connect with Us</span>
          <br />
          Facebook
          <br />
          Twitter
          <br />
          Instagram
          <br />
          Instagram
        </div>

        <div className="div4">
          <span className="span3">Make money with Us </span>
          <br />
          Sell on Amazon
          <br />
          Sell under Amazon Accelerator
          <br />
          Amezon Pay on Merchants
          <br />
          Advertise Your Products
        </div>

        <div className="div5">
          <span className="span4">Let Us Help You</span>
          <br />
          COVID-19 and Amezon
          <br />
          Your Account
          <br />
          Returns Center
          <br />
          100% Purchase Protection
        </div>
      </div>
    </>
  );
}

export default Index;
