import React, { useState } from 'react';

const FAQ = () => {
  const [open, setOpen] = useState(null);

  const toggle = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">FAQs</h2>
      <p className="mb-6">
        Whether you've missed a delivery, want to track your parcel, or just have a few questions about your shipment, we're there to help as soon as we can. We've also put together a list of FAQs that may just provide an answer to your question. If they don't, please get in touch with our contact center.
      </p>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="border-b">
            <button
              onClick={() => toggle(index)}
              className="flex justify-between w-full text-left py-4 text-lg font-medium text-gray-700 focus:outline-none"
            >
              {faq.question}
              <span>{open === index ? '-' : '+'}</span>
            </button>
            {open === index && (
              <div className="py-2 text-gray-600">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
      <a href="#" className="text-orange-500 mt-4 inline-block">Get More Answers</a>
    </div>
  );
};

const faqData = [
  {
    question: "How does the recipient know that my parcel has been delivered to a pickup point?",
    answer: "The recipient will receive a notification via SMS or email with the details of the pickup point and instructions on how to retrieve the parcel.",
  },
  {
    question: "What should I do if my parcel is delayed or lost?",
    answer: "If your parcel is delayed or lost, please contact our support team with your tracking number and order details. We will investigate and assist you with your issue.",
  },
  {
    question: "I have a complaint about how my parcel was delivered. What can I do?",
    answer: "We apologize for any inconvenience caused. Please reach out to our customer service team with your tracking number and details of your complaint. We will work to resolve the issue as quickly as possible.",
  },
];

export default FAQ;
