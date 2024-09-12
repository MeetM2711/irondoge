import React from 'react'

function Heading({sectionHeading,sectionImage ,style}) {
  return (
    <div className="heading-box">
    <h2 className="heading text-3xl lg:text-4xl !leading-normal text-center" style={style}>{sectionHeading}</h2>
    <img src={sectionImage} className="mx-auto max-w-40 md:max-w-60 mt-2 md:mt-4" alt="" />
</div>
  )
}

export default Heading