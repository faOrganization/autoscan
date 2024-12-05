import AccordionContent from './AccordionContent';
import AccordionBtn from './AccordionBtn';

const Index = ({ data, version }) => {
  let styles;
  switch (version) {
    case '1':
      styles = {
        v: '1',
        btn: 'text-[#101828] text-lg font-semibold justify-between',
        desc: 'text-slate text-base',
        icon_size: 'size-5'
      }
      break;
    case '2':
      styles = {
        v: '2',
        btn: 'text-[#1C1C1C] text-base font-medium',
        desc: 'text-black text-sm',
        icon_size: 'size-3.5'

      }
      break;
    default:
      break;
  }

  return (
    <>
      {
        data?.map((data, index) => (
          <div key={index} className="accordion group select-none overflow-hidden">
            <AccordionBtn styles={styles} title={data.title} />
            <AccordionContent styles={styles} desc={data.desc} />
          </div>
        ))
      }
    </>
  )
}

export default Index