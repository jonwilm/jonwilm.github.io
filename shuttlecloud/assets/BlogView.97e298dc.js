import{_ as g,o as e,c as o,d as t,F as d,r as _,g as l,h as m,p as f,b as v,i as h,e as T}from"./index.69bbdc3b.js";import{_ as M}from"./line-titles.163e197b.js";var L="assets/clock.179a74e0.svg",P="assets/author.68e5da34.svg",S="assets/loading.27f3774f.svg";const i=s=>(f("data-v-77042360"),s=s(),v(),s),b={class:"py-8 bg-[#f8f8f8]"},k={class:"container mx-auto px-4 py-8"},E=i(()=>t("h1",{class:"sc-title sc-text-black text-center"},[t("span",{class:"content-line"},[T(" Blog "),t("img",{class:"line",src:M,alt:"line"})])],-1)),y={class:"content-box sc-text-black"},N={key:0},O=["innerHTML"],w={class:"data-post"},x=i(()=>t("img",{class:"h-3 md:h-6 inline mr-2",src:L,alt:"clock"},null,-1)),U=["innerHTML"],H=i(()=>t("br",{class:"md:hidden"},null,-1)),R=i(()=>t("img",{class:"h-3 md:h-6 inline mr-2 md:ml-4",src:P,alt:"author"},null,-1)),B=["innerHTML"],I=["innerHTML"],V={key:0},j=i(()=>t("img",{class:"mx-auto w-20",src:S,alt:"loading"},null,-1)),A=[j],F={class:"text-center"},$="https://blog.shuttlecloud.com/wp-json/wp/v2/posts?per_page=",D="&offset=",C="x-wp-total",q={data(){return{posts:[],authors:[],NUM_RESULTS:5,numOffset:0,pag:1,totalPosts:0,loading:!1}},mounted(){this.getAuthors(),h.get(this.getEndPoint).then(s=>{this.posts=s.data,this.totalPosts=s.headers[C]})},computed:{isMorePages:function(){return this.pag*this.NUM_RESULTS/this.totalPosts<1},getEndPoint:function(){return`${$}${this.NUM_RESULTS}${D}${this.numOffset}`}},methods:{getAuthors(){fetch("https://blog.shuttlecloud.com/wp-json/wp/v2/users").then(s=>s.json()).then(s=>{this.authors=s})},getMorePosts:function(){this.pag+=1,this.numOffset+=this.NUM_RESULTS,this.loading=!0,h.get(this.getEndPoint).then(s=>{this.posts=this.posts.concat(s.data)}).finally(()=>this.loading=!1)}}},z=Object.assign(q,{setup(s){return(a,r)=>(e(),o("div",b,[t("div",k,[E,(e(!0),o(d,null,_(a.posts,(n,u)=>(e(),o("div",{key:u},[t("div",y,[n.status=="publish"?(e(),o("div",N,[t("p",{class:"title sc-text-black",innerHTML:n.title.rendered},null,8,O),t("p",w,[x,t("span",{innerHTML:n.date},null,8,U),H,R,(e(!0),o(d,null,_(a.authors,(c,p)=>(e(),o("span",{key:p},[n.author==c.id?(e(),o("span",{key:0,innerHTML:c.name},null,8,B)):l("",!0)]))),128))]),t("p",{class:"content-post",innerHTML:n.content.rendered},null,8,I)])):l("",!0)])]))),128)),a.loading?(e(),o("div",V,A)):l("",!0),t("div",F,[a.isMorePages?(e(),o("button",{key:0,role:"button",onClick:r[0]||(r[0]=m((...n)=>a.getMorePosts&&a.getMorePosts(...n),["prevent"])),class:"sc-btn-purple btn-center-out"}," Older Post ")):l("",!0)])])]))}});var K=g(z,[["__scopeId","data-v-77042360"]]);export{K as default};
