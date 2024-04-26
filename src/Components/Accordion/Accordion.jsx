import React, { useState } from 'react';
import accordionData from '../../constants/accordionData';

const Accordion = () => {
    const [selected, setSelected] = useState(null);

    const toggleAccordion = (index) => {
        setSelected(selected === index ? null : index);
    };

    return (
        <div className='flex flex-col justify-center items-center h-screen'>
                {accordionData.length > 0 ? (
                    accordionData.map((item, index) => (
                        <div key={index} className='m-4'>
                            <h3 onClick={() => toggleAccordion(index)}>{item.title}</h3>
                            {selected === index && <p>{item.answer}</p>}
                        </div>
                    ))
                ) : (
                    <p>No accordion items available</p>
                )}
        </div>
    );
};

export default Accordion;
