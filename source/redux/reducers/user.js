const Initial_State = {
    id: null,
    name: '',
    email: '',
    password: ''
}
export default function user(state=Initial_State, action) {
    switch (action.type) {
        case login:
            return{
                ...state,
                id: action._id,
                name: action.name,
                email: action.email,
                password: action.password
            }
        default:
            return state
    }
}