(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{58:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a(0),i=a.n(c),n=a(26),r=a.n(n),o=a(9),l=a(2),j=a(14),m=a.n(j),b=a(27),d=a(28),u=a(29),O=a(33),v=a(32),h=a(30),x=a.n(h),p=a(8);a(58);var _=function(e){var t=Object(c.useState)([]),a=Object(p.a)(t,2),i=a[0],n=a[1],r=Object(c.useState)([]),l=Object(p.a)(r,2),j=l[0],m=l[1],b=Object(c.useState)(""),d=Object(p.a)(b,2),u=d[0],O=d[1];return Object(c.useEffect)((function(){n(e.movie),m(e.movie.genres),O(e.movie.summary),document.title="movie list"})),Object(s.jsx)(o.b,{to:{pathname:"/movie-detail",state:{movieData:i}},children:Object(s.jsxs)("div",{className:"movie",children:[Object(s.jsx)("img",{src:i.medium_cover_image,alt:i.title,title:i.title}),Object(s.jsxs)("div",{className:"movie__data",children:[Object(s.jsx)("h3",{className:"movie__title",children:i.title}),Object(s.jsx)("h5",{className:"movie__year",children:i.year}),Object(s.jsx)("ul",{className:"movie__genres",children:j.map((function(e,t){return Object(s.jsx)("li",{className:"genres__genre",children:e},t)}))}),Object(s.jsxs)("p",{className:"movie__summary",children:[u.slice(0,140),"..."]})]})]})})},f=(a(64),function(e){Object(O.a)(a,e);var t=Object(v.a)(a);function a(e){var s;return Object(d.a)(this,a),(s=t.call(this,e)).state={movies:[],isLoading:!0},s.getMovies=Object(b.a)(m.a.mark((function e(){var t,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");case 2:t=e.sent,a=t.data.data.movies,s.setState({movies:a,isLoading:!1});case 5:case"end":return e.stop()}}),e)}))),console.log("app start"),s}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return Object(s.jsx)("section",{className:"container",children:t?Object(s.jsx)("div",{className:"Loader",children:Object(s.jsx)("span",{className:"Loader__text",children:"Loading..."})}):Object(s.jsx)("div",{className:"movies",children:a.map((function(e){return Object(s.jsx)(_,{movie:e},e.id)}))})})}}]),a}(i.a.Component));a(65);var g=function(){return Object(s.jsxs)("div",{className:"about__container",children:[Object(s.jsx)("span",{children:"About this page: I built it because I love movies."}),Object(s.jsx)("span",{children:"ironcow"})]})};a(66);var N=function(e){var t=Object(c.useState)([]),a=Object(p.a)(t,2),i=a[0],n=a[1],r=Object(c.useState)([]),o=Object(p.a)(r,2),l=o[0],j=o[1],m=Object(c.useState)([]),b=Object(p.a)(m,2),d=b[0],u=b[1];return Object(c.useEffect)((function(){void 0===e.location.state?e.history.push("/"):(n(e.location.state.movieData),j(e.location.state.movieData.genres),u(e.location.state.movieData.torrents))})),Object(s.jsxs)("div",{className:"detail",children:[Object(s.jsx)("img",{src:i.medium_cover_image,alt:i.title,title:i.title}),Object(s.jsxs)("div",{className:"detail__data",children:[Object(s.jsx)("h3",{className:"detail__title",children:i.title}),Object(s.jsx)("h5",{className:"detail__year",children:i.year}),Object(s.jsx)("ul",{className:"detail__genres",children:l.map((function(e,t){return Object(s.jsx)("li",{className:"genres__genre",children:e},t)}))}),Object(s.jsx)("p",{className:"detail__summary",children:i.summary}),Object(s.jsx)("p",{className:"detail__link",children:d.map((function(e,t){return Object(s.jsxs)("li",{children:[Object(s.jsxs)("a",{href:e.url,children:["download link ",t]}),Object(s.jsx)("b",{})]},t)}))})]})]})};a(67),a(68);var y=function(){return Object(s.jsxs)("div",{className:"nav",children:[Object(s.jsx)(o.b,{to:"/",children:"Home"}),Object(s.jsx)(o.b,{to:"/about",children:"About"})]})};var k=function(){return Object(s.jsxs)(o.a,{children:[Object(s.jsx)(y,{className:"navi"}),Object(s.jsxs)("div",{className:"main",children:[Object(s.jsx)(l.a,{path:"/",exact:!0,component:f}),Object(s.jsx)(l.a,{path:"/about",component:g}),Object(s.jsx)(l.a,{path:"/movie-detail",component:N})]})]})};r.a.render(Object(s.jsx)(k,{}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.99d4085b.chunk.js.map