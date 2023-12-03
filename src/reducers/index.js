import { combineReducers } from 'redux'
import carts from './carts'
import productsCategory from './productsCategory'
import productsVariant from './productsVariant'
import products from './products'
import transactions from './transactions'
import generals from './generals'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
    productsCategory,
    productsVariant,
    products,
    generals,
    carts,
    transactions,
    form: formReducer
})