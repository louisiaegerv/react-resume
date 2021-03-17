import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
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

export default Jobs
