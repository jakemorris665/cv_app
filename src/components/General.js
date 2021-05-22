import React from "react";

function General({ general, editGeneral, saveGeneral }) {
  if (general.isEditing) {
    return (
      <div className="general-section section" data={general.id}>
        <input defaultValue={general.name} id="generalName"></input>
        <input defaultValue={general.email} id="generalEmail"></input>
        <input defaultValue={general.phone} id="generalPhone"></input>
        <input defaultValue={general.address} id="generalAdd"></input>
        <button onClick={saveGeneral} className="editBtnGen">
          Save
        </button>
      </div>
    );
  } else {
    return (
      <div className="general-section section">
        <div>{general.name}</div>
        <div>{general.email}</div>
        <div>{general.phone}</div>
        <div>{general.address}</div>

        <button onClick={editGeneral} className="editBtnGen">
          Edit
        </button>
      </div>
    );
  }
}

export default General;
