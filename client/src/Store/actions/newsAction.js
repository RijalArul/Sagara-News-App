import { SET_DETAIL_NEWS, SET_NEWS } from './actionType'

export function setNews (payload) {
  return {
    type: SET_NEWS,
    payload
  }
}

export function setDetailNews (payload) {
  return {
    type: SET_DETAIL_NEWS,
    payload
  }
}

export function actionFetchNews () {
  return async function (dispatch) {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=id&apiKey=7a42b20a089f46b9acc874818589eeb3`,
        {
          method: 'GET'
        }
      )

      const { articles } = await response.json()
      dispatch(setNews(articles))
    } catch (err) {
      console.log(err)
    }
  }
}

export function actionFetchNewsDetail (payload) {
  return async function (dispatch) {
    try {
      localStorage.setItem('news', JSON.stringify(payload))
      dispatch(setDetailNews())
    } catch (err) {
      console.log(err)
    }
  }
}
