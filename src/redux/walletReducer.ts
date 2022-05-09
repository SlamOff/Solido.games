const SET_WALLET = 'SET_WALLET';

const defaultState = {
    walletAddress: ''
}

export const walletReducer = (state = defaultState, action: any) => {
    switch (action.type) {
        case SET_WALLET:
            return {
                ...state,
                walletData: action.payload
            }
        default:
            return state
    }
}

export const setWallet = ( walletAddress: any) => ({ type: SET_WALLET, payload: walletAddress });