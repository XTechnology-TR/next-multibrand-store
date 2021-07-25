import { HYDRATE } from 'next-redux-wrapper';
import { AnyAction, combineReducers } from 'redux';
import { AdminState } from '../../types/adminTypes';
import { AuthState } from '../../types/authReduxTypes';
import { CartState } from '../../types/cartReduxTypes';
import { OrdersState } from '../../types/orderTypes';
import { ProductsState } from '../../types/productTypes';
import { UiActionsState } from '../../types/uiTypes';
import { CheckoutState } from './../../types/checkoutTypes';
import { RecentlyViewedProductsState } from './../../types/recentlyViewedProductsTypes';
import { adminReducer } from './adminReducer';
import { authReducer } from './authReducer';
import { cartReducer } from './cartReducer';
import { checkoutReducer } from './checkoutReducer';
import { ordersReducer } from './ordersReducer';
import { productsReducer } from './productsReducer';
import { recentlyViewedProductsReducer } from './recentlyViewedProducts';
import { uiActionsReducer } from './uiActionsReducer';

const rootReducer = combineReducers({
  admin: adminReducer,
  products: productsReducer,
  ui: uiActionsReducer,
  auth: authReducer,
  cart: cartReducer,
  recentlyViewed: recentlyViewedProductsReducer,
  checkout: checkoutReducer,
  orders: ordersReducer,
});

export type State = {
  admin: AdminState;
  products: ProductsState;
  ui: UiActionsState;
  auth: AuthState;
  cart: CartState;
  recentlyViewed: RecentlyViewedProductsState;
  checkout: CheckoutState;
  orders: OrdersState;
};

// https://stackoverflow.com/questions/64139344/how-to-use-typescript-next-redux-wrapper-getserversideprops

export const reducer = (state: State | undefined, action: AnyAction) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };
    return nextState;
  } else {
    return rootReducer(state, action);
  }
};

export type RootState = ReturnType<typeof reducer>;
export type LocalRootState = ReturnType<typeof rootReducer>;
