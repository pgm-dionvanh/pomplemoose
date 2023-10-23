import React, { useState, useEffect } from 'react';
import { Accordion } from 'flowbite-react';

import { faqData, faqDataType } from '../../constants';

export default function FaqItem() {
    const [faqList, setFaqList] = useState(faqData);

    const faqItems = faqList.map((faq: faqDataType, index) => 
    <Accordion.Panel key={faq.title}>
            <Accordion.Title>
                { faq.title }
            </Accordion.Title>
            <Accordion.Content>
                <ul>
                    <li key={faq.title}>
                        { faq.content }
                    </li>
                    { faq.content2 ? (
                    <>
                        <br></br>
                        <li>
                            {faq.content2}
                        </li>
                    </>
                    ) : null }
                    { faq.content3 ? (
                    <>
                        <br></br>
                        <li>
                            {faq.content3}
                        </li>
                    </>
                    ) : null }
                </ul>
            </Accordion.Content>
    </Accordion.Panel>
    );

    return (
    <div className="flex m-auto justify-center mt-8 mb-8 min-w-[70%] max-w-[70%] w-full">
        <Accordion>
            { faqItems }
        </Accordion>
    </div>
    )
}
