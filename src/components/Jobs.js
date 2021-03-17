import React, { useState, useEffect } from 'react'

import CurrentJob from './CurrentJob'
import JobTitleList from './JobTitleList'

const url = 'https://course-api.com/react-tabs-project'

const Jobs = () => {
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)
  const [currentJobIndex, setCurrentJobIndex] = useState(0)

  const getJobs = async () => {
    setLoading(true)
    let res = await fetch(url)
    let data = await res.json()
    setJobs(data)
    setLoading(false)
  }

  useEffect(() => {
    jobs.length || getJobs()
  }, [])

  return (
    <>
      <section className='title'>
        <h2>Professional Experience</h2>
        <div className='underline'></div>
      </section>
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <section className='job-grid'>
          <JobTitleList
            jobs={jobs}
            setCurrentJobIndex={setCurrentJobIndex}
            currentJobIndex={currentJobIndex}
          />
          <CurrentJob job={jobs[currentJobIndex]} />
        </section>
      )}
    </>
  )
}

export default Jobs
