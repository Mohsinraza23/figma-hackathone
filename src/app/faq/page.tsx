<<<<<<< HEAD
'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  id: number;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: 'What types of chairs do you offer?',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?',
  },
  {
    id: 2,
    question: 'Do your chairs come with a warranty?',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?',
  },
  {
    id: 3,
    question: 'Can I try a chair before purchasing?',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?',
  },
  {
    id: 4,
    question: 'How can we get in touch with you?',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?',
  },
  {
    id: 5,
    question: 'What will be delivered? And When?',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?',
  },
  {
    id: 6,
    question: 'How do I clean and maintain my Comforty chair?',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?',
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Questions Looks Here</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 ">
        {faqData.map((faq) => (
          <div key={faq.id} className="border rounded-lg  bg-[#F0F2F3] shadow-sm">
            <button
              className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none"
              onClick={() => toggleFAQ(faq.id)}
            >
              <span className="font-medium text-gray-900">{faq.question}</span>
              {openId === faq.id ? (
                <Minus className="h-5 w-5 text-gray-500" />
              ) : (
                <Plus className="h-5 w-5 text-gray-500" />
              )}
            </button>
            {openId === faq.id && (
              <div className="px-6 pb-4 text-gray-600">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

=======
'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  id: number;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: 'What types of chairs do you offer?',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?',
  },
  {
    id: 2,
    question: 'Do your chairs come with a warranty?',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?',
  },
  {
    id: 3,
    question: 'Can I try a chair before purchasing?',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?',
  },
  {
    id: 4,
    question: 'How can we get in touch with you?',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?',
  },
  {
    id: 5,
    question: 'What will be delivered? And When?',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?',
  },
  {
    id: 6,
    question: 'How do I clean and maintain my Comforty chair?',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?',
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Questions Looks Here</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 ">
        {faqData.map((faq) => (
          <div key={faq.id} className="border rounded-lg  bg-[#F0F2F3] shadow-sm">
            <button
              className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none"
              onClick={() => toggleFAQ(faq.id)}
            >
              <span className="font-medium text-gray-900">{faq.question}</span>
              {openId === faq.id ? (
                <Minus className="h-5 w-5 text-gray-500" />
              ) : (
                <Plus className="h-5 w-5 text-gray-500" />
              )}
            </button>
            {openId === faq.id && (
              <div className="px-6 pb-4 text-gray-600">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

>>>>>>> 7c399953a115e53d1d38481072be48b58e6570dd
