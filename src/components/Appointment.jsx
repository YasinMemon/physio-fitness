import axios from 'axios'
import React, { useState } from 'react'

function Appointment() {
    
    const [name, setName] = useState('');
    const [num, setNum] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [desc, setDesc] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Basic validation
        if (!name || !num || !email || !age || !desc) {
            setError('Please fill out all fields');
            return;
        }

        setLoading(true);
        setError('');
        setSuccess('');

        try {
            const response = await axios.post('https://physiofitnessrajkot.com/api/store-appointment', {
                name,
                email,
                phone: num,
                age,
                message: desc
            });
            console.log(response);
            setSuccess('Appointment booked successfully!');
            setName('');
            setNum('');
            setEmail('');
            setAge('');
            setDesc('');
        } catch (err) {
            console.error(err);
            setError('Failed to book appointment. Please try again later.');
        } finally {
            setLoading(false);
        }
    }
  return (
    <div className='bg-[#0F7078] text-center p-5 sm:p-14'>
      <p className='font-bold text-2xl text-white'>Book Your Appointment Now</p>
      <p className='font-bold text-2xl text-white'>Fill Out the form below</p>
      <form 
      className='mt-10'
      onSubmit={handleSubmit} 
      method='post'>
        <input
        onChange={(e) => setName(e.target.value)}
        value={name}
        className='bg-[#0F7078] ring-1 ring-white rounded-full my-6 px-2 py-1 sm:mx-3 w-60'
        placeholder='Full Name*'
        type="text" />

        <input
        onChange={(e) => setNum(e.target.value)}
        value={num}
        className='bg-[#0F7078] ring-1 ring-white rounded-full px-2 py-1 sm:mx-3 w-60' 
        placeholder='Phone Number*'
        type="text" />
        <br />
        <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        className='bg-[#0F7078] ring-1 ring-white rounded-full px-2 my-6 py-1 sm:mx-3 w-60 mt-6'
        placeholder='Email Address*'
        type="text" />

        <input
        onChange={(e) => setAge(e.target.value)}
        value={age}
        className='bg-[#0F7078] ring-1 ring-white rounded-full px-2 py-1 sm:mx-3 w-60' 
        placeholder='Age*'
        type="text" />

         <br />

        <textarea 
        onChange={(e) => setDesc(e.target.value)}
        value={desc}
        name="desc" 
        rows={5}
        className='bg-[#0F7078] ring-1 ring-white mt-6 w-60 sm:w-[31rem] px-2 rounded-lg'
        placeholder='What You Want To Know ???*'
        >
        </textarea>
        <br />
        <input 
        className='bg-white px-4 sm:w-[31rem] w-60 rounded-full py-1 mt-3 cursor-pointer'
        value="Book Your Appointment"
        type="submit" />
      </form>
    </div>
  )
}

export default Appointment
