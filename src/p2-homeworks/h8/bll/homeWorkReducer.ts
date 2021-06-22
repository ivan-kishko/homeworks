import {UserType} from "../HW8";

type SortAT = {
    type: 'sort'
    payload: 'up' | 'down'
}

type Check18AT = {
    type: 'check'
    payload: 18
}

type HWReducerAT = SortAT | Check18AT


export const homeWorkReducer = (state: UserType[], action: HWReducerAT): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            const newState = [...state]
            return action.payload === 'up'
                ? newState.sort((a,b) => a.age > b.age ? 1 : -1)
                : newState.sort((a,b) => a.age < b.age ? 1 : -1)
        }
        case 'check': {
            return state.filter(u => u.age > action.payload)
        }
        default: return state
    }
}