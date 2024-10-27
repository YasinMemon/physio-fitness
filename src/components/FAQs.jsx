import React from 'react'

function FAQs() {
  return (
    <div className='flex flex-col sm:flex-row justify-center items-center gap-10 px-5 mb-10'>
      <div className="leftside text-left sm:w-[40%] w-full">
        <p className='text-[#008A96] font-bold'>Answers That Matter</p>
        <h2 className="text-2xl font-semibold mb-2">Frequently Asked Questions</h2>
        <p className="text-gray-600">
          Find answers to your most common questions about physiotherapy. Our FAQ section provides clear and concise information to help you learn more about physiotherapy.
        </p>
      </div>
      <div className="rightside text-left sm:w-[50%] w-full">
        <details className='bg-white border border-gray-300 p-3 mb-3 rounded-lg'>
            <summary className="font-semibold cursor-pointer">Who can benefit from physiotherapy?</summary>
            <p className="mt-2 text-gray-700">
              Physiotherapy can benefit anyone experiencing pain, injury, or movement difficulties.
            </p>
        </details>
        <details className='bg-white border border-gray-300 p-3 mb-3 rounded-lg'>
            <summary className="font-semibold cursor-pointer">Is Physiotherapy painful?</summary>
            <p className="mt-2 text-gray-700">
              Physiotherapy is generally not painful, but some techniques may cause temporary discomfort.
            </p>
        </details>
        <details className='bg-white border border-gray-300 p-3 mb-3 rounded-lg'>
            <summary className="font-semibold cursor-pointer">Can physiotherapy help with arthritis?</summary>
            <p className="mt-2 text-gray-700">
              Yes, physiotherapy can help manage arthritis symptoms by improving joint function and reducing pain.
            </p>
        </details>
        <details className='bg-white border border-gray-300 p-3 mb-3 rounded-lg'>
            <summary className="font-semibold cursor-pointer">How long does a typical physiotherapy session last?</summary>
            <p className="mt-2 text-gray-700">
              A typical session lasts around 30-60 minutes, depending on the treatment plan.
            </p>
        </details>
        <details className='bg-white border border-gray-300 p-3 mb-3 rounded-lg'>
            <summary className="font-semibold cursor-pointer">Will I need to do exercises at home?</summary>
            <p className="mt-2 text-gray-700">
              Yes, home exercises are often recommended to maintain progress between sessions.
            </p>
        </details>
      </div>
    </div>
  )
}

export default FAQs