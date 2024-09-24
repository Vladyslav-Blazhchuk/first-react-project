import './Main.scss';
import ProductCard from "../ProductCard/ProductCard";
import { useState, useEffect, useContext } from 'react';
import { useSelector, useDispatch, } from 'react-redux';
import ModalImage from "../Modal/ModalImage/ModalImage.jsx"
import { fetchProducts } from '../../features/products/productsSlice.jsx';
import { ToggleViewContext } from './ToggleViewContext/ToggleViewContext.jsx';

function Main() {
    const products = useSelector((state) => state.products.items);
    const dispatch = useDispatch();
    const [selectedProduct, setSelectedProduct] = useState(null);
    const { toggleView, handleToggleView } = useContext(ToggleViewContext);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const handleCloseModal = () => {
        setSelectedProduct(null);
    };

    return (
        <main className="main">
            <div className="main__wrapper">
                <h2 className="main__title">Choose your new MacBook!</h2>
                <button className='view-toggle' onClick={handleToggleView}>
                    {toggleView ? 'List view' : 'Grid view'}
                </button>
                <div className={`main__product ${toggleView ? 'grid-view' : 'list-view'}`}>
                    {products && products.map((product, index) => (
                        <ProductCard
                            key={`${product.id}-${index}`}
                            product={product}
                            uniqueKey={`${product.id}-${index}`}
                        />
                    ))}
                </div>
                {selectedProduct && (
                    <ModalImage
                        product={selectedProduct}
                        onClose={handleCloseModal}
                    />
                )}
            </div>
        </main>
    );
}

export default Main;
