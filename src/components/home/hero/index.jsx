import SectionHeader from '../SectionHeader';
import CheckNowBtn from './CheckNowBtn';
import HeroImage from './HeroImage';
import Subscribe from './Subscribe';

const Hero = () => {
  const h_props = {
    title: 'Sürətli Analiz, Sürətli Təmir!',
    desc: 'Avtonəqliyyat sektorunda inqilab! 3 saatlıq diaqnostikanı 1 dəqiqəyə endirdik. <br/> Necə?',
    font_size: 'text-[28px] md:text-4xl lg:text-6xl',
    mb: 'mb-4 md:mb-5 lg:mb-7'
  }
  return (
    <section id='home' className='pt-8 lg:pt-12'>
      <div className="flex flex-col items-center">
        <SectionHeader header_props={h_props} />
        <CheckNowBtn />
        <HeroImage />
      </div>
    </section>
  )
}

export default Hero