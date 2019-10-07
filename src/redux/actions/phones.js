import { getPhones } from '../../phonedata'
import { SET_PHONES } from '../actionTypes/phone'

export function fetchPhones(query){
    return { type: SET_PHONES, payload: query }
}