"use strict";(self.webpackChunkgoit_react_lessons_new=self.webpackChunkgoit_react_lessons_new||[]).push([[670],{3670:function(e,s,t){t.r(s),t.d(s,{HomePage:function(){return I},default:function(){return w}});var a=t(5861),n=t(5671),o=t(3144),r=t(136),c=t(516),i=t(4687),l=t.n(i),d=t(8),m=t(2791),h=t(1087),u=t(7344),p="PostsPage_container__5TzYL",_="PostsPage_postList__MXe0o",P="PostsPage_postListItem__TaM8e",g="PostsPage_itemTitle__uTq0t",f="PostsPage_itemBody__EmXCp",x="PostsPage_errorBage__N1uHh",j="PostsPage_listWrapper__SCP8T",v="PostsPage_commentsList__zUQs1",N="PostsPage_commentsListItem__3NLa3",y="PostsPage_commentTitle__kPdAe",L="PostsPage_commentEmail__BYRAR",k="PostsPage_commentBody__4D3jd",S=t(184),I=function(e){(0,r.Z)(t,e);var s=(0,c.Z)(t);function t(){var e;(0,n.Z)(this,t);for(var o=arguments.length,r=new Array(o),c=0;c<o;c++)r[c]=arguments[c];return(e=s.call.apply(s,[this].concat(r))).state={posts:null,comments:null,selectedPostId:null,isLoading:!1,error:null},e.fetchPosts=(0,a.Z)(l().mark((function s(){var t,a;return l().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,e.setState({isLoading:!0}),s.next=4,d.Z.get("https://jsonplaceholder.typicode.com/posts");case 4:t=s.sent,a=t.data,e.setState({posts:a}),s.next=12;break;case 9:s.prev=9,s.t0=s.catch(0),e.setState({error:s.t0.message});case 12:return s.prev=12,e.setState({isLoading:!1}),s.finish(12);case 15:case"end":return s.stop()}}),s,null,[[0,9,12,15]])}))),e.fetchPostsComments=(0,a.Z)(l().mark((function s(){var t,a;return l().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,e.setState({isLoading:!0}),s.next=4,d.Z.get("https://jsonplaceholder.typicode.com/comments?postId=".concat(e.state.selectedPostId));case 4:t=s.sent,a=t.data,e.setState({comments:a}),s.next=12;break;case 9:s.prev=9,s.t0=s.catch(0),e.setState({error:s.t0.message});case 12:return s.prev=12,e.setState({isLoading:!1}),s.finish(12);case 15:case"end":return s.stop()}}),s,null,[[0,9,12,15]])}))),e.onSelectPostId=function(s){e.setState({selectedPostId:s})},e}return(0,o.Z)(t,[{key:"componentDidMount",value:function(){this.fetchPosts()}},{key:"componentDidUpdate",value:function(e,s){s.selectedPostId!==this.state.selectedPostId&&this.fetchPostsComments()}},{key:"render",value:function(){return(0,S.jsxs)("div",{className:p,children:[(0,S.jsx)("h1",{children:"HTTP-request"}),null!==this.state.error&&(0,S.jsxs)("p",{className:x,children:["Oops, some error occured... Error message: ",this.state.error]}),this.state.isLoading&&(0,S.jsx)(u.Z,{}),(0,S.jsxs)("div",{className:j,children:[(0,S.jsx)("ul",{className:_,children:null!==this.state.posts&&this.state.posts.map((function(e){return(0,S.jsx)("li",{className:P,children:(0,S.jsxs)(h.rU,{to:"/posts/".concat(e.id),children:[(0,S.jsx)("h2",{className:g,children:e.title}),(0,S.jsxs)("p",{className:f,children:[(0,S.jsx)("b",{children:"Body: "}),e.body]})]})},e.id)}))}),(0,S.jsxs)("ul",{className:v,children:[this.state.selectedPostId&&(0,S.jsxs)("li",{className:N,children:["Selected post id: ",this.state.selectedPostId]}),!this.state.isLoading&&null!==this.state.comments&&this.state.comments.map((function(e){return(0,S.jsxs)("li",{className:N,children:[(0,S.jsx)("h2",{className:y,children:e.name}),(0,S.jsxs)("h3",{className:L,children:["Email: ",e.email]}),(0,S.jsxs)("p",{className:k,children:[(0,S.jsx)("b",{children:"Body: "}),e.body]})]},e.id)}))]})]})]})}}]),t}(m.Component),w=I}}]);
//# sourceMappingURL=670.8ced0138.chunk.js.map