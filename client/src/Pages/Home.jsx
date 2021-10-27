import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import CardHome from '../Components/CardHome'
import { actionFetchNews } from '../Store/actions/newsAction'

function Home () {
  let dispatch = useDispatch()

  useEffect(() => {
    dispatch(actionFetchNews())
  }, [])
  return (
    <div class='container my-12 mx-auto px-4 md:px-12'>
      <div class='flex flex-wrap -mx-1 lg:-mx-4'>
        <CardHome />
      </div>
    </div>
  )
}

export default Home
