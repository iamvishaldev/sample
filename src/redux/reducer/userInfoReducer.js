import { GET_USER_INFO } from "../actionTypes/orderActionTypes";

const initialState = {
    userInfo: {
        name: 'Vishal',
        address: '400601,Thane Maharastra Near Evershine Hotel',
        paymentData: [
            { id: 1, name: "visa", contact: "**** **** **** 5967" },
            { id: 2, name: "paypal", contact: "wilson.casper@bernice.info" },
            { id: 3, name: "mastercard", contact: "**** **** **** 3461" },
        ]
    }
};

const userInfoReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_USER_INFO:
            return {
                ...state,
                userInfo
            }

        default:
            return state;
    }
}



export default userInfoReducer;