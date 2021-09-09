import {
  ACTION_CREATE,
  ACTION_UPDATE,
  ACTION_REMOVE,
  ACTION_SET_ALL,
  ACTION_SET_SELECTED
} from "../reducers";

import apiService from "../../services/apiService";

export const create = (payload) => {
  return (dispatch) => {
    apiService.post("", payload)
      .then(response => {
        dispatch({type: ACTION_CREATE, payload: response.data})
      })
  }
}

export const update = (payload) => {
  return (dispatch) => {
    apiService.put(`/${payload.id}`, payload)
      .then(response => {
        dispatch({type: ACTION_UPDATE, payload})
      })
  }
}

export const remove = (payload) => {
  return (dispatch) => {
    apiService.delete(`/${payload}`)
      .then(response => {
        dispatch({type: ACTION_REMOVE, payload})
      })
  }
}

export const fetchUsers = () => {
  return (dispatch) => {
    apiService.get("")
      .then(response => {
        dispatch({type: ACTION_SET_ALL, payload: response.data})
      });
  }
}

export const setSelectedUser = (payload) => ({type: ACTION_SET_SELECTED, payload});
