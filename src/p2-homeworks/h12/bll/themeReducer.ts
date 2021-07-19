const initState = {
    theme: 'default'
};

export const themeReducer = (state = initState, action: changeThemeAT): { theme: string } => { // fix any
    switch (action.type) {
        case 'CHANGE=THEME': {
            return {
                ...state,
                theme: action.payload
            };
        }
        default: return state;
    }
};

export const changeThemeC = (theme: string): changeThemeAT => {
    return {
        type: 'CHANGE=THEME',
        payload: theme
    }
}; // fix any

export type changeThemeAT = {
    type: 'CHANGE=THEME',
    payload: string,
}