import { SET_NEWS } from './actionType'

export function setNews (payload) {
  return {
    type: SET_NEWS,
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
