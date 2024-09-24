import React from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { PatternFormat } from 'react-number-format';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, removeFromCart } from '../features/cart/cartSlice';
import Button from '../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import './CheckoutPage.scss';

const Schema = Yup.object().shape({
    firstName: Yup.string()
        .matches(/^[A-Za-zА-Яа-яІіЇїЄєҐґ]+$/, 'First Name can only contain letters')
        .required('First Name is required'),
    lastName: Yup.string()
        .matches(/^[A-Za-zА-Яа-яІіЇїЄєҐґ]+$/, 'Last Name can only contain letters')
        .required('Last Name is required'),
    age: Yup.number()
        .min(18, 'You must be at least 18 years old')
        .max(100, 'You must be at most 100 years old')
        .required('Age is required'),
    address: Yup.string().required('Address is required'),
    phone: Yup.string()
        .required('Phone is required')
        .matches(
            /^\(\d{3}\)\d{3}-\d{2}-\d{2}$/,
            'Phone number must be in format (###)###-##-##'
        ),
});

function CheckoutPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cart = useSelector((state) => state.cart);

    return (
        <div className="checkout__form">
            <h2 className="checkout__title">Checkout</h2>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    age: '',
                    address: '',
                    phone: '',
                }}
                validationSchema={Schema}
                onSubmit={(values, { resetForm }) => {
                    console.log('Form values:', values);
                    console.log('Cart products:', cart);

                    dispatch(clearCart());

                    localStorage.removeItem('cart');

                    resetForm();
                    navigate('/');
                }}
            >
                {({ isSubmitting }) => (
                    <Form className="main__form">
                        <div className="main__form-wrapper">
                            <label htmlFor="firstName">First Name <span>*</span></label>
                            <Field
                                type="text"
                                id="firstName"
                                name="firstName"
                                placeholder="First Name"
                            />
                            <ErrorMessage name="firstName" component="div" className="error" />
                        </div>

                        <div className="main__form-wrapper">
                            <label htmlFor="lastName">Last Name <span>*</span></label>
                            <Field
                                type="text"
                                id="lastName"
                                name="lastName"
                                placeholder="Last Name"
                            />
                            <ErrorMessage name="lastName" component="div" className="error" />
                        </div>

                        <div className="main__form-wrapper">
                            <label htmlFor="age">Age <span>*</span></label>
                            <Field
                                type="number"
                                id="age"
                                name="age"
                                placeholder="Age"
                            />
                            <ErrorMessage name="age" component="div" className="error" />
                        </div>

                        <div className="main__form-wrapper">
                            <label htmlFor="address">Address <span>*</span></label>
                            <Field
                                type="text"
                                id="address"
                                name="address"
                                placeholder="Address"
                            />
                            <ErrorMessage name="address" component="div" className="error" />
                        </div>

                        <div className="main__form-wrapper">
                            <label htmlFor="phone">Phone <span>*</span></label>
                            <Field name="phone">
                                {({ field }) => (
                                    <PatternFormat
                                        {...field}
                                        format="(###)###-##-##"
                                        mask="_"
                                        placeholder="+38 (###) ###-##-##"
                                        id="phone"
                                    />
                                )}
                            </Field>
                            <ErrorMessage name="phone" component="div" className="error" />
                        </div>

                        <Button type='submit' disabled={isSubmitting || cart.length === 0} className='main__btn-purchase'>
                            Complete Purchase
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default CheckoutPage;
