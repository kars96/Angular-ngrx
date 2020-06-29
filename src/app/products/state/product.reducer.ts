import { AppState } from 'src/app/state/app.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';


export interface State extends AppState {
    products: ProductState
}
export interface ProductState {
    showProductCode: boolean
}

const initialState: ProductState = {
    showProductCode: true
};

const getProductSelector = createFeatureSelector<ProductState>('products');
export const getShowProdCode = createSelector(
    getProductSelector,
    product => product.showProductCode
)

export function reducer(state = initialState, action: any): ProductState {
    console.log('I am called')
    switch(action.type) {
        case 'TOGGLE_PRODUCT_CODE':
            console.log(JSON.stringify(state));
            console.log(action.payload)
            return {
                ...state,
                showProductCode: action.payload
            };
        default: 
            return state;
    }
}