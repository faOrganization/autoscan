import React from 'react'
import NavItem from './NavItem'

const NavItems = () => {
  const links = [
    {
      text: 'Ana səhifə',
      link: '#home'
    },
    {
      text: 'Xüsusiyyətlər',
      link: '#features'
    },
    {
      text: 'Necə istifadə etməli?',
      link: '#how-to-use'
    },
    {
      text: 'FAQ',
      link: '#faq'
    },
    {
      text: 'Əlaqə',
      link: '#contact'
    }
  ]
  return (
    <>
      {
        links?.map((data, index) => (
          <NavItem data={data} key={index} />
        ))
      }
    </>
  )
}
export default NavItems