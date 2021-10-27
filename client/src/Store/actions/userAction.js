import { SET_ERROR_LOGIN, SET_LOGIN_SUCCESS } from './actionType'

export function setLoginSuccess (payload) {
  return {
    type: SET_LOGIN_SUCCESS,
    payload
  }
}

export function setErrorLogin (payload) {
  return {
    type: SET_ERROR_LOGIN,
    payload
  }
}

export function actionLogin (payload) {
  return async function (dispatch) {
    try {
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      })

      if (response.status === 401) {
        throw { name: 'Failed_Login' }
      }
    } catch (err) {
      const { name } = err
      if (name === 'Failed_Login') {
        dispatch(setErrorLogin(name))
      }
    }
  }
}
