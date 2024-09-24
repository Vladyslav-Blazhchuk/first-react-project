import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom'
import Button from "../../components/Button/Button";

// Add to cart

test('check button text (add to cart)', () => {

    render(<Button>Add to cart</Button>);
    const btn = screen.getByText('Add to cart');
    expect(btn).toBeInTheDocument();

});

test('check button class (add to cart)', () => {

    render(<Button className='first-btn'>Add to cart</Button>)
    const btn = screen.getByText('Add to cart');
    expect(btn).toHaveClass('first-btn');

});

test('check button event (add to cart)', () => {

    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Add to cart</Button>)
    const btn = screen.getByText('Add to cart');
    fireEvent.click(btn);
    expect(handleClick).toHaveBeenCalledTimes(1);

});

// No, cancel

test('check button text (no, cancel)', () => {

    render(<Button>No, cancel</Button>);
    const btn = screen.getByText('No, cancel');
    expect(btn).toBeInTheDocument();

});

test('check button class (no, cancel)', () => {

    render(<Button className='second-btn'>No, cancel</Button>)
    const btn = screen.getByText('No, cancel');
    expect(btn).toHaveClass('second-btn');

});

test('check button event (no, cancel)', () => {

    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>No, cancel</Button>)
    const btn = screen.getByText('No, cancel');
    fireEvent.click(btn);
    expect(handleClick).toHaveBeenCalledTimes(1);

});

// Yes, delete

test('check button text (yes, delete)', () => {

    render(<Button>Yes, delete</Button>);
    const btn = screen.getByText('Yes, delete');
    expect(btn).toBeInTheDocument();

});

test('check button class (yes, delete)', () => {

    render(<Button className='second-btn'>Yes, delete</Button>)
    const btn = screen.getByText('Yes, delete');
    expect(btn).toHaveClass('second-btn');

});

test('check button event (yes, delete)', () => {

    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Yes, delete</Button>)
    const btn = screen.getByText('Yes, delete');
    fireEvent.click(btn);
    expect(handleClick).toHaveBeenCalledTimes(1);

});

// Checkout

test('check button text (checkout)', () => {

    render(<Button>Checkout</Button>);
    const btn = screen.getByText('Checkout');
    expect(btn).toBeInTheDocument();

});

test('check button class (checkout)', () => {

    render(<Button className='main__btn-checkout'>Checkout</Button>)
    const btn = screen.getByText('Checkout');
    expect(btn).toHaveClass('main__btn-checkout');

});

test('check button event (checkout)', () => {

    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Checkout</Button>)
    const btn = screen.getByText('Checkout');
    fireEvent.click(btn);
    expect(handleClick).toHaveBeenCalledTimes(1);

});

// Complete Purchase

test('check button text (Complete Purchase)', () => {

    render(<Button>Complete Purchase</Button>);
    const btn = screen.getByText('Complete Purchase');
    expect(btn).toBeInTheDocument();

});

test('check button class (Complete Purchase)', () => {

    render(<Button className='main__btn-purchase'>Complete Purchase</Button>)
    const btn = screen.getByText('Complete Purchase');
    expect(btn).toHaveClass('main__btn-purchase');

});

test('check button event (Complete Purchase)', () => {

    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Complete Purchase</Button>)
    const btn = screen.getByText('Complete Purchase');
    fireEvent.click(btn);
    expect(handleClick).toHaveBeenCalledTimes(1);

});


