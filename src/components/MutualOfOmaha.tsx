import React from "react";

export default function MutualOfOmaha() {
    return (
        <div className='flex p-10'>
          <img className='rounded-3xl w-lg shadow-2xl' src="/MOO.png"/>
          <div className='pl-12'>
            <h1 className='text-xl'>August 2023 - May 2024 </h1>
            <h1 className='text-5xl font-bold'>Software Developer (Capstone) </h1>
            <ul className='list-disc list-inside p-8 flex justify-around marker:text-blue-600'>
              <div>
                <li className='text-2xl pb-4 font-bold'> Java </li>
                <li className='text-2xl pb-4 font-bold'> DynamoDB </li>
                <li className='text-2xl pb-4 font-bold'> NoSQL </li>
                <li className='text-2xl pb-4 font-bold'> CI/CD Pipeline </li>
              </div>

              <div>
                <li className='text-2xl pb-4 font-bold'> Jenkins </li>
                <li className='text-2xl pb-4 font-bold'> Gradle </li>
                <li className='text-2xl pb-4 font-bold'> SonarQube </li>
              </div>
            </ul>
            <div className='text-xl'>
            As my junior year capstone, I was tasked with working alongside a team of 4 others to deliver a data observabiilty
            platform for Mutual of Omaha. We worked in an agile environment and held weekly status meetings to keep our client up
            to date on any changes as well as inform them of any risks that may have come up. I aided in desiging and implementing 
            a database and its tables using DynamoDB to support Mutual of Omaha's scalable applications. Also used Jenkins to create a CI/CD
            pipeline to automate the build, testing, and deployment.
            </div>
          </div>
        </div>
    )
}