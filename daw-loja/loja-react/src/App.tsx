import { Collection } from "./components/Collection";
import { Header } from "./components/Header";
import { Brands } from "./components/Brand";
import { Footer } from "./components/Footer";
import { Products } from "./components/Products";
import { useEffect, useState } from "react";
import { Product } from "./@types";
import axios from "axios";
import { Newsletter } from "./components/Newsletter";



function App() {
  const brands = [

    { alt: 'brands1', source: 'assets/images/brand1.png' },
    { alt: 'brands2', source: 'assets/images/brand2.png' },
    { alt: 'brands3', source: 'assets/images/brand3.png' },
    { alt: 'brands4', source: 'assets/images/brand4.png' },
    { alt: 'brands5', source: 'assets/images/brand5.png' }
  ];

  const [products, setProducts] = useState<Product[]>([] as Product[]);

  useEffect(() => {

    axios.get('http://localhost:3333/products')
      .then(result => {
        setProducts(result.data);
      })
      .catch(error => {
        console.log('puts', error);
      })

  }, []);

  return (
    <div>

      <Header />

      <main>
        <div className="container">

          <Collection />

          <Products items={products} />

          <Newsletter />
        </div>

        <div className="container">
          <Brands items={brands} />
        </div>
      </main>

      <Footer />


    </div>
  );
}



export default App;