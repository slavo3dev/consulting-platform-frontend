import {FC} from 'react';
import React, { useState } from 'react'


export const Form:FC = ()=>{


    return(
        <form className="w-full max-w-sm rounded bg-cyan-300 p-12">
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              Full Name
            </label>
          </div>
          <div className="md:w-2/3">
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"  type="text"></input>
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              Email
            </label>
            </div>
    <div className="md:w-2/3">
      <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text"></input>
    </div>
  </div>
  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">Select Field</label>
  </div>
    <div className="md:w-2/3">
       <select className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"  placeholder='<Select Topic>' id="topic">
             <option value="frontend">FrontEnd</option>
             <option value="backend">BackEnd</option>
             <option value="design">Design</option>
             <option value="audi">Security</option>
       </select>
       </div>
  </div>

  <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              Question
            </label>
            </div>
    <div className="md:w-2/3">
      <textarea className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" placeholder="Write your question here..."></textarea>
    </div>
  </div>


  <div className="md:flex md:items-center">
    <div className="md:w-1/3"></div>
    <div className="md:w-2/3">
      <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
        Send
      </button>
    </div>
  </div>
</form>
    )
}


export const UserInput:FC = ()=>{
  const [state, setState] = useState('')

  return (
    <div>
      <label htmlFor={'my-input'}></label>
      <input
        id={'my-input'}
        type={'text'}
        value={state}
        placeholder={'Type here'}
        onChange={event => {
          setState(event.target.value)
        }}
      />
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"> Send </button>
      <br />
      <br />
      You entered: {state}
    </div>
  )
}

