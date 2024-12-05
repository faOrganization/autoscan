import Login from '../components/modals/Login';
import OtpCode from '../components/modals/OtpCode';
import Register from '../components/modals/Register';
import NewPassword from '../components/modals/NewPassword';
import ResetPwdEmail from '../components/modals/ResetPwdEmail';
import ContactPopup from '../components/dashboard/contact/ContactPopup'
import Logout from '../components/dashboard/LogoutModal'
import SentAlert from '../components/dashboard/report-detail/SentAlert';
import AvatarDropdown from '../components/dashboard/header/AvatarDropdown';

 const modalsData = [{
        name: 'Login',
        element: Login
    },
    {
        name: 'Register',
        element: Register
    },
    {
        name: 'NewPassword',
        element: NewPassword
    },
    {
        name: 'ResetPwdEmail',
        element: ResetPwdEmail
    },
    {
        name: 'OtpCode',
        element: OtpCode
    },
    {
        name: 'Contact',
        element: ContactPopup
    },
    {
        name: 'Logout',
        element: Logout
    },
    {
        name: 'SentAlert',
        element: SentAlert
    },
    {
        name: 'AvatarDropdown',
        element: AvatarDropdown
    },    
];

export default modalsData;