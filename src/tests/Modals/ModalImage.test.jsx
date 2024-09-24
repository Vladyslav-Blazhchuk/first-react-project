import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import ModalImage from "../../components/Modal/ModalImage/ModalImage";

const product = {
    id: 1,
    name: 'Product Name',
    description: 'Product Description',
    price: '20.00',
    image: 'image_url'
};
const onClose = jest.fn();
const onAddToCart = jest.fn();

test('renders ModalImage with product details', () => {
    render(<ModalImage onClose={onClose} product={product} onAddToCart={onAddToCart} />);

    expect(screen.getByAltText('Product Name')).toBeInTheDocument();
    expect(screen.getByText('Product Name')).toBeInTheDocument();
    expect(screen.getByText('Product Description')).toBeInTheDocument();
});

test('calls onClose when No, cancel is clicked', () => {
    render(<ModalImage onClose={onClose} product={product} onAddToCart={onAddToCart} />);

    fireEvent.click(screen.getByText('No, cancel'));
    expect(onClose).toHaveBeenCalledTimes(1);
});
