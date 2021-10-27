const fs = require('fs')
const bodyParser = require('body-parser')
const jsonServer = require('json-server')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const app = jsonServer.create()

const PORT = 3001

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(jsonServer.defaults())

const SECRET_KEY = process.env.JWT_SECRET_KEY

function signToken (payload) {
  return jwt.sign(payload, 'sdjgydgdwjbwjbj.asjdsy8gdyjsauih')
}

const salt = bcrypt.genSaltSync(10)

function hashPassword (plainPassword) {
  return bcrypt.hashSync(plainPassword, salt)
}

function checkPassword (plainPassword, hashPassword) {
  return bcrypt.compareSync(plainPassword, hashPassword)
}

app.post('/register', (req, res) => {
  const body = req.body

  console.log(body)
  fs.readFile('./users.json', (err, data) => {
    if (body.email === '' || body.password === '') {
      const status = 400
      const message = 'Failed_Register'
      res.status(status).json({ status, message })
    }
    data = JSON.parse(data.toString())

    let addUserId = data.users[data.users.length - 1].id

    data.users.push({ id: addUserId + 1, body })
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

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`)
})
