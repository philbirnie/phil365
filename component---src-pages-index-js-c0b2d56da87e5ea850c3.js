(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"77cP":function(e){e.exports=JSON.parse('[{"date":"2021-01-01","time":"23:45","distance":0.95,"map":"https://onthegomap.com/s/rf9hfdqk","remark":"Little after-Buckeyes victory run to kick things off"},{"date":"2021-01-02","time":"00:00","distance":0.96,"map":"https://onthegomap.com/s/rf9hfdqk"},{"date":"2021-01-03","time":"11:00","distance":4.12,"map":"https://onthegomap.com/s/3bjjdf6p"},{"date":"2021-01-04","time":"06:40","distance":2.02,"map":"https://onthegomap.com/s/4qkfvuk4","remark":"This bed is cozy... this was a terrible idea."},{"date":"2021-01-05","time":"18:15","distance":3.1,"map":"https://onthegomap.com/s/oj0mjo5h"},{"date":"2021-01-06","time":"21:15","distance":2.49,"map":"https://onthegomap.com/s/67ca4tg3"},{"date":"2021-01-07","time":"23:45","distance":1,"map":"https://onthegomap.com/s/4qkfvuk4","remark":"(Split)"},{"date":"2021-01-08","time":"00:00","distance":1.01,"map":"https://onthegomap.com/s/4qkfvuk4","remark":"(Split)"},{"date":"2021-01-09","time":"21:30","distance":4.45,"map":"https://onthegomap.com/s/vrbb2m83","remark":"Spotted 2 meteors!"},{"date":"2021-01-10","time":"23:30","distance":0.9,"map":"https://onthegomap.com/s/omdmrgvq"},{"date":"2021-01-11","time":"23:15","distance":0.9,"map":"https://onthegomap.com/s/omdmrgvq"},{"date":"2021-01-12","time":"21:15","distance":6.54,"map":"https://onthegomap.com/s/fs6gros9"},{"date":"2021-01-13","time":"22:30","distance":2.02,"map":"https://onthegomap.com/s/4qkfvuk4"},{"date":"2021-01-14","time":"20:15","distance":2.03,"map":"https://onthegomap.com/s/30mp0qqs"},{"date":"2021-01-15","time":"21:55","distance":3.11,"map":"https://onthegomap.com/s/pkm4ksle","remark":"As Richard would say, “Slipperier than snot on a door knob”"},{"date":"2021-01-16","time":"16:35","distance":2.46,"map":"https://onthegomap.com/s/acj7gqs2"},{"date":"2021-01-17","time":"23:50","distance":1.25,"map":"https://onthegomap.com/s/ac2e3n7b","remark":"(Split)"},{"date":"2021-01-18","time":"00:00","distance":1.25,"map":"https://onthegomap.com/s/ac2e3n7b","remark":"(Split)"},{"date":"2021-01-19","time":"05:40","distance":4.63,"map":"https://onthegomap.com/s/8prpmtes"},{"date":"2021-01-20","time":"22:30","distance":2.03,"map":"https://onthegomap.com/s/30mp0qqs","remark":"Steps feel a little lighter today..."},{"date":"2021-01-21","time":"18:40","distance":2.53,"map":"https://onthegomap.com/s/nh2d1s3q"},{"date":"2021-01-22","time":"15:50","distance":5.44,"map":"https://onthegomap.com/s/hannlncb"}]')},RXBc:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),m=a.n(n),l=a("Bl7J"),c=a("vrFN"),s=(a("E9XD"),a("77cP")),o=a("Wbzz"),r=function(e,t){return e+t},i=function(e){return Math.round(100*e)/100},d=function(){var e=100*s.map((function(e){return e.distance})).reduce(r);return m.a.createElement("table",null,m.a.createElement("thead",null,m.a.createElement("tr",null,m.a.createElement("th",{className:"col-date"},"Date"),m.a.createElement("th",{className:"col-time"},"Time of Day"),m.a.createElement("th",{className:"col-distance"},"Distance"),m.a.createElement("th",{className:"col-cumulative"},"Total Distance"),m.a.createElement("th",{className:"col-route"},"Route"),m.a.createElement("th",{className:"col-remarks"},"Remarks"))),m.a.createElement("tbody",null,s.reverse().map((function(t){var a=Math.round(e)/100;return e-=100*t.distance,m.a.createElement("tr",{key:t.date},m.a.createElement("td",{className:"col-date"},t.date),m.a.createElement("td",{className:"col-time"},t.time),m.a.createElement("td",{className:"col-distance"},t.distance),m.a.createElement("td",{className:"col-cumulative"},a),m.a.createElement("td",{className:"col-route"},m.a.createElement(o.Link,{target:"_blank",to:t.map},"Map")),m.a.createElement("td",{className:"col-remarks"},t.remark))}))))},p=function(){var e=s.map((function(e){return e.distance})).reduce(r),t=s.length,a=e/t,n=Math.max.apply(Math,s.map((function(e){return parseFloat(e.distance)}))),l=1e3/365*t-e,c=l>0?"short":"ahead";return m.a.createElement("div",{className:"stats"},m.a.createElement("dl",null,m.a.createElement("div",null,m.a.createElement("dt",null,"Average Distance"),m.a.createElement("dd",null,i(a)," miles")),m.a.createElement("div",null,m.a.createElement("dt",null,"Maximum Distance"),m.a.createElement("dd",null,n," miles")),m.a.createElement("div",null,m.a.createElement("dt",null,"Yearly Completion"),m.a.createElement("dd",null,i(s.length/3.65),"%")),m.a.createElement("div",null,m.a.createElement("dt",null,"1,000 Mile Goal Pace"),m.a.createElement("dd",null,i(Math.abs(l))," miles ",c))))};t.default=function(){return m.a.createElement(l.a,null,m.a.createElement(c.a,{title:"Phil Birnie runs for 365 Days in a Row"}),m.a.createElement("p",null,"Hello! My name is Phil.  I live in Worthington, Ohio."),m.a.createElement("p",null,"Starting on January 1, 2021, I will attempt to run for 365 days in a row -- just for fun. Keep track of my progress below."),m.a.createElement("h3",null,"Rules:"),m.a.createElement("ul",null,m.a.createElement("li",null,"Run at least 0.5 miles per day"),m.a.createElement("li",null,"Runs than span midnight may count as both days.")),m.a.createElement(p,null),m.a.createElement(d,null))}}}]);
//# sourceMappingURL=component---src-pages-index-js-c0b2d56da87e5ea850c3.js.map