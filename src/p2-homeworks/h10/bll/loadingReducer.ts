const initState = {
    loading: false
}

type InitStateType = {
    loading: boolean
}

export const loadingReducer = (state = initState, action: LoadingActionType): InitStateType => { // fix any
    switch (action.type) {
        case 'SET_LOADING_STATUS': {
            return {
                ...state,
                loading: action.status
            }
        }
        default: return state
    }
}

export type LoadingActionType = {
    type: 'SET_LOADING_STATUS',
    status: boolean
}

export const loadingAC = (status: boolean): LoadingActionType => {
    return {
        type: "SET_LOADING_STATUS",
        status,
    }
} // fix any