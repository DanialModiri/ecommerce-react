import { SET_PHONES } from "../actionTypes/phone";
import { getPhones } from "../../phonedata";

export default (state = { query: {sort: 'price', number: 50, direction: -1, page: 1} }, action) => {
    
    switch (action.type) {
        case SET_PHONES:
            const query = {...state.query, page: 1,...action.payload};
            const {phones, number} = getPhones(query);
            console.log('FROM REDUCER', query)
            return { 
                ...state, 
                query,
                number, 
                phones }
        default:
            return state;
    }
}