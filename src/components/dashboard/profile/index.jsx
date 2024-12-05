import React, { useEffect, useState } from 'react'
import UserAvatar from '../../ui/UserAvatar'
import Button from '../../ui/Button'
import TextBox from '../../ui/TextBox';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUser, setCredentials } from '../../../features/auth/authSlice';
import { useUpdateUserMutation } from '../../../services/mainApi';
import { destroyAllModal, setInactive } from '../../../util/modal';

const Index = () => {
  const user = useSelector(selectCurrentUser);
  const userFullname = user.firstname + ' ' + user.lastname;
  const [updateUser, { isLoading }] = useUpdateUserMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    setInactive();
    destroyAllModal(true);
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = user.id;
    const userData = {...user, ...userInfo};
    try {
      const res = await updateUser({ id: id, ...userInfo })
      dispatch(setCredentials({user: userData}))
      console.log(res);

    } catch (error) {

    }
  }

  const save_btn = {
    text: 'Yadda saxla',
    loadingText: 'Yadda saxlanılır',
    type: 'submit',
    classNames: 'btn-primary h-10 font-medium w-[300px]',
    isLoading: isLoading,
    
  };

  const [userInfo, setUserInfo] = useState({ firstname: user.firstname, lastname: user.lastname });
  const handleChange = (e) => {
    setUserInfo(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const inputsData = {
    firstname: {
      label_txt: 'Ad',
      type: 'text',
      disabled: false,
      name: 'firstname',
      value: userInfo.firstname,
      onChange: (e) => handleChange(e)
    },
    lastname: {
      label_txt: 'Soyad',
      type: 'text',
      disabled: false,
      name: 'lastname',
      value: userInfo.lastname,
      onChange: (e) => handleChange(e)
    },
    email: {
      label_txt: 'E-mail',
      type: 'email',
      disabled: true,
      value: user.email

    },
    phoneNumber: {
      label_txt: 'Telefon nömrəsi',
      type: 'text',
      disabled: true,
      value: user.phoneNumber
    }
  }
  return (
    <div className='bg-white w-full rounded-lg p-7 cont-h'>
      <div className='flex items-center pb-[21px] border-b border-silver'>
        <div className='mr-4'><UserAvatar /></div>
        <div className='text-sm font-medium text-[#1C1C1C]'>
          {userFullname}
        </div>
      </div>

      <div className='pt-6'>
        <form action="" onSubmit={handleSubmit}>
          <div className='flex mb-6'>
            <div className='mr-6 basis-[340px]'>
              <TextBox data={inputsData.firstname} />
            </div>
            <div className='basis-[340px]'>
              <TextBox data={inputsData.lastname} />
            </div>
          </div>
          <div className='flex mb-6'>
            <div className='mr-6 basis-[340px]'>
              <TextBox data={inputsData.email} />
            </div>
            <div className='basis-[340px]'>
              <TextBox data={inputsData.phoneNumber} />
            </div>
          </div>
          <div>
            <Button data={save_btn} />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Index