import React from "react";

const SectionHeader = ({ header_props }) => {
    const { title, desc, mb = 'mb-4 lg:mb-5', font_size = 'text-2xl md:text-3xl lg:text-4xl'} = header_props;
    
    return (
        <div className="text-center">
            <h1 className={"text-[#101828] font-semibold " + font_size + ' ' + mb}>{title}</h1>
            <p className="text-xl font-normal text-slate">
                {desc.split("<br/>").map((item, index) => (
                    <span key={index}>
                        {item}
                        <br />
                    </span>
                ))}
            </p>
        </div>
    );
};

export default SectionHeader;
