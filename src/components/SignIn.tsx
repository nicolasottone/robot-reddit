import { FC } from 'react'
import Logo from './Icons'
import Link from 'next/link'
import UserAuthForm from './UserAuthForm'

const SignIn: FC = ({}) => {
  return (
    <div className='container max-w-sm flex flex-col justify-center space-y-2'>
      <div className='flex flex-col space-y-2 text-left gap-2'>
        <Logo className='w-6 h-6 sm:w-8 sm:h-8 self-center' />
        <h1 className='text-2xl font-semibold tracking-wide'>Log In</h1>
        <p className='text-sm mx-auto'>
          By continuing, you are setting up a Reddit account and agree to our
          User Agreement and Privacy Policy.
        </p>
        <UserAuthForm />
        <p className='text-sm text-zinc-700'>
          New to RoboReddit?{' '}
          <Link
            href={'/sign-up'}
            className='hover:text-zinc-800 underline underline-offset-4'
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  )
}

export default SignIn
