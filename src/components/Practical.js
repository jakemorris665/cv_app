import React from "react";

function Practical({ practicals, editJobs, deleteJobBtn }) {
  if (practicals === []) {
    return <div></div>;
  } else {
    let jobList = practicals.map(function (job) {
      if (job.isEditing) {
        return (
          <div className="practical-section section" id={job.id} key={job.id}>
            <div className="jobInfo">
              <input name="jobName" defaultValue={job.title}></input>
              <input name="companyName" defaultValue={job.company}></input>
            </div>
            <div className="inputDates">
              <input name="startDate" defaultValue={job.dateStart}></input>
              <input name="endDate" defaultValue={job.dateEnd}></input>
            </div>
            <input name="jobDesc" defaultValue={job.tasks}></input>
            <div className="btnWrap">
              <button onClick={editJobs} data={job.id} className="editBtn">
                Save
              </button>
              <button onClick={deleteJobBtn} data={job.id} className="editBtn">
                X
              </button>
            </div>
          </div>
        );
      } else {
        return (
          <div className="practical-section section" id={job.id} key={job.id}>
            <div className="jobInfo">
              <div>{job.title}</div>
              <div>{job.company}</div>
            </div>
            <div className="date">
              <div>{job.dateStart}</div>
              <div>-</div>
              <div>{job.dateEnd}</div>
            </div>
            <div>{job.tasks}</div>
            <div className="btnWrap">
              <button onClick={editJobs} data={job.id} className="editBtn">
                Edit
              </button>
              <button onClick={deleteJobBtn} data={job.id} className="editBtn">
                X
              </button>
            </div>
          </div>
        );
      }
    });
    return jobList;
  }
}

export default Practical;
