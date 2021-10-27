import React from 'react'
import * as moment from 'moment'

function CardHome ({ news }) {
  console.log(news)
  return (
    <div class='my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3'>
      <article class='overflow-hidden rounded-lg shadow-lg'>
        <a href='#'>
          <img
            alt='Placeholder'
            class='block h-auto w-full'
            style={{ height: '200px' }}
            src={news.urlToImage}
          />
        </a>

        <header class='flex items-center justify-between leading-tight p-2 md:p-4'>
          <h1 class='text-lg'>
            <a class='no-underline hover:underline text-black' href='#'>
              {news.title}
            </a>
          </h1>
        </header>

        <footer class='flex items-center justify-between leading-none p-2 md:p-4'>
          <a
            class='flex items-center no-underline hover:underline text-black'
            href='#'
          >
            <p class='ml-2 text-sm'>{news.author}</p>
          </a>
          <p class='text-grey-darker text-sm'>
            {moment(news.publishedAt).format('lll')}
          </p>
        </footer>
      </article>
    </div>
  )
}

export default CardHome
