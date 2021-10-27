import React from 'react'
import Card from '@material-tailwind/react/Card'
import CardImage from '@material-tailwind/react/CardImage'
import CardBody from '@material-tailwind/react/CardBody'
import CardFooter from '@material-tailwind/react/CardFooter'
import H6 from '@material-tailwind/react/Heading6'
import Paragraph from '@material-tailwind/react/Paragraph'
import Button from '@material-tailwind/react/Button'
import { useSelector } from 'react-redux'

function DetailPage () {
  const { detail } = useSelector(state => state.newsState)

  return (
    <div class='container my-12 mx-auto px-4 md:px-12'>
      <div class='flex flex-wrap -mx-1 lg:-mx-4'>
        <article class='overflow-hidden rounded-lg shadow-lg content-center'>
          <img
            alt='Placeholder'
            className='block h-auto w-full'
            style={{ height: '300px', width: '100%' }}
            src={detail.urlToImage}
          />
          <header className='flex items-center justify-between leading-tight p-2 md:p-4'>
            <b>
              <h1 className='text-lg'>{detail.title}</h1>
            </b>
          </header>
          <body className='flex items-center justify-between leading-tight p-2 md:p-4'>
            <p className='text-lg'>{detail.description}</p>
            <br />
          </body>
          ;
          <body className='flex items-left justify-between leading-tight p-2 md:p-4'>
            <p>{detail.author}</p>
            <div className='flex items-center justify-between leading-tight p-2 md:p-4'>
              <a href={detail.url}>Baca selengkapnya disini...</a>
            </div>
            <div className='flex items-right justify-between leading-tight p-2 md:p-4'>
              <p>{detail.author}</p>
            </div>
          </body>
        </article>
      </div>
    </div>
  )
}

export default DetailPage
