import { assets } from '../../../assets/assets'
import InnerTexts from './InnerTexts'
import ContactBtn from './ContactBtn'
const index = () => {
  return (
    <section id='contact' className='pt-8 lg:pt-12'>
      <div className='bg-[#F9FAFB] rounded-[18px] py-8 px-5 text-center'>
        <div className='mb-8'>
          <img src={assets.whatsapp_ic} alt="Whatsapp" className='mx-auto' />
        </div>
        <InnerTexts />
        <ContactBtn />
      </div>
    </section>
  )
}
export default index