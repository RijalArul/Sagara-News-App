const fs = require('fs')
const bodyParser = require('body-parser')
const jsonServer = require('json-server')
const jwt = require('jsonwebtoken')

const app = jsonServer.create()

const PORT = 3001
const userdb = JSON.parse(fs.readFileSync('./users.json', 'utf-8'))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(jsonServer.defaults())

function signToken (payload) {
  return jwt.sign(payload, 'sdjgydgdwjbwjbj.asjdsy8gdyjsauih')
}

function isLoginAuthenticated ({ email, password }) {
  const { users } = userdb

  let filterUser
  let result
  for (let i = 0; i < users.length; i++) {
    filterUser = users[i].user.filter(
      user => user.email === email && user.password === password
    )

    if (filterUser.length > 0) {
      result = filterUser
    }
  }
  return result
}

app.post('/register', (req, res) => {
  const body = req.body
  fs.readFile('./users.json', (err, data) => {
    data = JSON.parse(data.toString())
    let addUserId = data.users[data.users.length - 1].id
    let userArr = []
    data.users.push({
      id: addUserId + 1,
      user: [body]
    })
    fs.writeFile('./users.json', JSON.stringify(data), (err, result) => {
      if (req.body.email === '' || req.body.password === '') {
        const status = 400
        const message = 'Failed_Register'
        res.status(status).json({ status, message })
      }
    })
  })

  if (req.body.email === '' || req.body.password === '') {
    const status = 400
    const message = 'Failed_Register'
    res.status(status).json({ status, message })
  } else {
    const access_token = signToken({ email: body.email })
    res.status(201).json({ access_token })
  }
})

app.post('/login', (req, res) => {
  const { email, password } = req.body
  if (!isLoginAuthenticated({ email, password })) {
    const status = 401
    const message = 'Incorrect Email or Password'
    res.status(status).json({ status, message })
  } else {
    const access_token = signToken({ email, password })
    res.status(200).json({ access_token })
  }
})

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`)
})
