import React from "react";

export default function CompanyCam() {
    return (
        <div className='flex p-10'>
          <img className='rounded-3xl w-lg shadow-2xl' src="/CompanyCam.jpg"/>
          <div className='pl-12'>
            <h1 className='text-xl'>June 2024 - May 2025</h1>
            <h1 className='text-5xl font-bold'>Quality Assurance Intern</h1>
            <ul className='list-disc list-inside p-8 flex justify-around marker:text-blue-600'>
              <div>
                <li className='text-2xl pb-4 font-bold'> Cypress Automation</li>
                <li className='text-2xl pb-4 font-bold'> Mobile and Web Development</li>
                <li className='text-2xl font-bold'> Launch Darkly </li>
              </div>

              <div>
                <li className='text-2xl pb-4 font-bold'> Appium </li>
                <li className='text-2xl pb-4 font-bold'> API and Manual Testing </li>
                <li className='text-2xl pb-4 font-bold'> React Native </li>
              </div>
            </ul>
            <div className='text-xl'>
              During my time as a QA intern at CompanyCam in Lincoln, NE, which focused on both mobile and web development, 
              I gained hands-on experience with automation tools like Cypress and Appium to streamline and improve the efficiency of both web and mobile testing.
              I learned to write and execute automated test scripts, ensureing consistent functionality across platforms. Additionally, I became familiar 
              with the Launch Darkly feature flag management system, which helped to control feature flags and safely deploy new features without risking production
              stability. 
            </div>
          </div>
        </div>
    )
}