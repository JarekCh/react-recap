import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'

const url = 'https://course-api.com/react-tabs-project'
function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const resp = await fetch(url);
    const newJobs = await resp.json();
    setJobs(newJobs);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);  

  if(loading){
    return <section className='section loading'>
      <h1>Loading...</h1>
    </section>
  }
  const { company, dates, duties, title } = jobs[value];
  const jobDuties = duties.map((duty, i) => {
    return <div key={i} className='job-desc'>
      <FaAngleDoubleRight className='job-icon' />
      <p>{duty}</p>
    </div>
  })
  

  return <section className='section'>
    <div className='title'>
      <h2>expirence</h2>
      <div className="underline"></div>s
    </div>
    <div className="jobs-center">
      {/* btn container */}
      {/* job info */}
      <article className='job-info'>
        <h3>{title}</h3>
        <h4>{company}</h4>
        <p className='job-date'>{dates}</p>
        {jobDuties}
      </article>
    </div>
  </section>
}

export default App
