import React from "react";
import Product from "./Products/Product";

function App() {
  return (
      <div>
        <Product
            name="Goolge Home"
            description="Your AI assistance"
            price={59.99}
        />
        <Product
            name="Iphone 12 Pro max"
            description="The best iphone"
            price={1200}
        />
        <Product
            name="Macbook Pro"
            description="Your Favorite computer"
            price={2500}
        />
      </div>
  );
}

export default App;
