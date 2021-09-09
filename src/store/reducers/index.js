export const ACTION_CREATE = "ADD";
export const ACTION_UPDATE = "UPDATE";
export const ACTION_REMOVE = "REMOVE";
export const ACTION_SET_ALL = "SET_ALL";
export const ACTION_SET_SELECTED = "SET_SELECTED";

const initialValue = {
  users: [],
  selectedUser: {
    id: "",
    name: "",
    email: "",
    phone: ""
  }
}

const reducer = (state = initialValue, {type, payload}) => {
  switch (type) {
    case ACTION_CREATE:
      return {
        ...state,
        users: [
          ...state.users,
          payload
        ]
      }

    case ACTION_UPDATE:
      return {
        ...state,
        users: state.users.map(user =>
          user.id === payload.id ? payload : user
        )
      }

    case ACTION_REMOVE:
      return {
        ...state,
        users: state.users.filter(user =>
          user.id !== payload
        )
      }

    case ACTION_SET_ALL:
      return {
        ...state,
        users: payload
      }

    case ACTION_SET_SELECTED:
      return {
        ...state,
        selectedUser: payload
      }

    default:
      return state;
  }
}

export default reducer;
