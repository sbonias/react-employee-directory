(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{17:function(e,t,a){e.exports=a(42)},22:function(e,t,a){},23:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(11),s=a.n(l);a(22),a(23);var c=function(){return r.a.createElement("div",{className:"Header"},r.a.createElement("h1",null,"Employee Directory"),r.a.createElement("p",null,"Sort the table by category and filter the users by property"))};var o=function(e){return r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"search"},"Search:"),r.a.createElement("input",{onChange:e.handleInputChange,value:e.value,name:"search",type:"text",className:"form-control",placeholder:"Search For an Employee",id:"search"}),r.a.createElement("br",null)))},u=a(12),i=a(13),m=a(16),h=a(15);var f=function(e){return r.a.createElement("tr",null,r.a.createElement("td",null,e.firstName),r.a.createElement("td",null,e.lastName),r.a.createElement("td",null,e.email))};var d=function(){return r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null,"First Name"),r.a.createElement("th",null,"Last Name"),r.a.createElement("th",null,"E-mail")))},E=a(14),p=a.n(E),v=function(){return p.a.get("https://randomuser.me/api/?results=25")};var g=function(e){return r.a.createElement("tr",null,r.a.createElement("td",null,e.firstName),r.a.createElement("td",null,e.lastName),r.a.createElement("td",null,e.email))},b=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(u.a)(this,a),(e=t.call(this)).handleInputChange=function(t){var a=t.target.value;console.log(a),e.setState({filterResults:a}),e.filterResults()},e.handleFormSubmit=function(t){t.preventDefault(),e.setState({search:t.target.value})},e.filterResults=function(t){var a=e.state.result;a=a.filter((function(e){return-1!==(e.firstName.toLowerCase()+e.lastName.toLowerCase()).indexOf(t.toLowerCase())})),e.setState({filterResults:a})},e.state={result:[],filterResults:[]},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;v().then((function(t){return e.setState({result:t.data.results,filterResults:t.data.results})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"Table"},r.a.createElement(o,{handleFormSubmit:this.handleFormSubmit,handleInputChange:this.handleInputChange,search:this.state.search}),r.a.createElement(d,null),this.state.result.map((function(e){return r.a.createElement(f,{className:"tableData-item",firstName:e.name.first,lastName:e.name.last,email:e.email})})),r.a.createElement(g,{result:this.state.filterResults,match:this.props.match,onChange:this.filterResults}))}}]),a}(n.Component);var y=function(){return r.a.createElement("div",{className:"Container"},r.a.createElement(c,null),r.a.createElement(b,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(41);s.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.5f10a432.chunk.js.map