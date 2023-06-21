'use client'
import { cn } from '@/lib/utils'
import { FC } from 'react'
import { signIn } from 'next-auth/react'
import { Button } from './ui/button'
import { useState } from 'react'
import { Icons } from './Icons'
import { useToast } from '@/hooks/use-toast'

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const UserAuthForm: FC<UserAuthFormProps> = ({ className, ...props }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { toast } = useToast()

  const loginWithGoogle = async () => {
    setIsLoading(true)
    try {
      await signIn('google')
    } catch {
      toast({
        title: 'Ups, something went wrong',
        description: 'There was an error loggin with Google',
        variant: 'destructive',
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div
      className={cn('flex flex-col gap-2 justify-center', className)}
      {...props}
    >
      <Button
        onClick={loginWithGoogle}
        isLoading={isLoading}
        size='sm'
        className='w-full rounded-full'
      >
        <Icons.google className='w-6 h-6 mr-2' />
        Google
      </Button>
    </div>
  )
}

export default UserAuthForm
