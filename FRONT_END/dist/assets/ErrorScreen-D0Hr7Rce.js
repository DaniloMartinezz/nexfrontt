import{r as o,j as s}from"./index-B0oUuGW6.js";function l(t){var r,a,e="";if(typeof t=="string"||typeof t=="number")e+=t;else if(typeof t=="object")if(Array.isArray(t)){var n=t.length;for(r=0;r<n;r++)t[r]&&(a=l(t[r]))&&(e&&(e+=" "),e+=a)}else for(a in t)t[a]&&(e&&(e+=" "),e+=a);return e}function i(){for(var t,r,a=0,e="",n=arguments.length;a<n;a++)(t=arguments[a])&&(r=l(t))&&(e&&(e+=" "),e+=r);return e}const c=({number:t=20})=>{const[r,a]=o.useState([]);return o.useEffect(()=>{const e=[...new Array(t)].map(()=>({top:-5,left:Math.floor(Math.random()*window.innerWidth)+"px",animationDelay:Math.random()*1+.2+"s",animationDuration:Math.floor(Math.random()*8+2)+"s"}));a(e)},[t]),s.jsx(s.Fragment,{children:[...r].map((e,n)=>s.jsx("span",{className:i("pointer-events-none absolute left-1/2 top-1/2 h-0.5 w-0.5 rotate-[215deg] animate-meteor rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10]"),style:e,children:s.jsx("div",{className:"pointer-events-none absolute top-1/2 -z-10 h-[1px] w-[50px] -translate-y-1/2 bg-gradient-to-r from-slate-500 to-transparent"})},n))})},m="/assets/Satalite-FE0z4IA5.png",f="/assets/Rocket-Dm1dr4Zo.png",d=()=>s.jsx(s.Fragment,{children:s.jsxs("div",{className:"h-screen bg-black md:flex md:flex-col md:justify-center md:items-center",children:[s.jsx(c,{number:30}),s.jsx("img",{src:m,alt:"",className:"  md:w-[30%]"}),s.jsxs("div",{className:"font-inter flex flex-col justify-center items-center text-light-100",children:[s.jsx("h2",{className:"text-text-lighter text-2xl text-center font-medium",children:"Todos nos perdemos as vezes."}),s.jsx("h3",{className:"text-text-base text-center font-normal pt-2 text-light-500",children:"Você terá acesso a essa funcionalidade em breve, continue acompanhando!"})]}),s.jsx("img",{src:f,alt:"",className:"md:w-[20%]"})]})});export{d as default};