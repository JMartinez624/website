import React from "react";

export default function Kiewit() {
    return (
        <div className='flex p-10'>
          <img className='rounded-3xl w-125 shadow-2xl' src="/Kiewit.png"/>
          <div className='pl-12'>
            <h1 className='text-xl'>August 2024 - May 2025</h1>
            <h1 className='text-5xl font-bold'>Product Manager / Squad Lead (Capstone)</h1>
            <ul className='list-disc list-inside p-8 flex justify-around marker:text-blue-600'>
              <div>
                <li className='text-2xl pb-4 font-bold'> React </li>
                <li className='text-2xl pb-4 font-bold'> Vite </li>
                <li className='text-2xl font-bold'> Plotly.js </li>
              </div>

              <div>
                <li className='text-2xl pb-4 font-bold'> Azure Devops </li>
                <li className='text-2xl pb-4 font-bold'> Javascript + Typescript </li>
              </div>
            </ul>
            <div className='text-xl'>
              For my senior year capstone, I lead a team of 6 in an agile environment to gather requirements and deliver
              a product for Kiewit. I conducted client interviews to identify all their needs and to prioritize features that align with
              their need given the limited amount of time my team had to work with. I aided in the development of the project as well 
              by conducting peer code reviews and to help design and create the frontend of the website we hoped to deliver. 
            </div>
          </div>
        </div>
    )
}