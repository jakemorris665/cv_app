(this.webpackJsonpcv_app=this.webpackJsonpcv_app||[]).push([[0],{19:function(e,t,a){"use strict";a.r(t);var n=a(2),i=a.n(n),d=a(8),s=a.n(d),c=(a(6),a(7),a(5)),l=a(9),o=a(10),r=a(1),u=a(12),j=a(11),b=a(0);var m=function(e){var t=e.general,a=e.editGeneral,n=e.saveGeneral;return t.isEditing?Object(b.jsxs)("div",{className:"general-section section",data:t.id,children:[Object(b.jsx)("input",{defaultValue:t.name,id:"generalName"}),Object(b.jsx)("input",{defaultValue:t.email,id:"generalEmail"}),Object(b.jsx)("input",{defaultValue:t.phone,id:"generalPhone"}),Object(b.jsx)("input",{defaultValue:t.address,id:"generalAdd"}),Object(b.jsx)("button",{onClick:n,className:"editBtnGen",children:"Save"})]}):Object(b.jsxs)("div",{className:"general-section section",children:[Object(b.jsx)("div",{children:t.name}),Object(b.jsx)("div",{children:t.email}),Object(b.jsx)("div",{children:t.phone}),Object(b.jsx)("div",{children:t.address}),Object(b.jsx)("button",{onClick:a,className:"editBtnGen",children:"Edit"})]})};var h=function(e){var t=e.edus,a=e.editEdu,n=e.deleteEduBtn;return console.log(t),t===[]?Object(b.jsx)("div",{}):t.map((function(e){return e.isEditing?Object(b.jsxs)("div",{className:"edu-section section",id:e.id,children:[Object(b.jsx)("input",{name:"schoolName",defaultValue:e.school}),Object(b.jsx)("input",{name:"degreeTitle",defaultValue:e.title}),Object(b.jsx)("input",{name:"gradDate",defaultValue:e.date}),Object(b.jsxs)("div",{className:"btnWrap",children:[Object(b.jsx)("button",{onClick:a,data:e.id,className:"editBtn",children:"Save"}),Object(b.jsx)("button",{data:e.id,className:"editBtn",onClick:n,children:"X"})]})]},e.id):Object(b.jsxs)("div",{className:"edu-section section",id:e.id,children:[Object(b.jsx)("div",{children:e.school}),Object(b.jsx)("div",{children:e.title}),Object(b.jsx)("div",{className:"date",children:e.date}),Object(b.jsxs)("div",{className:"btnWrap",children:[Object(b.jsx)("button",{onClick:a,data:e.id,className:"editBtn",children:"Edit"}),Object(b.jsx)("button",{data:e.id,className:"editBtn",onClick:n,children:"X"})]})]},e.id)}))};var O=function(e){var t=e.practicals,a=e.editJobs,n=e.deleteJobBtn;return t===[]?Object(b.jsx)("div",{}):t.map((function(e){return e.isEditing?Object(b.jsxs)("div",{className:"practical-section section",id:e.id,children:[Object(b.jsxs)("div",{className:"jobInfo",children:[Object(b.jsx)("input",{name:"jobName",defaultValue:e.title}),Object(b.jsx)("input",{name:"companyName",defaultValue:e.company})]}),Object(b.jsxs)("div",{className:"inputDates",children:[Object(b.jsx)("input",{name:"startDate",defaultValue:e.dateStart}),Object(b.jsx)("input",{name:"endDate",defaultValue:e.dateEnd})]}),Object(b.jsx)("input",{name:"jobDesc",defaultValue:e.tasks}),Object(b.jsxs)("div",{className:"btnWrap",children:[Object(b.jsx)("button",{onClick:a,data:e.id,className:"editBtn",children:"Save"}),Object(b.jsx)("button",{onClick:n,data:e.id,className:"editBtn",children:"X"})]})]},e.id):Object(b.jsxs)("div",{className:"practical-section section",id:e.id,children:[Object(b.jsxs)("div",{className:"jobInfo",children:[Object(b.jsx)("div",{children:e.title}),Object(b.jsx)("div",{children:e.company})]}),Object(b.jsxs)("div",{className:"date",children:[Object(b.jsx)("div",{children:e.dateStart}),Object(b.jsx)("div",{children:"-"}),Object(b.jsx)("div",{children:e.dateEnd})]}),Object(b.jsx)("div",{children:e.tasks}),Object(b.jsxs)("div",{className:"btnWrap",children:[Object(b.jsx)("button",{onClick:a,data:e.id,className:"editBtn",children:"Edit"}),Object(b.jsx)("button",{onClick:n,data:e.id,className:"editBtn",children:"X"})]})]},e.id)}))},g=a(3),p=a.n(g),v=function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).deleteEduBtn=function(e){var t=e.target.getAttribute("data");n.setState({edus:n.state.edus.filter((function(e){return e.id!==t}))},(function(){console.log(n.state.edus)}))},n.deleteJobBtn=function(e){var t=e.target.getAttribute("data");n.setState({practicals:n.state.practicals.filter((function(e){return e.id!==t}))},(function(){console.log(n.state.edus)}))},n.editGeneral=function(){n.setState({general:Object.assign({},n.state.general,{isEditing:!0})})},n.saveGeneral=function(){n.setState({general:{name:document.getElementById("generalName").value,email:document.getElementById("generalEmail").value,phone:document.getElementById("generalPhone").value,address:document.getElementById("generalAdd").value,isEditing:!1}},(function(){return console.log(n.state.general)}))},n.addEdu=function(){n.setState({schoolInfo:{school:"your school",title:"degree title",date:"graduation year",id:p()(),isEditing:!0}},(function(){return n.setState({edus:[].concat(Object(c.a)(n.state.edus),[n.state.schoolInfo]),schoolInfo:{school:"your school",title:"degree title",date:"graduation year",id:p()(),isEditing:!1}})}))},n.addJob=function(){n.setState({jobInfo:{title:"job title",company:"company name",tasks:"job tasks",dateStart:"start date",dateEnd:"end date",id:p()(),isEditing:!0}},(function(){return n.setState({practicals:[].concat(Object(c.a)(n.state.practicals),[n.state.jobInfo]),jobInfo:{title:"job title",company:"company name",tasks:"job tasks",dateStart:"start date",dateEnd:"end date",id:p()(),isEditing:!1}})}))},n.editEdu=function(e){var t=e.target.getAttribute("data");console.log(t);var a=n.state.edus.find((function(e){return e.id===t})),i=document.getElementById(t);a.isEditing?(n.setState((function(e){return{edus:e.edus.map((function(e){return e.id===t?Object.assign(e,{isEditing:!1},{school:i.querySelector("input[name = 'schoolName']").value},{title:i.querySelector('input[name = "degreeTitle"]').value},{date:i.querySelector('input[name = "gradDate"]').value}):e}))}}),(function(){return console.log(n.state.edus)})),n.setState({schoolInfo:{school:"enter school name",title:"degree title",date:"graduation date",id:p()(),isEditing:!1}})):n.setState((function(e){return{edus:e.edus.map((function(e){return e.id===t?Object.assign(e,{isEditing:!0}):e}))}}))},n.editJobs=function(e){var t=e.target.getAttribute("data");console.log(t);var a=n.state.practicals.find((function(e){return e.id===t}));console.log(a);var i=document.getElementById(t);a.isEditing?(n.setState((function(e){return{practicals:e.practicals.map((function(e){return e.id===t?Object.assign(e,{isEditing:!1},{title:i.querySelector("input[name = 'jobName']").value},{company:i.querySelector('input[name = "companyName"]').value},{dateStart:i.querySelector('input[name = "startDate"]').value},{dateEnd:i.querySelector('input[name="endDate"]').value},{tasks:i.querySelector('input[name="jobDesc"]').value}):e}))}}),(function(){return console.log(n.state.practicals)})),n.setState({jobInfo:{title:"",company:"",tasks:"",dateStart:"",dateEnd:"",id:p()(),isEditing:!1}})):n.setState((function(e){return{practicals:e.practicals.map((function(e){return e.id===t?Object.assign(e,{isEditing:!0}):e}))}}))},n.state={general:{name:"your name",email:"your email",phone:"phone number",address:"your address",isEditing:!1},edus:[],schoolInfo:{school:"your school",title:"degree title",date:"graduation year",id:p()(),isEditing:!1},practicals:[],jobInfo:{title:"",company:"",tasks:"",dateStart:"",dateEnd:"",id:p()(),isEditing:!1}},n.editGeneral=n.editGeneral.bind(Object(r.a)(n)),n.saveGeneral=n.saveGeneral.bind(Object(r.a)(n)),n.editEdu=n.editEdu.bind(Object(r.a)(n)),n.addEdu=n.addEdu.bind(Object(r.a)(n)),n.deleteEduBtn=n.deleteEduBtn.bind(Object(r.a)(n)),n.addJob=n.addJob.bind(Object(r.a)(n)),n.editJobs=n.editJobs.bind(Object(r.a)(n)),n.deleteJobBtn=n.deleteJobBtn.bind(Object(r.a)(n)),n}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state,t=e.general,a=e.edus,n=e.practicals;return Object(b.jsxs)("div",{className:"input-container",children:[Object(b.jsx)(m,{general:t,editGeneral:this.editGeneral,saveGeneral:this.saveGeneral}),Object(b.jsxs)("div",{className:"eduContain",children:[Object(b.jsx)(h,{edus:a,editEdu:this.editEdu,deleteEduBtn:this.deleteEduBtn}),Object(b.jsx)("button",{className:"addBtn",onClick:this.addEdu,children:"Add Education"})]}),Object(b.jsxs)("div",{className:"practContainer",children:[Object(b.jsx)(O,{practicals:n,editJobs:this.editJobs,deleteJobBtn:this.deleteJobBtn}),Object(b.jsx)("button",{className:"addBtn",onClick:this.addJob,children:"Add Job"})]})]})}}]),a}(n.Component);s.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(v,{})}),document.getElementById("root"))},6:function(e,t,a){},7:function(e,t,a){}},[[19,1,2]]]);
//# sourceMappingURL=main.ab696766.chunk.js.map