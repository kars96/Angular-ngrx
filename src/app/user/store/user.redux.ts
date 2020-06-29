export function redux(state: any, action: any) {
    switch(action.type) {
        case 'MASK_USER_NAME':
            return {
                ...state,
                maskUserName: action.payload
            }
    }
}