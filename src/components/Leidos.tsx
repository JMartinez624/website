import React from "react";

export default function Leidos() {
    return (
        <div className='flex p-10'>
          <img className='rounded-3xl w-lg shadow-2xl' src="/Leidos.png"/>
          <div className='pl-12'>
            <h1 className='text-xl'>May 2023 - August 2023</h1>
            <h1 className='text-5xl font-bold'>Software Engineering Intern</h1>
            <ul className='list-disc list-inside p-8 flex justify-around marker:text-blue-600'>
              <div>
                <li className='text-2xl pb-4 font-bold'> React </li>
                <li className='text-2xl pb-4 font-bold'> Java </li>
                <li className='text-2xl pb-4 font-bold'> PostgreSQL </li>
                <li className='text-2xl font-bold'> Jira </li>
              </div>

              <div>
                <li className='text-2xl pb-4 font-bold'> Javascript + Typescript </li>
                <li className='text-2xl pb-4 font-bold'> CI/CD </li>
                <li className='text-2xl pb-4 font-bold'> Figma + Storybook </li>
              </div>
            </ul>
            <div className='text-xl'>
              During my time as a Software Engineering intern at Leidos in Omaha, NE, I learned a lot and met some great people!
              I gained experience with React, Java, Springboot and PostgreSQL among others. I learned a lot of design systems and working
              in sprints while using Jira to keep track of tickets and backlogs. Aside from coding, I spent some time getting my ass handed to
              me while playing Smash Bros in an intern tournament as well as taking advantage of the food trucks that came by.
            </div>
          </div>
        </div>
    )
}