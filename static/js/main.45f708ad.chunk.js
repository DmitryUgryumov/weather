(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{25:function(e,t,c){},32:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),n=c(17),i=c.n(n),r=c(5),l=c(20),d=c(4),j=c(2),o=(c(25),c(0)),h=function(e){var t=e.selectedCity,c=e.removeCity;return Object(o.jsx)("div",{className:"selected",children:t.length?Object(o.jsx)("ul",{className:"selected__ul",children:t.map((function(e){return Object(o.jsxs)("li",{className:"selected__li",children:[Object(o.jsx)(r.b,{className:"selected__link",to:"/search/city=".concat(e),children:e}),Object(o.jsx)("button",{className:"btn__remove",onClick:function(){return c(e)},children:"X"})]},e)}))}):Object(o.jsx)("p",{className:"selected__empty-value",children:"No selected cities"})})},b=s.a.createContext(),m=function(e){var t=Object(a.useContext)(b),c=t.addCity,s=t.selectedCity.includes(e.cityName),n="https://openweathermap.org/img/wn/".concat(e.icon,"@2x.png");return Object(o.jsx)("div",{className:"weather-card card",children:Object(o.jsxs)("div",{className:"card-container",children:[Object(o.jsxs)("div",{className:"card__location",children:[Object(o.jsx)("span",{children:"Weather for "}),Object(o.jsx)("span",{className:"card__city",children:e.cityName}),Object(o.jsxs)("span",{className:"card__country",children:[" (",e.countryName,")"]})]}),Object(o.jsx)("div",{className:"card__5-day",children:Object(o.jsx)(r.b,{to:"/weather-detail/".concat(e.cityName,"/today+0day"),children:"Weather for 5 days"})}),Object(o.jsxs)("div",{className:"card__flex-container",children:[Object(o.jsx)("img",{className:"card__icon",src:n,alt:""}),Object(o.jsxs)("div",{className:"card__temp-container",children:[Object(o.jsxs)("p",{className:"card__temp",children:[Math.round(e.temp-273),"\xb0C"]}),Object(o.jsxs)("p",{className:"card__temp-feels-like",children:["Feels like: ",Math.round(e.feelsLike-273),"\xb0C"]})]})]}),Object(o.jsx)("p",{className:"card__description",children:e.weatherDescription}),Object(o.jsxs)("p",{className:"card__wind",children:["Wind: ",e.wind.toFixed(1),"m/s"]}),Object(o.jsx)("button",{className:"card__btn btn__add",disabled:s,onClick:function(){return c(e.cityName)},children:s?"city is selected":"select city"})]})})},u="60881de5bfadd478bce737c02789308b";var O=function(e){var t=e.setError,c=e.setCityInfo,s=e.setIsRequested,n=e.setIsLoaded,i=Object(a.useState)(""),r=Object(d.a)(i,2),l=r[0],h=r[1],b=Object(j.f)(),m=Object(j.g)().cityName;return Object(a.useEffect)((function(){var e=m.replace("city=","");h(e),e?function(e,t,c,a,s){var n="https://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&lang=en&appid=").concat(u);fetch(n).then((function(e){return e.ok?e.json():Promise.reject(e.statusText)})).then((function(e){t(e),c(!0),a(!1),s(!0)})).catch((function(e){c(!0),a(e),s(!0)}))}(e,c,n,t,s):(t(!1),s(!1),c(null))}),[m]),Object(o.jsx)("div",{className:"search",children:Object(o.jsxs)("form",{className:"search__form",onSubmit:function(e){e.preventDefault(),""!==l&&b.push("/search/city=".concat(l))},children:[Object(o.jsx)("input",{className:"search__input",type:"text",placeholder:"Write city",value:l,onChange:function(e){return h(e.target.value)}}),Object(o.jsx)("button",{type:"submit",className:"search__btn",children:"search"})]})})},x=function(){var e=Object(a.useState)(!1),t=Object(d.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)(!1),i=Object(d.a)(n,2),r=i[0],l=i[1],h=Object(a.useState)(!1),b=Object(d.a)(h,2),u=b[0],x=b[1],_=Object(a.useState)(null),p=Object(d.a)(_,2),f=p[0],N=p[1],v=Object(j.g)().cityName,y=Object(o.jsx)(O,{setError:s,setIsLoaded:l,isLoaded:r,setCityInfo:N,setIsRequested:x});return f||u?c?Object(o.jsxs)("div",{className:"error",children:[y,Object(o.jsxs)("p",{className:"error__text",children:["Error: ",'"'.concat(v.replace("city=",""),'" ').concat(c)]})]}):r?Object(o.jsxs)(o.Fragment,{children:[y,Object(o.jsx)("div",{className:"container",children:Object(o.jsx)(m,{cityName:f.name,countryName:f.sys.country,temp:f.main.temp,weatherDescription:f.weather[0].description,icon:f.weather[0].icon,wind:f.wind.speed,feelsLike:f.main.feels_like})})]}):Object(o.jsx)("div",{className:"loading",children:"Loading..."}):Object(o.jsx)("div",{children:y})},_=["London","New York","Paris","Moscow","Tokyo","Madrid","Beijing","Dubai","Singapore","Barcelona"],p=function(){var e=Object(a.useState)(null),t=Object(d.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)(!1),i=Object(d.a)(n,2),r=i[0],l=i[1],j=Object(a.useState)(null),h=Object(d.a)(j,2),b=h[0],O=h[1];return Object(a.useEffect)((function(){var e=Math.floor(Math.random()*_.length);!function(e,t,c,a){var s="https://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&lang=en&appid=").concat(u);fetch(s).then((function(e){return e.ok?e.json():Promise.reject(e.statusText)})).then((function(e){t(e),c(!0),a(!1)})).catch((function(e){c(!0),a(e)}))}(_[e],O,l,s)}),[]),c?Object(o.jsx)("div",{className:"error",children:Object(o.jsxs)("p",{children:["Error: ",c]})}):r?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"home-title",children:"Weather forecast"}),Object(o.jsx)("div",{className:"container",children:Object(o.jsx)(m,{cityName:b.name,countryName:b.sys.country,temp:b.main.temp,weatherDescription:b.weather[0].description,icon:b.weather[0].icon,wind:b.wind.speed,feelsLike:b.main.feels_like})})]}):Object(o.jsx)("div",{className:"loading",children:"Loading..."})},f=function(e){var t=e.weatherList;return Object(o.jsx)("ul",{className:"weather__list",children:t.map((function(e){return Object(o.jsxs)("li",{className:"weather__list-item",children:[Object(o.jsx)("div",{className:"weather__list-info",children:e.dt_txt.slice(11,16)}),Object(o.jsxs)("div",{className:"weather__list-info weather__temp",children:[Math.round(e.main.temp-273),"\xb0C"]}),Object(o.jsx)("div",{className:"weather__list-info",children:Object(o.jsx)("img",{src:"https://openweathermap.org/img/wn/".concat(e.weather[0].icon,"@2x.png"),alt:""})}),Object(o.jsx)("div",{className:"weather__list-info",children:e.weather[0].description}),Object(o.jsxs)("div",{className:"weather__list-info",children:["Wind: ",e.wind.speed.toFixed(1),"m/s"]}),Object(o.jsx)("div",{className:"weather__list-info",children:Object(o.jsxs)("p",{children:["Feels like: ",Math.round(e.main.feels_like-273),"\xb0C"]})})]},e.dt)}))})},N=["January","February","March","April","May","June","July","August","September","October","November","December"],v=function(){var e=Object(a.useState)(!1),t=Object(d.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)(!1),i=Object(d.a)(n,2),l=i[0],h=i[1],b=Object(a.useState)(null),m=Object(d.a)(b,2),O=m[0],x=m[1],_=Object(a.useState)([]),p=Object(d.a)(_,2),v=p[0],y=p[1],w=Object(j.h)(),g=w.path,S=w.url,k=Object(j.g)().cityName;return Object(a.useEffect)((function(){!function(e,t,c,a,s){var n="https://api.openweathermap.org/data/2.5/forecast?q=".concat(e,"&lang=en&appid=").concat(u);fetch(n).then((function(e){return e.ok?e.json():Promise.reject(e.statusText)})).then((function(e){t(e),s(e.list.map((function(e){return e.dt_txt.slice(5,10).split("-")})).filter((function(e,t,c){return 0===t||e[1]!==c[t-1][1]})).map((function(t){return{month:t[0],day:t[1],weatherList:e.list.filter((function(e){return e.dt_txt.slice(8,10)===t[1]}))}}))),c(!0)})).catch((function(e){a(e),c(!0)}))}(k,x,h,s,y)}),[]),c?Object(o.jsx)("div",{className:"error",children:Object(o.jsxs)("p",{className:"error__text",children:["Error: ",'"'.concat(k,'" ').concat(c)]})}):l?Object(o.jsxs)("div",{className:"weather-item weather",children:[Object(o.jsx)("div",{className:"weather__title",children:Object(o.jsxs)("div",{className:"weather__location",children:[Object(o.jsx)("span",{className:"weather__city",children:O.city.name}),Object(o.jsxs)("span",{className:"weather__country",children:["(",O.city.country,")"]})]})}),Object(o.jsx)("nav",{className:"nav nav-weather",children:Object(o.jsx)("ul",{className:"nav__list",children:v.map((function(e,t){return Object(o.jsx)("li",{className:window.location.href.includes("+".concat(t))?"nav__item nav__item_active":"nav__item",children:Object(o.jsx)(r.b,{className:"nav__link",to:"".concat(S,"/today+").concat(t,"day"),children:e.day!==(new Date).getDate().toString()?"".concat(e.day," ").concat(N[e.month-1]):"Today"})},e.day)}))})}),Object(o.jsx)("div",{className:"weather__list-container",children:Object(o.jsx)(j.c,{children:v.map((function(e,t){return Object(o.jsx)(j.a,{path:"".concat(g,"/today+").concat(t,"day"),children:Object(o.jsx)(f,{cityInfo:O,monthNames:N,weatherList:e.weatherList})},e.day)}))})})]}):Object(o.jsx)("div",{className:"loading",children:"Loading..."})},y=function(){return Object(o.jsx)("nav",{className:"nav",children:Object(o.jsxs)("ul",{className:"nav__list",children:[Object(o.jsx)("li",{className:"nav__item",children:Object(o.jsx)(r.b,{className:"nav__link",to:"/search/city=",children:"Search"})}),Object(o.jsx)("li",{className:"nav__item",children:Object(o.jsx)(r.b,{className:"nav__link",to:"/selected",children:"Selected"})})]})})};var w=function(){var e=Object(a.useState)(localStorage.getItem("selectedCity")?JSON.parse(localStorage.getItem("selectedCity")):[]),t=Object(d.a)(e,2),c=t[0],s=t[1];return Object(a.useEffect)((function(){localStorage.setItem("selectedCity",JSON.stringify(c))}),[c]),Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(y,{}),Object(o.jsx)(b.Provider,{value:{addCity:function(e){c.includes(e)||s((function(t){return[].concat(Object(l.a)(t),[e])}))},selectedCity:c},children:Object(o.jsxs)(j.c,{children:[Object(o.jsx)(j.a,{exact:!0,path:"/weather",children:Object(o.jsx)(p,{})}),Object(o.jsx)(j.a,{path:"/search/:cityName",children:Object(o.jsx)(x,{})}),Object(o.jsx)(j.a,{path:"/selected",children:Object(o.jsx)(h,{selectedCity:c,removeCity:function(e){return s((function(t){return t.filter((function(t){return t!==e}))}))}})}),Object(o.jsx)(j.a,{path:"/weather-detail/:cityName",children:Object(o.jsx)(v,{})})]})})]})};i.a.render(Object(o.jsx)(r.a,{children:Object(o.jsx)(w,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.45f708ad.chunk.js.map