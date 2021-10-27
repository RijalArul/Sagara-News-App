import { useSelector } from 'react-redux'

function DetailPage () {
  const { detail } = useSelector(state => state.newsState)

  console.log(detail)
  return (
    <div>
      <h3>Detail</h3>
    </div>
  )
}

export default DetailPage
