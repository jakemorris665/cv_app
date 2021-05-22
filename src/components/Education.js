import React from "react";

function Education({ edus, editEdu, deleteEduBtn }) {
  console.log(edus);
  if (edus === []) {
    return <div></div>;
  } else {
    let eduList = edus.map(function (schoolInfo) {
      if (schoolInfo.isEditing) {
        return (
          <div
            className="edu-section section"
            id={schoolInfo.id}
            key={schoolInfo.id}
          >
            <input name="schoolName" defaultValue={schoolInfo.school}></input>
            <input name="degreeTitle" defaultValue={schoolInfo.title}></input>
            <input name="gradDate" defaultValue={schoolInfo.date}></input>
            <div className="btnWrap">
              <button
                onClick={editEdu}
                data={schoolInfo.id}
                className="editBtn"
              >
                Save
              </button>
              <button
                data={schoolInfo.id}
                className="editBtn"
                onClick={deleteEduBtn}
              >
                X
              </button>
            </div>
          </div>
        );
      } else {
        return (
          <div
            className="edu-section section"
            id={schoolInfo.id}
            key={schoolInfo.id}
          >
            <div>{schoolInfo.school}</div>
            <div>{schoolInfo.title}</div>
            <div className="date">{schoolInfo.date}</div>
            <div className="btnWrap">
              <button
                onClick={editEdu}
                data={schoolInfo.id}
                className="editBtn"
              >
                Edit
              </button>
              <button
                data={schoolInfo.id}
                className="editBtn"
                onClick={deleteEduBtn}
              >
                X
              </button>
            </div>
          </div>
        );
      }
    });
    return eduList;
  }
}

export default Education;
