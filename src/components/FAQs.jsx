import React from 'react';
import "./faq.css";

function FAQs() {
  return (
    <div className='flex flex-col sm:flex-row justify-center overflow-x-hidden items-center gap-10 px-5 mb-20 mt-20'>
      <div className="leftside text-left sm:w-[40%] w-full">
        <p className='text-[#008A96] font-bold youth'>Answers That Matter</p>
        <h1 className="sm:text-[40px] font-semibold mb-2 youth">Frequently Asked Questions</h1>
        <p className="text-gray-600 text-[#475869] ambit sm:text-[18px] text-[#2F323D]">
          Find answers to your most common questions about physiotherapy. Our FAQ section provides clear and concise information to help you learn more about physiotherapy.
        </p>
      </div>

      {/* FAQ Section */}
      <div className="rightside flex flex-col w-full sm:w-[50%]">
        <details className='bg-white p-3 mb-3 rounded-lg text-left'>
          <summary className="font-semibold cursor-pointer">Who can benefit from physiotherapy?</summary>
          <p className="mt-2 text-gray-700">
            Physiotherapy can benefit anyone experiencing pain, injury, or movement difficulties.
          </p>
        </details>
        <details className='bg-white p-3 mb-3 rounded-lg text-left'>
          <summary className="font-semibold cursor-pointer">Is Physiotherapy painful?</summary>
          <p className="mt-2 text-gray-700">
            Physiotherapy is generally not painful, but some techniques may cause temporary discomfort.
          </p>
        </details>
        <details className='bg-white p-3 mb-3 rounded-lg text-left'>
          <summary className="font-semibold cursor-pointer">Can physiotherapy help with arthritis?</summary>
          <p className="mt-2 text-gray-700">
            Yes, physiotherapy can help manage arthritis symptoms by improving joint function and reducing pain.
          </p>
        </details>
        <details className='bg-white p-3 mb-3 rounded-lg text-left'>
          <summary className="font-semibold cursor-pointer">How long does a typical physiotherapy session last?</summary>
          <p className="mt-2 text-gray-700">
            A typical session lasts around 30-60 minutes, depending on the treatment plan.
          </p>
        </details>
        <details className='bg-white p-3 mb-3 rounded-lg text-left'>
          <summary className="font-semibold cursor-pointer">Will I need to do exercises at home?</summary>
          <p className="mt-2 text-gray-700">
            Yes, home exercises are often recommended to maintain progress between sessions.
          </p>
        </details>
      </div>
    </div>
  );
}

export default FAQs;
