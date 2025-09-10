import './App.css';
import {bestSellingTv, inventory} from './constants/inventory.js';
import Card from './Card.jsx';
import calculateProductsSold from './helpers/calculateProductsSold.js';
import calculateProductsPurchased from './helpers/calculateProductsPurchased.js';
import calculateProductsToSell from "./helpers/calculateProductsToSell.js";
import createNameBestsellingTv from './helpers/createNameBestsellingTv.js';
import createPriceBestsellingTv from './helpers/createPriceBestsellingTv.js';
import createScreenSizesBestsellingTv from "./helpers/createScreenSizesBestsellingTv.js";
import Highlight from "./Highlight.jsx";
import ProductImage from "./ProductImage.jsx";
import productImage from "./ProductImage.jsx";

function App() {
  return (
    <>
      <h1>Tech it easy dashboard</h1>
      <div>
        <h2>Verkoopoverzicht</h2>
        <section className={"card-wrapper"}>
            <Card title="Aantal verkochte producten" helperFn={calculateProductsSold} data={bestSellingTv && inventory} />
            <Card title="Aantal ingekochte producten" variant="blue" helperFn={calculateProductsPurchased} data={bestSellingTv && inventory} />
            <Card title="Aantal te verkopen producten" variant="red" helperFn={calculateProductsToSell} data={bestSellingTv && inventory} />
        </section>
      </div>
      <div>
        <h2>Best verkochte tv</h2>
        <Highlight image={productImage} url={bestSellingTv.sourceImg} alt={"product image"} helperFnProduct={createNameBestsellingTv} helperFnPrice={createPriceBestsellingTv} helperFnSizes={createScreenSizesBestsellingTv} data={bestSellingTv} />
      </div>
    </>

  )
}

export default App
