import React, { Component } from "react";
import General from "./components/General";
import Education from "./components/Education";
import Practical from "./components/Practical";
import "./styles/reset.css";
import "./styles/style.css";
import uniqid from "uniqid";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      general: {
        name: "your name",
        email: "your email",
        phone: "phone number",
        address: "your address",
        isEditing: false,
      },
      edus: [],

      schoolInfo: {
        school: "your school",
        title: "degree title",
        date: "graduation year",
        id: uniqid(),
        isEditing: false,
      },

      practicals: [],

      jobInfo: {
        title: "",
        company: "",
        tasks: "",
        dateStart: "",
        dateEnd: "",
        id: uniqid(),
        isEditing: false,
      },
    };

    this.editGeneral = this.editGeneral.bind(this);
    this.saveGeneral = this.saveGeneral.bind(this);
    this.editEdu = this.editEdu.bind(this);
    this.addEdu = this.addEdu.bind(this);
    this.deleteEduBtn = this.deleteEduBtn.bind(this);
    this.addJob = this.addJob.bind(this);
    this.editJobs = this.editJobs.bind(this);
    this.deleteJobBtn = this.deleteJobBtn.bind(this);
  }

  deleteEduBtn = (e) => {
    let editId = e.target.getAttribute("data");
    this.setState(
      {
        edus: this.state.edus.filter((edu) => edu.id !== editId),
      },
      () => {
        console.log(this.state.edus);
      }
    );
  };

  deleteJobBtn = (e) => {
    let editId = e.target.getAttribute("data");
    this.setState(
      {
        practicals: this.state.practicals.filter((job) => job.id !== editId),
      },
      () => {
        console.log(this.state.edus);
      }
    );
  };

  editGeneral = () => {
    this.setState({
      general: Object.assign({}, this.state.general, { isEditing: true }),
    });
  };

  saveGeneral = () => {
    this.setState(
      {
        general: {
          name: document.getElementById("generalName").value,
          email: document.getElementById("generalEmail").value,
          phone: document.getElementById("generalPhone").value,
          address: document.getElementById("generalAdd").value,
          isEditing: false,
        },
      },
      () => console.log(this.state.general)
    );
  };

  addEdu = () => {
    this.setState(
      {
        schoolInfo: {
          school: "your school",
          title: "degree title",
          date: "graduation year",
          id: uniqid(),
          isEditing: true,
        },
      },
      () =>
        this.setState({
          edus: [...this.state.edus, this.state.schoolInfo],
          schoolInfo: {
            school: "your school",
            title: "degree title",
            date: "graduation year",
            id: uniqid(),
            isEditing: false,
          },
        })
    );
  };

  addJob = () => {
    this.setState(
      {
        jobInfo: {
          title: "job title",
          company: "company name",
          tasks: "job tasks",
          dateStart: "start date",
          dateEnd: "end date",
          id: uniqid(),
          isEditing: true,
        },
      },
      () =>
        this.setState({
          practicals: [...this.state.practicals, this.state.jobInfo],
          jobInfo: {
            title: "job title",
            company: "company name",
            tasks: "job tasks",
            dateStart: "start date",
            dateEnd: "end date",
            id: uniqid(),
            isEditing: false,
          },
        })
    );
  };

  editEdu = (e) => {
    let editId = e.target.getAttribute("data");
    console.log(editId);
    let editTarget = this.state.edus.find(
      (schoolInfo) => schoolInfo.id === editId
    );

    let currentSection = document.getElementById(editId);
    if (editTarget.isEditing) {
      this.setState(
        (prevState) => ({
          edus: prevState.edus.map((schoolInfo) =>
            schoolInfo.id === editId
              ? Object.assign(
                  schoolInfo,
                  { isEditing: false },
                  {
                    school: currentSection.querySelector(
                      "input[name = 'schoolName']"
                    ).value,
                  },
                  {
                    title: currentSection.querySelector(
                      'input[name = "degreeTitle"]'
                    ).value,
                  },
                  {
                    date: currentSection.querySelector(
                      'input[name = "gradDate"]'
                    ).value,
                  }
                )
              : schoolInfo
          ),
        }),
        () => console.log(this.state.edus)
      );

      this.setState({
        schoolInfo: {
          school: "enter school name",
          title: "degree title",
          date: "graduation date",
          id: uniqid(),
          isEditing: false,
        },
      });
    } else {
      this.setState((prevState) => ({
        edus: prevState.edus.map((schoolInfo) =>
          schoolInfo.id === editId
            ? Object.assign(schoolInfo, { isEditing: true })
            : schoolInfo
        ),
      }));
    }
  };

  editJobs = (e) => {
    let editId = e.target.getAttribute("data");
    console.log(editId);
    let editTarget = this.state.practicals.find(
      (jobInfo) => jobInfo.id === editId
    );

    console.log(editTarget);

    let currentSection = document.getElementById(editId);
    if (editTarget.isEditing) {
      this.setState(
        (prevState) => ({
          practicals: prevState.practicals.map((jobInfo) =>
            jobInfo.id === editId
              ? Object.assign(
                  jobInfo,
                  { isEditing: false },
                  {
                    title: currentSection.querySelector(
                      "input[name = 'jobName']"
                    ).value,
                  },
                  {
                    company: currentSection.querySelector(
                      'input[name = "companyName"]'
                    ).value,
                  },
                  {
                    dateStart: currentSection.querySelector(
                      'input[name = "startDate"]'
                    ).value,
                  },
                  {
                    dateEnd: currentSection.querySelector(
                      'input[name="endDate"]'
                    ).value,
                  },
                  {
                    tasks: currentSection.querySelector('input[name="jobDesc"]')
                      .value,
                  }
                )
              : jobInfo
          ),
        }),
        () => console.log(this.state.practicals)
      );

      this.setState({
        jobInfo: {
          title: "",
          company: "",
          tasks: "",
          dateStart: "",
          dateEnd: "",
          id: uniqid(),
          isEditing: false,
        },
      });
    } else {
      this.setState((prevState) => ({
        practicals: prevState.practicals.map((jobInfo) =>
          jobInfo.id === editId
            ? Object.assign(jobInfo, { isEditing: true })
            : jobInfo
        ),
      }));
    }
  };

  render() {
    const { general, edus, practicals } = this.state;

    return (
      <div className="input-container">
        <General
          general={general}
          editGeneral={this.editGeneral}
          saveGeneral={this.saveGeneral}
        ></General>
        <div className="eduContain">
          <Education
            edus={edus}
            editEdu={this.editEdu}
            deleteEduBtn={this.deleteEduBtn}
          ></Education>
          <button className="addBtn" onClick={this.addEdu}>
            Add Education
          </button>
        </div>

        <div className="practContainer">
          <Practical
            practicals={practicals}
            editJobs={this.editJobs}
            deleteJobBtn={this.deleteJobBtn}
          ></Practical>
          <button className="addBtn" onClick={this.addJob}>
            Add Job
          </button>
        </div>
      </div>
    );
  }
}

export default App;
