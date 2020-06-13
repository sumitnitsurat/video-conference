(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[5],{119:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=(n(72),n(14)),o=n(40),s=n(38),l=function(){var e=r.useState(""),t=Object(i.a)(e,2),n=t[0],a=t[1];return r.createElement(r.Fragment,null,r.createElement("p",null,"Create instant session for anyone to share and join via link"),r.createElement(s.a,{className:"bg-app",size:"lg",style:{width:"100%"},onClick:function(e){e.preventDefault();var t=Object(o.b)();a(t)}},"Create New Session"),n&&r.createElement("div",{className:"mt-2"},"Click ",r.createElement("a",{href:n},"here")," to enter the room. Share ",n," with your collegues and friends to interact."))},c=n(37),u=n(44),h=function(){var e=r.useState(""),t=Object(i.a)(e,2),n=t[0],a=t[1],l=r.useState(""),c=Object(i.a)(l,2),u=c[0],h=c[1],m=r.useState(void 0),f=Object(i.a)(m,2),d=f[0],g=f[1],p="".concat(window.location.origin,"/private/").concat(n,"/").concat(d," }");return r.createElement(r.Fragment,null,r.createElement("p",null,"Create secure meeting to talk with your family, friends and collegues."),r.createElement("div",{className:"text-center"},r.createElement("span",{className:"form-text small text-danger",id:"err-msg"})),r.createElement("div",{className:"mb-3"},r.createElement("label",{for:"room-name"},"Room Name"),r.createElement("input",{type:"text",onChange:function(e){return a(e.target.value)},className:"form-control rounded-0",placeholder:"Room Name"})),r.createElement("div",{className:"mb-3"},r.createElement("label",{for:"your-name"},"Enter As"),r.createElement("input",{type:"text",onChange:function(e){return h(e.target.value)},className:"form-control rounded-0",placeholder:"Your Name"})),r.createElement("div",{className:"mb-3"},r.createElement(s.a,{className:"bg-app",size:"lg",style:{width:"100%"},onClick:function(e){e.preventDefault();var t=Object(o.a)(n);console.log("makign room",n,u,t),g(t)}},"Create Secure Session")),!!n&&!!d&&r.createElement("div",{className:"mt-2 text-center"},r.createElement("p",null,"Hello ",u," !!! Click ",r.createElement("a",{href:p},"here")," to enter the room."),r.createElement("p",null,"Share ",r.createElement("b",null,"Room Name:")," ",n," and ",r.createElement("b",null,"Code:"),d," with your collegues and friends to interact.")))},m=n(2);t.default=function(e){var t=Object(m.f)();return a.a.createElement(a.a.Fragment,null,a.a.createElement(c.a,null,a.a.createElement(s.a,{variant:"outline-info",onClick:function(){return t.push("/private")}},"Join Secure Meeting")),a.a.createElement("div",{className:"container mt-5",id:"room-create"},a.a.createElement("div",{className:"col-12 h2 mt-5 text-center"},a.a.createElement("img",{width:"100",src:"/assets/logo.png"})),a.a.createElement("div",{className:"row mt-2"},a.a.createElement("div",{className:"col-12 col-md-5 mt-5 col-sm-12 mb-3 p-5"},a.a.createElement(l,null)),a.a.createElement("div",{className:"vl col-md-2 d-none d-sm-none d-md-block mt-4 mb-4 offset-md-1"}),a.a.createElement("div",{className:"col-12 col-md-4 col-sm-12 mt-4"},a.a.createElement(h,null)))),a.a.createElement("div",{className:"container-fluid",id:"username-set",hidden:!0},a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col-12 h4 mt-5 text-center"},"Your Name")),a.a.createElement("div",{className:"row mt-2"},a.a.createElement("div",{className:"col-12 text-center"},a.a.createElement("span",{className:"form-text small text-danger",id:"err-msg-username"})),a.a.createElement("div",{className:"col-12 col-md-4 offset-md-4 mb-3"},a.a.createElement("label",{for:"username"},"Your Name"),a.a.createElement("input",{type:"text",id:"username",className:"form-control rounded-0",placeholder:"Your Name"})),a.a.createElement("div",{className:"col-12 col-md-4 offset-md-4 mb-3"},a.a.createElement("button",{id:"enter-room",className:"btn btn-block rounded-0 btn-info"},"Enter Room")))),"/"===e.location.pathname&&!e.location.search&&a.a.createElement(u.a,null))}},37:function(e,t,n){"use strict";var r=n(0),a=n(117);t.a=function(e){var t=e.children;return r.createElement(a.a,{className:"justify-content-between bg-app",sticky:"top",variant:"light"},r.createElement(a.a.Brand,{href:"/"},r.createElement("img",{alt:"",src:"/logo.svg",width:"30",height:"30",className:"d-inline-block align-top"})," ",r.createElement("span",{style:{color:"#fff",fontWeight:600}},"Namaste Talk")),t||null)}},40:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return s})),n.d(t,"c",(function(){return l}));var r=n(43),a=n.n(r),i=function(){return Math.random().toString(16).slice(2).substring(0,8)},o=function(){var e=i();return sessionStorage.setItem("username","Anonymous"),"".concat(window.location.origin,"/").concat(e.trim().replace(" ","_"),"_").concat(i())},s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Anonymous";try{var n="".concat(i().trim().replace(" ","_")).concat(i());sessionStorage.setItem("username",t),console.log(n,"room");var r=new a.a(e);console.log(r);var o=r.encodeHex(n);return console.log(o),o}catch(s){console.log("in erorr",s)}},l=function(e,t){console.log(e,t);var n=new a.a(e).decodeHex(t);return console.log(n,"roomcod"),n}},43:function(e,t,n){var r,a,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,a=[t],void 0===(i="function"===typeof(r=function(e){"use strict";function t(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}e.__esModule=!0,e.onlyChars=e.withoutChars=e.keepUnique=e.default=void 0;var n=function(){function e(e,n,c,u){if(void 0===e&&(e=""),void 0===n&&(n=0),void 0===c&&(c="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"),void 0===u&&(u="cfhistuCFHISTU"),this.minLength=n,"number"!=typeof n)throw new TypeError("Hashids: Provided 'minLength' has to be a number (is "+typeof n+")");if("string"!=typeof e)throw new TypeError("Hashids: Provided 'salt' has to be a string (is "+typeof e+")");if("string"!=typeof c)throw new TypeError("Hashids: Provided alphabet has to be a string (is "+typeof c+")");var m=Array.from(e),f=Array.from(c),d=Array.from(u);this.salt=m;var g=o(f);if(g.length<r)throw new Error("Hashids: alphabet must contain at least "+r+" unique characters, provided: "+g);this.alphabet=s(g,d);var p,E,y,N=l(d,g);this.seps=h(N,m),(0===this.seps.length||this.alphabet.length/this.seps.length>a)&&(p=Math.ceil(this.alphabet.length/a))>this.seps.length&&(E=p-this.seps.length,(y=this.seps).push.apply(y,t(this.alphabet.slice(0,E))),this.alphabet=this.alphabet.slice(E)),this.alphabet=h(this.alphabet,m);var w=Math.ceil(this.alphabet.length/i);this.alphabet.length<3?(this.guards=this.seps.slice(0,w),this.seps=this.seps.slice(w)):(this.guards=this.alphabet.slice(0,w),this.alphabet=this.alphabet.slice(w)),this.guardsRegExp=v(this.guards),this.sepsRegExp=v(this.seps),this.allowedCharsRegExp=b([].concat(t(this.alphabet),t(this.guards),t(this.seps)))}var n=e.prototype;return n.encode=function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];var i="";return(r=Array.isArray(e)?e:[].concat(t(null!=e?[e]:[]),t(r))).length?(r.every(c)||(r=r.map((function(e){return"bigint"==typeof e||"number"==typeof e?e:g(String(e))}))),r.every(u)?this._encode(r).join(""):i):i},n.decode=function(e){return e&&"string"==typeof e&&0!==e.length?this._decode(e):[]},n.encodeHex=function(e){switch(typeof e){case"bigint":e=e.toString(16);break;case"string":if(!/^[0-9a-fA-F]+$/.test(e))return"";break;default:throw new Error("Hashids: The provided value is neither a string, nor a BigInt (got: "+typeof e+")")}var t=p(e,12,(function(e){return parseInt("1"+e,16)}));return this.encode(t)},n.decodeHex=function(e){return this.decode(e).map((function(e){return e.toString(16).slice(1)})).join("")},n._encode=function(e){var n=this,r=this.alphabet,a=e.reduce((function(e,t,n){return e+("bigint"==typeof t?Number(t%BigInt(n+100)):t%(n+100))}),0),i=[r[a%r.length]],o=i.slice(),s=this.seps,l=this.guards;if(e.forEach((function(a,l){var c,u=o.concat(n.salt,r);r=h(r,u);var f=m(a,r);if((c=i).push.apply(c,t(f)),l+1<e.length){var d=f[0].codePointAt(0)+l,g="bigint"==typeof a?Number(a%BigInt(d)):a%d;i.push(s[g%s.length])}})),i.length<this.minLength){var c=(a+i[0].codePointAt(0))%l.length;if(i.unshift(l[c]),i.length<this.minLength){var u=(a+i[2].codePointAt(0))%l.length;i.push(l[u])}}for(var f=Math.floor(r.length/2);i.length<this.minLength;){var d,g;r=h(r,r),(d=i).unshift.apply(d,t(r.slice(f))),(g=i).push.apply(g,t(r.slice(0,f)));var p=i.length-this.minLength;if(p>0){var v=p/2;i=i.slice(v,v+this.minLength)}}return i},n.isValidId=function(e){return this.allowedCharsRegExp.test(e)},n._decode=function(e){if(!this.isValidId(e))throw new Error("The provided ID ("+e+") is invalid, as it contains characters that do not exist in the alphabet ("+this.guards.join("")+this.seps.join("")+this.alphabet.join("")+")");var n=e.split(this.guardsRegExp),r=n[3===n.length||2===n.length?1:0];if(0===r.length)return[];var a=r[Symbol.iterator]().next().value,i=r.slice(a.length).split(this.sepsRegExp),o=this.alphabet,s=[],l=i,c=Array.isArray(l),u=0;for(l=c?l:l[Symbol.iterator]();;){var m;if(c){if(u>=l.length)break;m=l[u++]}else{if((u=l.next()).done)break;m=u.value}var d=m,g=h(o,[a].concat(t(this.salt),t(o)).slice(0,o.length));s.push(f(Array.from(d),g)),o=g}return this._encode(s).join("")!==e?[]:s},e}();e.default=n;var r=16,a=3.5,i=12,o=function(e){return Array.from(new Set(e))};e.keepUnique=o;var s=function(e,t){return e.filter((function(e){return!t.includes(e)}))};e.withoutChars=s;var l=function(e,t){return e.filter((function(e){return t.includes(e)}))};e.onlyChars=l;var c=function(e){return"bigint"==typeof e||!Number.isNaN(Number(e))&&Math.floor(Number(e))===e},u=function(e){return"bigint"==typeof e||e>=0&&Number.isSafeInteger(e)};function h(e,t){if(0===t.length)return e;for(var n,r=e.slice(),a=r.length-1,i=0,o=0;a>0;a--,i++){o+=n=t[i%=t.length].codePointAt(0);var s=(n+i+o)%a,l=r[a],c=r[s];r[s]=l,r[a]=c}return r}var m=function(e,t){var n=[];if("bigint"==typeof e){var r=BigInt(t.length);do{n.unshift(t[Number(e%r)]),e/=r}while(e>BigInt(0))}else do{n.unshift(t[e%t.length]),e=Math.floor(e/t.length)}while(e>0);return n},f=function(e,t){return e.reduce((function(n,r){var a=t.indexOf(r);if(-1===a)throw new Error("The provided ID ("+e.join("")+") is invalid, as it contains characters that do not exist in the alphabet ("+t.join("")+")");if("bigint"==typeof n)return n*BigInt(t.length)+BigInt(a);var i=n*t.length+a;if(Number.isSafeInteger(i))return i;if("function"==typeof BigInt)return BigInt(n)*BigInt(t.length)+BigInt(a);throw new Error("Unable to decode the provided string, due to lack of support for BigInt numbers in the current environment")}),0)},d=/^\+?[0-9]+$/,g=function(e){return d.test(e)?parseInt(e,10):NaN},p=function(e,t,n){return Array.from({length:Math.ceil(e.length/t)},(function(r,a){return n(e.slice(a*t,(a+1)*t))}))},v=function(e){return new RegExp(e.map((function(e){return E(e)})).sort((function(e,t){return t.length-e.length})).join("|"))},b=function(e){return new RegExp("^["+e.map((function(e){return E(e)})).sort((function(e,t){return t.length-e.length})).join("")+"]+$")},E=function(e){return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")}})?r.apply(t,a):r)||(e.exports=i)},44:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(0),a=n(117),i=function(){return r.createElement(a.a,{className:"justify-content-around",fixed:"bottom",bg:"dark",variant:"dark"},r.createElement("span",{style:{color:"#fff",fontWeight:600}},"\xa9 Namaste Talk 2020"),r.createElement("span",{style:{color:"#fff",fontWeight:600}},"contact/feedback: ",r.createElement("a",{className:"text-white",href:"mailto:admin@namaste.ind.in"},"admin@namaste.ind.in")))}},72:function(e,t,n){}}]);
//# sourceMappingURL=5.a9121505.chunk.js.map