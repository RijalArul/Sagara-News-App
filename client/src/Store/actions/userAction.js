import {
  SET_ERROR_LOGIN,
  SET_ERROR_REGISTER,
  SET_LOGIN_SUCCESS,
  SET_REGISTER_SUCCESS
} from './actionType'

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

export function setRegisterSuccess (payload) {
  return {
    type: SET_REGISTER_SUCCESS,
    payload
  }
}

export function setRegisterError (payload) {
  return {
    type: SET_ERROR_REGISTER,
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
        },
        body: JSON.stringify(payload)
      })

      const { access_token } = await response.json()
      if (response.status === 401) {
        throw { name: 'Failed_Login' }
      } else {
        localStorage.setItem('access_token', access_token)
        dispatch(setLoginSuccess(access_token))
      }
    } catch (err) {
      const { name } = err
      if (name === 'Failed_Login') {
        dispatch(setErrorLogin(name))
      }
    }
  }
}

export function actionRegister (payload) {
  return async function (dispatch) {
    try {
      console.log(payload)
    } catch (err) {
      console.log(err)
    }
  }
}
