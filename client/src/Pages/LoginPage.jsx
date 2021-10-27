import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actionLogin, setErrorLogin } from '../Store/actions/userAction'
import { toast } from 'react-toastify'
import { useHistory } from 'react-router'

function LoginPage () {
  const [userLogin, setUserLogin] = useState({
    email: '',
    password: ''
  })

  const { error, access_token } = useSelector(state => state.usersState)

  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    if (access_token) {
      toast.success('Login sucess')
      setTimeout(() => {
        history.push('/')
      }, 2000)

      if (error) {
        toast.error('Error Logining you in')
        dispatch(setErrorLogin(''))
      }
    }
  }, [dispatch, error])

  function handleChangeInput (e) {
    setUserLogin({
      ...userLogin,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmitLogin (e) {
    e.preventDefault()
    dispatch(actionLogin(userLogin))
  }

  function clickRegister () {
    history.push('/register')
  }
  return (
    <div class='min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
      <div class='max-w-md w-full space-y-8'>
        <div>
          <img
            class='mx-auto h-12 w-auto'
            src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
            alt='Workflow'
          />
          <h2 class='mt-6 text-center text-3xl font-extrabold text-gray-900'>
            Sign in to your account
          </h2>
        </div>
        <form class='mt-8 space-y-6' onSubmit={handleSubmitLogin}>
          <input type='hidden' name='remember' value='true' />
          <div class='rounded-md shadow-sm -space-y-px'>
            <div>
              <label for='email-address' class='sr-only'>
                Email address
              </label>
              <input
                id='email-address'
                name='email'
                type='email'
                autocomplete='email'
                required
                class='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                placeholder='Email address'
                onChange={e => handleChangeInput(e)}
              />
            </div>
            <div>
              <label for='password' class='sr-only'>
                Password
              </label>
              <input
                id='password'
                name='password'
                type='password'
                autocomplete='current-password'
                required
                class='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                placeholder='Password'
                onChange={e => handleChangeInput(e)}
              />
            </div>
          </div>

          <div class='flex items-center justify-between'>
            <div class='flex items-center'>
              <a
                onClick={() => clickRegister()}
                class='font-medium text-indigo-600 hover:text-indigo-500'
              >
                No account?
              </a>
            </div>

            <div class='text-sm'></div>
          </div>

          <div>
            <button
              type='submit'
              class='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
            >
              <span class='absolute left-0 inset-y-0 flex items-center pl-3'>
                <svg
                  class='h-5 w-5 text-indigo-500 group-hover:text-indigo-400'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  aria-hidden='true'
                >
                  <path
                    fill-rule='evenodd'
                    d='M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z'
                    clip-rule='evenodd'
                  />
                </svg>
              </span>
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
