import React from "react";
import data from './data';

function App() {
  return (
    <div classNameName="grid_container">
    <header className="row">
    
            <div> <a className="brand" href="/" >
                
                    Amazon
                    </a>
                </div>
                 <div>
                        
                   <a href="/cart">Cart </a>
                   <a href= "/signin">Sign In</a>                 
            </div>
        
    </header>
    <main>
        <div>
            <div className="row center">
              {
                data.products.map(product => (
                  <Product key= {product._id}   product = {product}></Product>

                ))}
             
            </div>
          </div>

    </main>
    <footer className="row center"> All right reserved
        
    </footer>
</div>
    
  );
}

export default App;
