'use client';

import { cn } from '@/lib/utils';
import { Button } from './ui/Button';
import { FC, useState } from 'react';
import { signIn } from 'next-auth/react';
import { Icons } from './Icons';
import { useToast } from '@/hooks/use-toast';

interface UserAuthFormProps
  extends React.HTMLAttributes<HTMLDivElement> {}

const UserAuthForm: FC<UserAuthFormProps> = ({
  className,
  ...props
}) => {
  const [isLoading, setIsLoading] =
    useState<boolean>(false);
  const { toast } = useToast();

  const loginWithGoogle = async () => {
    setIsLoading(true);
    try {
      throw new Error();
    } catch (e) {
      // toast notification
      toast({
        title: 'There was a problem.',
        description:
          'There was an error logging in with google',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div
      className={cn('flex justify-center', className)}
      {...props}
    >
      <Button
        onClick={loginWithGoogle}
        size='sm'
        isLoading={isLoading}
        className='w-full'
      >
        {isLoading ? null : (
          <Icons.google className='h-4 w-4 mr-2' />
        )}
        Google
      </Button>
    </div>
  );
};

export default UserAuthForm;
