import { GET_ORDERS } from "../actionTypes/orderActionTypes";

const initialState = {
    ordersData: [
        {
            id: 1,
            name: "Crispy Chicken San",
            dec: "2x tuna sahmi,3x vegetables,1x noodle",
            price: 9.5,
            img: "https://images.everydayhealth.com/images/diet-nutrition/34da4c4e-82c3-47d7-953d-121945eada1e00-giveitup-unhealthyfood.jpg?sfvrsn=a31d8d32_0",
        },
        {
            id: 2,
            name: "Pawn & Chicken Roll",
            dec: "2x tuna sahmi,3x vegetables,1x noodle",
            price: 9.5,
            img: "https://images.everydayhealth.com/images/diet-nutrition/34da4c4e-82c3-47d7-953d-121945eada1e00-giveitup-unhealthyfood.jpg?sfvrsn=a31d8d32_0",
        },
        {
            id: 3,
            name: "Braised Fish Head",
            dec: "2x tuna sahmi,3x vegetables,1x noodle",
            price: 9.5,
            img: "https://images.everydayhealth.com/images/diet-nutrition/34da4c4e-82c3-47d7-953d-121945eada1e00-giveitup-unhealthyfood.jpg?sfvrsn=a31d8d32_0",
        },
        {
            id: 4,
            name: "Salad Fritters",
            dec: "2x tuna sahmi,3x vegetables,1x noodle",
            price: 9.5,
            img: "https://images.everydayhealth.com/images/diet-nutrition/34da4c4e-82c3-47d7-953d-121945eada1e00-giveitup-unhealthyfood.jpg?sfvrsn=a31d8d32_0",
        },
    ],
};

const orderReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_ORDERS:
            return {
                ...state,
                ordersData
            }

        default:
            return state;
    }
}



export default orderReducer;