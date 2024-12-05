import React from 'react'
import parse from 'html-react-parser';

const AccordionContent = ({styles, desc}) => {
  return (
    <div className="w-full overflow-hidden pr-4 hidden group-[.accordion-active]:block">
    <p className={"pr-[1.12rem] text-left text-normal " + styles.desc}>
      {parse(desc)}
    </p>
  </div>
  )
}

export default AccordionContent