import React from 'react'

type Props = {
    children : JSX.Element
}

const ProviderContent = ({children}:Props) => {
  return (
    <div>{children}</div>
  )
}

export default ProviderContent