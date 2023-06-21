import { User } from '@prisma/client'
import { FC } from 'react'
import { Avatar, AvatarFallback } from './ui/avatar'
import Image from 'next/image'
import Logo from './Icons'
import { AvatarProps } from '@radix-ui/react-avatar'

interface UserAvatarProps extends AvatarProps {
  user: Pick<User, 'name' | 'image'>
}

const UserAvatar: FC<UserAvatarProps> = ({ user, ...props }) => {
  return (
    <Avatar {...props}>
      {user.image ? (
        <div className='relative aspect-square w-full h-full'>
          <Image
            fill
            src={user.image}
            alt='profile picture'
            referrerPolicy='no-referrer'
          />
        </div>
      ) : (
        <AvatarFallback>
          <span className='sr-only'>{user?.name}</span>
          <Logo className='w-4 h-4' />
        </AvatarFallback>
      )}
    </Avatar>
  )
}

export default UserAvatar
