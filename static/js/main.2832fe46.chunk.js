(this["webpackJsonpmortgage-calculator-banks"]=this["webpackJsonpmortgage-calculator-banks"]||[]).push([[0],{16:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),r=a(9),i=a.n(r),l=(a(8),a(3)),c=a(4),h=a(2),o=a(6),u=a(5),m=a(10),b=a(0),d=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={salary:0,salarySecond:0,deposit:0,commitments:0,term:0,interest:0,showing:!1},e.handleChange=e.handleChange.bind(Object(h.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(h.a)(e)),e}return Object(c.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(m.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=parseInt(this.state.salary),a=parseInt(this.state.salarySecond),n=parseInt(this.state.deposit),s=parseInt(this.state.commitments),r=parseFloat(this.state.interest),i=parseInt(this.state.term);t&&n&&s&&i&&(this.props.onFormSubmit({salary:t,salarySecond:a,deposit:n,commitments:s,term:i,interest:r}),this.setState({salary:0,salarySecond:0,deposit:0,commitments:0,term:0,interest:0}))}},{key:"render",value:function(){var e=this,t=this.state.showing;return Object(b.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(b.jsx)("label",{name:"salary",children:"\u0412\u0430\u0448\u0430 \u0440\u0456\u0447\u043d\u0430 \u0437\u0430\u0440\u043f\u043b\u0430\u0442\u043d\u044f"}),Object(b.jsx)("input",{type:"number",placeholder:"\u0412\u0430\u0448\u0430 \u0437\u0430\u0440\u043f\u043b\u0430\u0442\u043d\u044f",name:"salary",value:this.state.salary,onChange:this.handleChange}),Object(b.jsxs)("div",{children:[Object(b.jsx)("button",{onClick:function(){return e.setState({showing:!t})},children:"\u0414\u043e\u0434\u0430\u0442\u0438 \u0438\u043d\u0448\u0438\u0439 \u0434\u043e\u0445\u0456\u0434"}),t?Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{name:"salarySecond",children:"\u0418\u043d\u0448\u0438\u0439 \u0434\u043e\u0445\u0456\u0434"}),Object(b.jsx)("input",{type:"number",placeholder:"\u0418\u043d\u0448\u0438\u0439 \u0434\u043e\u0445\u0456\u0434",name:"salarySecond",value:this.state.salarySecond,onChange:this.handleChange})]}):null]}),Object(b.jsx)("label",{children:"\u0412\u0430\u0448 \u0434\u0435\u043f\u043e\u0437\u0438\u0442"}),Object(b.jsx)("input",{type:"number",placeholder:"\u0412\u0430\u0448 \u0434\u0435\u043f\u043e\u0437\u0438\u0442",name:"deposit",value:this.state.deposit,onChange:this.handleChange}),Object(b.jsx)("label",{children:"\u0429\u043e\u043c\u0456\u0441\u044f\u0447\u043d\u0438\u0439 \u0432\u043d\u0435\u0441\u043e\u043a"}),Object(b.jsx)("input",{type:"number",placeholder:"\u0412\u0430\u0448 \u0449\u043e\u043c\u0456\u0441\u044f\u0447\u043d\u0438\u0439 \u0432\u043d\u0435\u0441\u043e\u043a",name:"commitments",value:this.state.commitments,onChange:this.handleChange}),Object(b.jsx)("label",{children:"\u0421\u0442\u0440\u043e\u043a \u0456\u043f\u043e\u0442\u0435\u043a\u0438 \u0432 \u0440\u043e\u043a\u0430\u0445"}),Object(b.jsx)("input",{type:"number",placeholder:"\u0412\u0430\u0448 \u0441\u0442\u0440\u043e\u043a \u0456\u043f\u043e\u0442\u0435\u043a\u0438 \u0432 \u0440\u043e\u043a\u0430\u0445",name:"term",value:this.state.term,onChange:this.handleChange}),Object(b.jsx)("label",{children:"\u0429\u043e\u043c\u0456\u0441\u044f\u0447\u043d\u0430 \u043f\u0440\u043e\u0446\u0435\u043d\u0442\u043d\u0430 \u0441\u0442\u0430\u0432\u043a\u0430 %"}),Object(b.jsx)("input",{type:"number",placeholder:"\u0412\u0430\u0448\u0430 \u0449\u043e\u043c\u0456\u0441\u044f\u0447\u043d\u0430 \u043f\u0440\u043e\u0446\u0435\u043d\u0442\u043d\u0430 \u0441\u0442\u0430\u0432\u043a\u0430 %",name:"interest",value:this.state.interest,onChange:this.handleChange}),Object(b.jsx)("input",{className:"calculate",type:"submit",value:"\u0420\u043e\u0437\u0440\u0430\u0445\u0443\u0432\u0430\u0442\u0438"})]})}}]),a}(n.Component),j=function(e){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("h2",{children:["\u0412\u0430\u0448\u0430 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430 \u0432\u0430\u0440\u0442\u0456\u0441\u0442\u044c \u0431\u0443\u0434\u0438\u043d\u043a\u0443: \u20b4",e.results," \u0433\u0440\u043d."]}),Object(b.jsxs)("h2",{children:["\u041e\u0447\u0456\u043a\u0443\u0432\u0430\u043d\u0456 \u0449\u043e\u043c\u0456\u0441\u044f\u0447\u043d\u0456 \u0432\u0438\u043f\u043b\u0430\u0442\u0438: \u20b4",e.repaymentResults]})]})},p=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={results:0,repaymentResults:0},e.handleFormSubmit=e.handleFormSubmit.bind(Object(h.a)(e)),e}return Object(c.a)(a,[{key:"handleFormSubmit",value:function(e){var t=3*(e.salary+e.salarySecond)+e.deposit-e.commitments,a=t-e.deposit,n=a/e.term,s=e.interest/100*a+n,r=Math.round(s/12);this.setState({results:t,repaymentResults:r})}},{key:"render",value:function(){return Object(b.jsxs)("div",{className:"calculator-container",children:[Object(b.jsx)("h1",{children:"Mortgage Calculator"}),Object(b.jsx)(d,{onFormSubmit:this.handleFormSubmit}),Object(b.jsx)(j,{results:this.state.results,repaymentResults:this.state.repaymentResults})]})}}]),a}(n.Component);var O=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(p,{})})};i.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(O,{})}),document.getElementById("root"))},8:function(e,t,a){}},[[16,1,2]]]);
//# sourceMappingURL=main.2832fe46.chunk.js.map