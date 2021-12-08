import {ADD_ITEM, REMOVE_ITEM} from "./actionConsts";

export const addItemAction = (payload) => ({type: ADD_ITEM, payload})
export const removeItemAction = (payload) => ({type: REMOVE_ITEM, payload})