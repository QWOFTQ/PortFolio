import React, { useEffect } from 'react'
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
          <button className="primary-button w-300" onClick={googleLoginHandler}>
            Google Login
          </button>
        </div>

        <div className="mb-4 flex flex-col items-center justify-center  px-3">
          <button className="primary-button w-300" onClick={kakaoLoginHandler}>
            Kakao Login
          </button>
        </div>

        <div className="mb-4 flex flex-col items-center justify-center  px-3">
          <button className="primary-button w-300" onClick={naverLoginHandler}>
            Naver Login
          </button>
        </div>
      </div>
    </Layout>
  )
}
