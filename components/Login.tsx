import React from 'react'
import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
} from '@clerk/nextjs'
import { Button } from './ui/button';

const Login = () => {
  return (
    <div><SignedOut>
    <Button>
        <SignInButton mode='modal' forceRedirectUrl={'/'} />
    </Button>
</SignedOut>
<SignedIn>
    <UserButton />
</SignedIn></div>
  )
}

export default Login