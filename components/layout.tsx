import React from 'react'

const Layout = (props: any) => {
  return (
    <div className='h-screen flex'>
        <div className='max-w-sm m m-auto'>{props.children}</div>
    </div>
  )
}

export default Layout