import Link from 'next/link'
import Logo from './Icons'
import { buttonVariants } from './ui/button'
import { getAuthSession } from '@/lib/auth'
import { UserAccountNav } from './UserAccountNav'

export default async function Navbar() {
  const session = await getAuthSession()

  return (
    <div className='fixed top-0 inset-x-0 h-fit bg-zinc-100 border-b border-zinc-300 z-[10] py-2'>
      <div className='container max-w-7xl h-full mx-auto flex items-center justify-between gap-2'>
        <Link href={'/'} className='flex gap-2 items-center'>
          <Logo className='w-6 h-6 sm:w-8 sm:h-8' />
          <span className='hidden text-zinc-700 text-sm font-medium md:block'>
            RoboReddit
          </span>
        </Link>
        {session ? (
          <UserAccountNav user={session.user} />
        ) : (
          <Link href={'/sign-in'} className={buttonVariants()}>
            Sign In
          </Link>
        )}
      </div>
    </div>
  )
}
