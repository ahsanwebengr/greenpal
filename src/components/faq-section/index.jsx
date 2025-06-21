import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqData = [
  {
    id: 'item-1',
    question:
      'How many years have you been in landscaping business, and what inspired you to get started?',
    answer:
      'I have been in the business since 2006 when my passion for working outdoors got me in a set of a mower - and since then things took off and I never looked back!!',
  },
  {
    id: 'item-2',
    question:
      'How does your work stand out from other lawn service companies in the area?',
    answer:
      'We prioritize customer communication, use top-of-the-line equipment, and our team is trained in the latest horticultural techniques to ensure a healthy, beautiful lawn every time.',
  },
  {
    id: 'item-3',
    question:
      'What advice do you have for a customer looking to hire a provider like you?',
    answer:
      'Always check for reviews, ask for proof of insurance, and ensure they provide a clear, itemized quote. Good communication from the start is a sign of a reliable provider.',
  },
  {
    id: 'item-4',
    question: 'What do you like most about the lawn care industry?',
    answer:
      'The satisfaction of transforming an outdoor space and seeing the joy it brings to a homeowner. Every lawn is a new canvas, and we love the challenge.',
  },
  {
    id: 'item-5',
    question: 'What areas do you mainly service?',
    answer:
      'Our primary service areas include White House, Hendersonville, and the greater Robertson and Sumner counties. Contact us to see if we service your specific neighborhood.',
  },
];

const FaqSection = () => {
  return (
    <div className='w-full my-6 p-2 md:p-6 font-sans'>
      <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center sm:text-start'>
        FAQs About Lawn Care at the White House
      </h2>

      <Accordion
        type='single'
        collapsible
        defaultValue='item-1'
        className='w-full space-y-4'
      >
        {faqData.map(item => (
          <AccordionItem
            key={item.id}
            value={item.id}
            className='
              bg-white 
              border border-gray-200 
              shadow-sm rounded-2xl 
              overflow-hidden
              border-b-0
            '
          >
            <AccordionTrigger
              className='
                p-6 text-left w-full
                sm:text-lg
                font-bold text-gray-800 
                hover:no-underline
                data-[state=closed]:font-normal
              '
            >
              {item.question}
            </AccordionTrigger>
            <AccordionContent className='px-6 pb-6 pt-0 text-base text-gray-600 leading-relaxed'>
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
export default FaqSection;
