import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actionLogin, setErrorLogin } from '../Store/actions/userAction'
import { toast } from 'react-toastify'
import { useHistory } from 'react-router'

function RegisterPage () {
  const [userRegister, setUserRegister] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    province: ''
  })

  const [provinceRegister, setProvinceRegister] = useState([
    {
      id: 1,
      province: 'DKI Jakarta',
      city: [
        {
          name: 'Jakarta Timur'
        },
        {
          name: 'Jakarta Pusat'
        },
        {
          name: 'Jakarta Utara'
        }
      ]
    },
    {
      id: 2,
      province: 'Jawa Barat',
      city: [
        {
          name: 'Bogor'
        },
        {
          name: 'Bandung'
        }
      ]
    }
  ])

  const [selectedProvince, setSelectedProvince] = useState('')
  function handleChangeInput (e) {
    setUserRegister({
      ...userRegister,
      [e.target.name]: e.target.value
    })
  }
  function handleSubmitRegister (e) {
    e.preventDefault()
  }

  const requestRegion = event => {
    setSelectedProvince(event.target.value)
  }

  return (
    <div class='min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='mt-10 sm:mt-0'>
        <div className='md:grid md:grid-cols-3 md:gap-6'>
          <div className='md:col-span-1'>
            <div className='px-4 sm:px-0'>
              <h3 className='text-lg font-medium leading-6 text-gray-900'>
                Register
              </h3>
              <p className='mt-1 text-sm text-gray-600'>Register it</p>
            </div>
          </div>
          <div className='mt-5 md:mt-0 md:col-span-2'>
            <form action='#' onSubmit={handleSubmitRegister}>
              <div className='shadow overflow-hidden sm:rounded-md'>
                <div className='px-4 py-5 bg-white sm:p-6'>
                  <div className='grid grid-cols-6 gap-6'>
                    <div className='col-span-6 sm:col-span-3'>
                      <label
                        htmlFor='firstName'
                        className='block text-sm font-medium text-gray-700'
                      >
                        First name
                      </label>
                      <input
                        type='text'
                        name='firstName'
                        id='firstName'
                        autoComplete='given-name'
                        className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                        onChange={e => handleChangeInput(e)}
                      />
                    </div>
                    <div className='col-span-6 sm:col-span-3'>
                      <label
                        htmlFor='lastName'
                        className='block text-sm font-medium text-gray-700'
                      >
                        Last name
                      </label>
                      <input
                        type='text'
                        name='lastName'
                        id='lastName'
                        autoComplete='family-name'
                        className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                        onChange={e => handleChangeInput(e)}
                      />
                    </div>
                    <div className='col-span-6 sm:col-span-4'>
                      <label
                        htmlFor='email-address'
                        className='block text-sm font-medium text-gray-700'
                      >
                        Email address
                      </label>
                      <input
                        type='email'
                        name='email-address'
                        id='email-address'
                        autoComplete='email'
                        className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                        onChange={e => handleChangeInput(e)}
                      />
                    </div>
                    <div className='col-span-6 sm:col-span-4'>
                      <label
                        htmlFor='password'
                        className='block text-sm font-medium text-gray-700'
                      >
                        Password
                      </label>
                      <input
                        type='password'
                        name='password'
                        id='password'
                        className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                        onChange={e => handleChangeInput(e)}
                      />
                    </div>
                    {
                      <>
                        <div className='col-span-6 sm:col-span-3'>
                          <label
                            htmlFor='province'
                            className='block text-sm font-medium text-gray-700'
                          >
                            Province
                          </label>
                          <select
                            id='province'
                            name='province'
                            autoComplete='province'
                            className='mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                            onChange={e => requestRegion(e)}
                          >
                            <option selected>-- Please Select --</option>
                            {provinceRegister.map(province => {
                              return (
                                <option value={province.province}>
                                  {province.province}
                                </option>
                              )
                            })}
                          </select>
                        </div>
                        <div className='col-span-6 sm:col-span-3'>
                          <select
                            id='city'
                            name='city'
                            autoComplete='city'
                            className='mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                            onChange={e => handleChangeInput(e)}
                          >
                            {provinceRegister.map(province => {
                              if (province.province === selectedProvince) {
                                return province.city.map(cty => {
                                  return (
                                    <>
                                      <option value={cty.name}>
                                        {cty.name}
                                      </option>
                                    </>
                                  )
                                })
                                // })
                              }
                            })}
                          </select>
                        </div>
                      </>
                    }
                    <div className='col-span-6 sm:col-span-3'>
                      <label
                        htmlFor='gender'
                        className='block text-sm font-medium text-gray-700'
                      >
                        Gender
                      </label>
                      <select
                        id='gender'
                        name='gender'
                        autoComplete='gender'
                        className='mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                        onChange={e => handleChangeInput(e)}
                      >
                        <option value='laki'>Laki</option>
                        <option>Perempuan</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className='px-4 py-3 bg-gray-50 text-right sm:px-6'>
                  <button
                    type='submit'
                    className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage
