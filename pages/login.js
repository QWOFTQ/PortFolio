import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import Layout from '../components/layout'
import { signIn, useSession } from 'next-auth/react'
import { toast } from 'react-toastify'
import { getError } from '../utils/error'
import { useRouter } from 'next/router'

export default function LoginScreen() {
  const { data: session } = useSession()
  const router = useRouter()
  const { redirect } = router.query

  useEffect(() => {
    if (session?.user) {
      router.push(redirect || '/')
    }
  }, [router, session, redirect])

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm()

  const submitHandler = async ({ email, password }) => {
    try {
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
      })
      if (result.error) {
        toast.error(result.error)
      }
    } catch (err) {
      toast.error(getError(err))
    }
  }

  const githubLoginHandler = async () => {
    try {
      const result = await signIn('github', { redirect: false })
      console.log('Github login: ' + result)
    } catch (err) {
      toast.error(getError(err))
    }
  }
  const googleLoginHandler = async () => {
    try {
      const result = await signIn('google', { redirect: false })
      console.log('Google login: ' + result)
    } catch (err) {
      toast.error(getError(err))
    }
  }
  const kakaoLoginHandler = async () => {
    try {
      const result = await signIn('kakao', { redirect: false })
      console.log('Kakao login: ' + result)
    } catch (err) {
      toast.error(getError(err))
    }
  }
  const naverLoginHandler = async () => {
    try {
      const result = await signIn('naver', { redirect: false })
      console.log('Naver login: ' + result)
    } catch (err) {
      toast.error(getError(err))
    }
  }

  return (
    <Layout title="Login">
      <form
        className="mx-auto max-w-screen-md"
        onSubmit={handleSubmit(submitHandler)}
      >

        <div className="mb-4 p-4 m-2">
          <label htmlFor="email" className="mt-2">
            Email
          </label>
          <input
            type="email"
            {...register('email', {
              required: 'Please enter email',
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                message: 'Please enter valid email',
              },
            })}
            className="w-full"
            id="email"
            autoFocus
          ></input>
          {errors.email && (
            <div className="text-red-500">{errors.email.message}</div>
          )}
        </div>

        <div className="mb-4 p-4 m-2">
          <label htmlFor="password" className="mt-2">
            Password
          </label>
          <input
            type="password"
            {...register('password', {
              required: 'Please enter password',
              minLength: {
                value: 3,
                message: '사용가능한 비밀번호를 입력하세요.',
              },
            })}
            className="w-full"
            id="email"
            autoFocus
          ></input>
          {errors.password && (
            <div className="text-red-500">{errors.password.message}</div>
          )}
        </div>

        <div className="mb-4">
          <button className="primary-button mt-2" type="submit">
            Login
          </button>
        </div>
        <div className="p-4 rounded-lg ">
          <div className="mb-4 flex flex-col items-center justify-center  px-3">
            <button
              className="primary-button w-300 "
              onClick={githubLoginHandler}
            >
              Github Login
            </button>
          </div>

          <div className="mb-4 flex flex-col items-center justify-cente px-3">
            <button
              className="primary-button w-300"
              onClick={googleLoginHandler}
            >
              Google Login
            </button>
          </div>

          <div className="mb-4 flex flex-col items-center justify-center  px-3">
            <button
              className="primary-button w-300"
              onClick={kakaoLoginHandler}
            >
              Kakao Login
            </button>
          </div>

          <div className="mb-4 flex flex-col items-center justify-center  px-3">
            <button
              className="primary-button w-300"
              onClick={naverLoginHandler}
            >
              Naver Login
            </button>
          </div>
        </div>
      </form>
    </Layout>
  )
}
