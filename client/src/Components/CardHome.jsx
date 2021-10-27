import React from 'react'
import * as moment from 'moment'
import { useHistory } from 'react-router'
import DetailPage from '../Pages/DetailPage'

function CardHome ({ news }) {
  const history = useHistory()
  function clickDetail (news) {
    history.push(`/detail/${news.title}`)
  }
  return (
    <div class='my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3'>
      <article class='overflow-hidden rounded-lg shadow-lg'>
        <img
          alt='Placeholder'
          class='block h-auto w-full'
          style={{ height: '200px' }}
          src={news.urlToImage}
        />

        <header class='flex items-center justify-between leading-tight p-2 md:p-4'>
          <h1 class='text-lg'>{news.title}</h1>
        </header>

        <footer class='flex items-center justify-between leading-none p-2 md:p-4'>
          <p class='ml-2 text-sm'>{news.author}</p>
          <button
            class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'
            onClick={() => clickDetail(news)}
          >
            Detail
          </button>
          <p class='text-grey-darker text-sm'>
            {moment(news.publishedAt).format('lll')}
          </p>
        </footer>
      </article>
    </div>
  )
}

export default CardHome
