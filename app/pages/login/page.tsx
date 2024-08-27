import React from 'react'
import { LandingLayout } from './component/layout'
import LoginForm from './component/form'

type Props = {}

const LoginPage = (props: Props) => {
  return (
    <LandingLayout ><LoginForm /></LandingLayout>
  )
}

export default LoginPage