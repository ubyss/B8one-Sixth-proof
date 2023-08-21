import { getProducts } from './../../../__mocks__/mockApis.js'
import ProductCard from './ProductCard/index.js'

const Shelf = () => {

    const products = getProducts()

  return (
    <div className="shelf__content">
        <div className="shelf__text">
            <h3 className="shelf__text-title">Destaques da semana</h3>
            <span className="shelf__text-description">Ofertas que vão deixar sua semana ainda mais especial.</span>
        </div>

        <div className="shelf__products-container">
            {products.map((product: any) => (
            <ProductCard key={product.id} product={product} />
            ))}
        </div>
    </div>
  )
}

export default Shelf