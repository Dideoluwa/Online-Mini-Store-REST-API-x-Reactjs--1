import React, { useContext, useState, useEffect } from 'react'
import styles from './CheckoutPage.module.css'
import CartContext from './Store/cart-context'


function CheckoutPage() {
    let [firstName, setFirstName] = useState('')
    let [formIsValid, setFormIsValid] = useState(false)
    let [lastName, setLastName] = useState('')
    let [country, setCountry] = useState('Nigeria')
    let [email, setEmail] = useState('')
    let [city, setCity] = useState('')
    let [state, setState] = useState('')
    let [address, setAddress] = useState('')
    let [phoneNumber, setPhoneNumber] = useState('')
    let ctx = useContext(CartContext)
    let totalSpent = `₦${ctx.totalAmount}`;

    useEffect(() => {
        if (firstName.trim().length >= 2 && lastName.trim().length >= 2 && address.trim().length >= 2 && city.trim().length >= 2 && state.trim().length >= 2 && phoneNumber.trim().length >= 2 && email.includes('@') && email.includes('.com')) {
            setFormIsValid(true)
        } else {
            setFormIsValid(false)
        }
    }, [firstName, lastName, address, phoneNumber, city, state, email])

    let formSubmitHandler = (e) => {
        // e.preventDefault()
        localStorage.removeItem('items')
    }

    let FirstNameChangeHandler = (e) => {
        setFirstName(e.target.value)
    }

    let LastNameChangeHandler = (e) => {
        setLastName(e.target.value)
    }

    let CountryChangeHandler = () => {
        setCountry('Nigeria')
    }
    let AddressChangeHandler = (e) => {
        setAddress(e.target.value)
    }

    let CityChangeHandler = (e) => {
        setCity(e.target.value)
    }

    let StateChangeHandler = (e) => {
        setState(e.target.value)
    }
    let PhoneNumberChangeHandler = (e) => {
        setPhoneNumber(e.target.value)
    }
    let EmailChangeHandler = (e) => {
        setEmail(e.target.value)
    }
    return (
        <div className={styles.checkoutBody}>
            <div className={styles.checkoutBody_inner}>
                <h1>Checkout</h1>
                <form onSubmit={formSubmitHandler}>
                    <div className={styles.checkoutBody_inner_name}>
                        <div className={styles.checkoutBody_inner_name_inner}>
                            <label>First Name*</label>
                            <input
                                type='text'
                                value={firstName}
                                onChange={FirstNameChangeHandler}
                                placeholder='John'
                            />
                        </div>
                        <div className={styles.checkoutBody_inner_name_inner}>
                            <label>Last Name*</label>
                            <input
                                type='text'
                                value={lastName}
                                onChange={LastNameChangeHandler}
                                placeholder='Doe'
                            />
                        </div>
                    </div>
                    <div>
                        <label>Country(Only available in Nigeria):</label>
                        <input
                            type='text'
                            value={country}
                            onChange={CountryChangeHandler}
                            placeholder='Nigeria'
                        />
                    </div>
                    <div>
                        <label>Address*</label>
                        <input
                            type='text'
                            value={address}
                            onChange={AddressChangeHandler}
                            placeholder='Address'
                        />
                    </div>
                    <div className={styles.checkoutBody_inner_name}>
                        <div className={styles.checkoutBody_inner_name_inner}>
                            <label>City/Town*</label>
                            <input
                                type='text'
                                value={city}
                                onChange={CityChangeHandler}
                            />
                        </div>
                        <div className={styles.checkoutBody_inner_name_inner}>
                            <label>State*</label>
                            <input
                                type='text'
                                value={state}
                                onChange={StateChangeHandler}
                            />
                        </div>
                    </div>
                    <div>
                        <label>Phone Number*</label>
                        <input
                            type='tel'
                            value={phoneNumber}
                            onChange={PhoneNumberChangeHandler}
                        />
                    </div>
                    <div>
                        <div>
                            <label>Email*</label>
                            <input
                                type='email'
                                value={email}
                                onChange={EmailChangeHandler}
                                placeholder='Johndoe@email.com'
                            />
                        </div>
                        <button
                            type='submit'
                            className={styles.button}
                            disabled={!formIsValid}>
                            Place Order</button>
                    </div>
                </form>
                {/* {props.isOrdered && <h3>Your order has been taken.Click <Link to ="/">here</Link> to continue shopping.</h3>} */}
            </div>
            <div className={styles.checkoutBody_inner2}>
                <ul className={styles['cart-items']}>
                    {ctx.items.map((item) => (
                        <div className={styles.cartList} key={item._id}>
                            <div className={styles.cover1}>
                                <div className={styles.items}>
                                    <div>
                                        <h4 className={styles.h2}>{item.title}</h4>
                                        <li>Price: {`₦${item.price}`}</li>
                                    </div>
                                    <div className={styles.quantity}>
                                        <h2 className={styles.amount}>X{item.amount}</h2>
                                    </div>
                                </div>
                                <div className={styles.wrapper}>
                                    <img src={item.images} alt={item.title} />
                                </div>
                            </div>
                        </div>
                    ))}
                </ul>
                <div>
                    <h2 className={styles.total}>Total: {totalSpent}</h2>
                </div>
            </div>
        </div>
    )
}

export default CheckoutPage