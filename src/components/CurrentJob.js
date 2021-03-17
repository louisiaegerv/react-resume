import React from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'

const CurrentJob = ({ job }) => {
  console.log(job)
  return (
    <main className='current-job-content'>
      <h3 className='job-title'>{job.title}</h3>
      <p className='company'>{job.company}</p>
      <p className='dates'>{job.dates}</p>
      {job.duties.map((duty) => {
        return (
          <article className='job-duty-item'>
            <FaAngleDoubleRight />
            <p>{duty}</p>
          </article>
        )
      })}
    </main>
  )
}

export default CurrentJob
