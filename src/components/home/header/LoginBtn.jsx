import React from 'react'
import Button from '../../ui/Button';
import { createModal } from '../../../util/modal';

const LoginBtn = () => {
  const login_btn = {
    text: 'Daxil ol',
    classNames: 'h-11 px-[19px] group-[.active-menu]:px-11 btn-primary',
    clickHandler: () => createModal('Login')
  };

  return (
    <div>
      <Button data={login_btn} />
    </div>
  )
}
export default LoginBtn