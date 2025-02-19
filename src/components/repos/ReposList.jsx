import React from 'react'
import PropTypes from 'prop-types'
import ReposItem from './ReposItem'

function ReposList({repos}) {
  return (
    <div className="rounded-lg shadow-lg card bg-base-100">
        <div className="card-body">
            <h2 className="text-3xl my-4 font-bold card-title">
                Latest Repositories
            </h2>
            {repos.map((repo)=>(
                <ReposItem key={repo.id} repo={repo}/>
            ))}
        </div>
    </div>
  )
}

ReposList.prototype = {
    repos: PropTypes.array.isRequired
}

export default ReposList