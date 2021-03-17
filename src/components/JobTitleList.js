import React from 'react'

const JobTitleList = ({ jobs, setCurrentJobIndex, currentJobIndex }) => {
  return (
    <aside className='job-selector'>
      {jobs.map((job, index) => {
        return (
          <button
            className={`job-btn ${index === currentJobIndex && 'active-btn'}`}
            onClick={() => setCurrentJobIndex(index)}
          >
            {job.company}
          </button>
        )
      })}
    </aside>
  )
}

export default JobTitleList
