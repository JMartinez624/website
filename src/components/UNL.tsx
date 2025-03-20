import React from "react";

export default function UNL() {
    return (
        <div className='flex p-10'>
          <img className='rounded-3xl w-900 h-auto shadow-2xl' src="/UNL.png"/>
          <div className='pl-12'>
            <h1 className='text-xl'>August 2022 - May 2024</h1>
            <h1 className='text-5xl font-bold'>IT Assistant</h1>
            <ul className='list-disc list-inside p-8 flex justify-around marker:text-blue-600'>
              <div>
                <li className='text-2xl pb-4 font-bold'> Microsoft Teams </li>
                <li className='text-2xl pb-4 font-bold'> Jamf </li>
                <li className='text-2xl font-bold'> Footprints </li>
              </div>

              <div>
                <li className='text-2xl pb-4 font-bold'> ACD </li>
                <li className='text-2xl pb-4 font-bold'> Salespoint </li>
              </div>
            </ul>
            <div className='text-xl'>
              While working as an IT Assitant on campus at the University of Nebraska - Lincoln, I helped to troubleshoot
              technical problems for students, staff, and alumni. My role involved diagnosing and troubleshooting a wide range of 
              technical issues, such as network connectivity problems, software installation errors, and account access concerns.
              I responded to both walk-ins and phone inquiries, assisting newly enrolled students and alumni with setting up their 
              credentials, email accounts, and required academic software to ensure a smooth transition into the university's digital environment.
              Additionally, I guided users through multi-factor authentication (MFA) setup, password resets, and security best practices to enhance account protection.
            </div>
          </div>
        </div>
    )
}