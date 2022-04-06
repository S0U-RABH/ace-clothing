import React from 'react'
import '../cart-icon/cart-icon.style.scss'
import { connect } from 'react-redux'

import { toggleCartHidden } from '../../redux/cart/cart.actions'

import { ReactComponent as ShoppingIcon } from '../../assets/Shopping-bag.svg'

const CartIcon = ({ toggleCartHidden,itemCount }) => {
    return (
        <div className='cart-icon' onClick={toggleCartHidden}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{itemCount}</span>
        </div>
    )
}
const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps =({cart: {cartItems}}) => ({
    itemCount: cartItems.reduce((accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity ,0)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartIcon);